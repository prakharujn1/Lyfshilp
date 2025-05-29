const express = require("express");
const router = express.Router();
const {
  sendOtp,
  verifyOtp,
  completeOnboarding,
} = require("../controllers/userController");

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/complete-onboarding", completeOnboarding);

module.exports = router;