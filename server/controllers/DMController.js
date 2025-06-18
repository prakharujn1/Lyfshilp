import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const markChallengeComplete = async (req, res) => {
  const { moduleIndex, challengeIndex } = req.body;
  const userId = req.user.id;

  try {
    const progress = await prisma.DMChallenge.upsert({
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
    res
      .status(500)
      .json({ success: false, error: "Failed to update progress" });
  }
};

export const getUserProgress = async (req, res) => {
  const userId = req.user.id;

  try {
    const progress = await prisma.DMChallenge.findMany({
      where: { userId, completed: true },
    });

    res.json({ success: true, progress });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to fetch progress" });
  }
};
