// routes/progressRoutes.js
const express = require("express");
const router = express.Router();
const authenticateUser = require("../middlewares/authMiddleware");
const {
  markChallengeComplete,
  getUserProgress,
} = require("../controllers/DMController");

router.post("/challenge-complete", authenticateUser, markChallengeComplete);
router.get("/get-challenges", authenticateUser, getUserProgress);

module.exports = router;