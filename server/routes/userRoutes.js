const express = require("express");
const router = express.Router();
const {
  sendOtp,
  verifyOtp,
  test,
  loginUser
} = require("../controllers/userController");

router.get("/",test)
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/login", loginUser);

 
module.exports = router;