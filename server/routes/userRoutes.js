// routes/userRoutes.js

import { Router } from "express";
import {
  sendOtpForRegistration,
  sendOtpForLogin,
  verifyOtpAndRegister,
  verifyOtpAndLogin,
  test,
  getMe,
} from "../controllers/userController.js";

const router = Router();

router.get("/", test);
router.post("/send-otp-register", sendOtpForRegistration);
router.post("/send-otp-login", sendOtpForLogin);
router.post("/verify-otp-register", verifyOtpAndRegister);
router.post("/verify-otp-login", verifyOtpAndLogin);

router.get("/me", getMe);

export default router;
