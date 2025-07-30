import express from 'express';
const router = express.Router();

import { updatePerformance } from '../controllers/Performance/performanceController.js';

router.post('/update', updatePerformance);


export default router;
