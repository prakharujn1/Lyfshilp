import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const updateLeadershipPerformance = async (req, res) => {
  const {
    userId,
    score,
    accuracy,
    studyTimeMinutes,
    consistencyDaysPerWeek,
    avgResponseTimeSec,
  } = req.body;

  try {
    const result = await prisma.leadershipPerformance.upsert({
      where: { userId },
      update: {
        score,
        accuracy,
        studyTimeMinutes,
        consistencyDaysPerWeek,
        avgResponseTimeSec,
      },
      create: {
        userId,
        score,
        accuracy,
        studyTimeMinutes,
        consistencyDaysPerWeek,
        avgResponseTimeSec,
      },
    });

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Leadership performance update failed' });
  }
};
