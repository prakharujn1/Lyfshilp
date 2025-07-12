import express from 'express';
const router = express.Router();

import { updateFinancePerformance } from '../controllers/Performance/financePerformanceController.js';
import { updateComputersPerformance } from '../controllers/Performance/computersPerformanceController.js';
import { updateDMPerformance } from '../controllers/Performance/dmPerformanceController.js';
import { updateSELPerformance } from '../controllers/Performance/selPerformanceController.js';
import { updateLeadershipPerformance } from '../controllers/Performance/leadershipPerformanceController.js';
import { updateEntrepreneurshipPerformance } from '../controllers/Performance/entrepreneurshipPerformanceController.js';
import { updateLawPerformance } from '../controllers/Performance/lawPerformanceController.js';
import { updateCommunicationPerformance } from '../controllers/Performance/communicationPerformanceController.js';
import { updateEnvironmentPerformance } from '../controllers/Performance/environmentPerformanceController.js';

router.post('/finance', updateFinancePerformance);
router.post('/computers', updateComputersPerformance);
router.post('/dm', updateDMPerformance);
router.post('/sel', updateSELPerformance);
router.post('/leadership', updateLeadershipPerformance);
router.post('/entrepreneurship', updateEntrepreneurshipPerformance);
router.post('/law', updateLawPerformance);
router.post('/communication', updateCommunicationPerformance);
router.post('/environment', updateEnvironmentPerformance);

export default router;
