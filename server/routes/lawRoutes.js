 import { Router } from "express";
import authenticateUser from "../middlewares/authMiddleware.js";
import {
  markChallengeComplete,
  getUserProgress,
} from "../controllers/lawController.js";

const router = Router();
 
router.post("/challenge-complete", authenticateUser, markChallengeComplete);
router.get("/get-challenges", authenticateUser, getUserProgress);

export default router;
