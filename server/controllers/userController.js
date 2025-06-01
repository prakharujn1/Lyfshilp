require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");
const twilio = require("twilio");

const twilioClient = new twilio(process.env.Account_SID, process.env.Auth_Token);

// Register
const sendOtp = async (req, res) => {
  const { phonenumber, name, age, userClass, gender, characterName, style, traits } = req.body;

  if (!phonenumber || !name || !age || !userClass || !gender || !characterName || !style || !traits) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const existingUser = await prisma.user.findUnique({ where: { phonenumber } });
  if (existingUser) {
    return res.status(400).json({ success: false, message: "User already registered" });
  }

  const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

  const user = await prisma.user.create({
    data: {
      phonenumber,
      name,
      age,
      userClass,
      gender,
      characterName,
      style,
      traits,
      otp,
      otpExpiration: new Date(Date.now() + 5 * 60 * 1000),
      createdAt: new Date(),
    }
  });

  const messageBody = `Welcome to EduManiax! 🎓\nYour registration OTP is: ${otp}\nUse this code to verify your account. It expires in 5 minutes.`;

  await twilioClient.messages.create({
    body: messageBody,
    from: process.env.Twilio_phone_number,
    to: phonenumber
  });

  res.status(200).json({ success: true, message: "OTP sent" }); // ⚠️ Avoid returning OTP
};

// Verify OTP
const verifyOtp = async (req, res) => {
  const { phonenumber, otp } = req.body;
  const user = await prisma.user.findUnique({ where: { phonenumber } });

  if (!user) {
    return res.status(404).json({ success: false, message: "User not registered" });
  }

  if (user.otp !== otp || new Date() > user.otpExpiration) {
    return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
  }

  const token = jwt.sign({ id: user.id }, process.env.Jwt_sec, { expiresIn: "5d" });

  res.status(200).json({ success: true, message: "Logged in", token, user });
};

// Login
const loginUser = async (req, res) => {
  const { phonenumber } = req.body;

  if (!phonenumber) {
    return res.status(400).json({ success: false, message: "Phone number required" });
  }

  const user = await prisma.user.findUnique({ where: { phonenumber } });
  if (!user) {
    return res.status(404).json({ success: false, message: "User not registered" });
  }

  const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

  await prisma.user.update({
    where: { phonenumber },
    data: {
      otp,
      otpExpiration: new Date(Date.now() + 5 * 60 * 1000),
    },
  });

  const messageBody = `EduManiax Login Alert 🔐\nYour login OTP is: ${otp}\nUse this code to access your account. It is valid for 5 minutes. Do not share it with anyone.`;

  await twilioClient.messages.create({
    body: messageBody,
    from: process.env.Twilio_phone_number,
    to: phonenumber
  });

  res.status(200).json({ success: true, message: "OTP sent for login" }); // ⚠️ Avoid returning OTP
};

// Test Route
const test = async (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to EduManiax!" });
};

module.exports = { sendOtp, verifyOtp, loginUser, test };
