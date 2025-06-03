const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



const markChallengeComplete = async (req, res) => {
  const { moduleIndex, challengeIndex } = req.body;
  const userId = req.user.id;

  try {
    const progress = await prisma.financeChallenge.upsert({
      where: {
        userId_moduleIndex_challengeIndex: {
          userId,
          moduleIndex,
          challengeIndex,
        },
      },
      update: {
        completed: true,
        completedAt: new Date(),
      },
      create: {
        userId,
        moduleIndex,
        challengeIndex,
        completed: true,
        completedAt: new Date(),
      },
    });

    res.json({ success: true, progress });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to update progress" });
  }
};

const getUserProgress = async (req, res) => {
  const userId = req.user.id;

  try {
    const progress = await prisma.financeChallenge.findMany({
      where: { userId, completed: true },
    });

    res.json({ success: true, progress });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to fetch progress" });
  }
};

module.exports = {
  markChallengeComplete,
  getUserProgress,
};