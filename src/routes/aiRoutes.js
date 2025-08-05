// src/routes/aiRoutes.js
const router = require('express').Router();
const { generateLessonPlanHandler } = require('../controllers/aiController');
const verifyToken = require('../middleware/authMiddleware');
const permit = require('../middleware/roleMiddleware');

// POST /api/v1/ai/generate-lesson-plan
router.post('/generate-lesson-plan', verifyToken, permit('teacher'), generateLessonPlanHandler);

module.exports = router;
