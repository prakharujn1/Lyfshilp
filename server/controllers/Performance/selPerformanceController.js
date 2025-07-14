import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const updateSELPerformance = async (req, res) => {
  const {
    userId,
    score,
    accuracy,
    avgResponseTimeSec,
    studyTimeMinutes,
    completed, // true if user completed the game
  } = req.body;

  if (!userId) return res.status(400).json({ error: 'userId is required' });

  try {
    const todayStr = new Date().toISOString().split('T')[0];

    const existing = await prisma.sELPerformance.findUnique({
      where: { userId },
    });

    const updateData = {
      totalGamesPlayed: (existing?.totalGamesPlayed || 0) + 1,
      lastGamePlayedAt: new Date(),
    };

    // Check if today is a new active day
    const lastActiveDateStr = existing?.lastActiveDate?.toISOString().split('T')[0];
    if (lastActiveDateStr !== todayStr) {
      updateData.daysActiveCount = (existing?.daysActiveCount || 0) + 1;
      updateData.lastActiveDate = new Date();
    }

    // Update only if scoring is available
    if (typeof score === 'number') {
      const prevCompleted = existing?.completedGamesCount || 0;
      const prevAvgScore = existing?.averageScorePerGame || 0;

      const newAvgScore =
        (prevAvgScore * prevCompleted + score) / (prevCompleted + 1);

      updateData.averageScorePerGame = newAvgScore;

      if (completed) {
        updateData.completedGamesCount = prevCompleted + 1;
      }
    }

    if (typeof accuracy === 'number') {
      const prevCompleted = existing?.completedGamesCount || 0;
      const prevAccuracy = existing?.accuracy || 0;

      const newAvgAccuracy =
        (prevAccuracy * prevCompleted + accuracy) / (prevCompleted + 1);

      updateData.accuracy = newAvgAccuracy;
    }

    // Optional fields
    if (typeof avgResponseTimeSec === 'number') {
      updateData.avgResponseTimeSec = avgResponseTimeSec;
    }

    if (typeof studyTimeMinutes === 'number') {
      updateData.studyTimeMinutes = (existing?.studyTimeMinutes || 0) + studyTimeMinutes;
    }

    // Final upsert
    const result = await prisma.sELPerformance.upsert({
      where: { userId },
      update: updateData,
      create: {
        userId,
        totalGamesPlayed: 1,
        completedGamesCount: completed ? 1 : 0,
        averageScorePerGame: typeof score === 'number' ? score : 0,
        accuracy: typeof accuracy === 'number' ? accuracy : 0,
        avgResponseTimeSec: avgResponseTimeSec || 0,
        studyTimeMinutes: studyTimeMinutes || 0,
        daysActiveCount: 1,
        lastActiveDate: new Date(),
        lastGamePlayedAt: new Date(),
      },
    });

    res.json(result);
  } catch (error) {
    console.error("Update failed:", error);
    res.status(500).json({ error: 'SEL performance update failed' });
  }
};
