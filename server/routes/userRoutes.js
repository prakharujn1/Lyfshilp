const express = require("express");
const router = express.Router();
const {
  sendOtp, verifyOtpAndRegister, verifyOtpAndLogin, test , getMe
} = require("../controllers/userController");

router.get("/",test)
router.post("/send-otp", sendOtp);
router.post("/verify-otp-login", verifyOtpAndLogin);
router.post("/verify-otp-register", verifyOtpAndRegister); 
router.get("/me", getMe);

 
module.exports = router;