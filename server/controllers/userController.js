require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");
const twilio = require("twilio");

const twilioClient = new twilio(process.env.Account_SID, process.env.Auth_Token);

const sendOtp = async (req, res) => { 
  const { phonenumber } = req.body;
  if (!phonenumber) return res.status(400).json({ success: false, message: "Phone number required" });

  const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

  const user = await prisma.user.upsert({
    where: { phonenumber },
    update: { otp, otpExpiration: new Date(Date.now() + 5 * 60 * 1000) }, // 5 min expiry
    create: { phonenumber, otp, otpExpiration: new Date(Date.now() + 5 * 60 * 1000) },
  });

//   await twilioClient.messages.create({
//     body: `Your OTP is: ${otp}`,
//     from: process.env.Twilio_phone_number,
//     to: phonenumber
//   });

  res.status(200).json({ success: true, message: "OTP sent", otp }); // ⚠️ Remove otp in production
};

const verifyOtp = async (req, res) => {
  const { phonenumber, otp } = req.body;
  const user = await prisma.user.findUnique({ where: { phonenumber } });

  if (!user || user.otp !== otp || new Date() > user.otpExpiration) {
    return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
  }

  const token = jwt.sign({ id: user.id }, process.env.Jwt_sec, { expiresIn: "5d" });
  res.status(200).json({ success: true, message: "Logged in", token, user });
};

const completeOnboarding = async (req, res) => {
  const { token } = req.headers;
  const { gender, characterName, style, traits } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.Jwt_sec);
    const userId = decoded.id;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        gender,
        characterName,
        style,
        traits,
        onboarded: true,
      },
    });

    res.status(200).json({ success: true, message: "Onboarding completed", user: updatedUser });
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports = { sendOtp, verifyOtp, completeOnboarding };
