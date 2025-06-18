// routes/userRoutes.js

import { Router } from "express";
import {
  sendOtp,
  verifyOtpAndRegister,
  verifyOtpAndLogin,
  test,
  getMe,
} from "../controllers/userController.js";

const router = Router();

router.get("/", test);
router.post("/send-otp", sendOtp);
router.post("/verify-otp-login", verifyOtpAndLogin);
router.post("/verify-otp-register", verifyOtpAndRegister);
router.get("/me", getMe);

export default router;
