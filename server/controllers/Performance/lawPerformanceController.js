import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const updateLawPerformance = async (req, res) => {
  const {
    userId,
    score,
    accuracy,
    studyTimeMinutes,
    consistencyDaysPerWeek,
    avgResponseTimeSec,
  } = req.body;

  try {
    const result = await prisma.lawPerformance.upsert({
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
    res.status(500).json({ error: 'Law performance update failed' });
  }
};
