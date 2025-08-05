// src/routes/assignmentRoutes.js
const router = require('express').Router();
const { createAssignment, getAssignmentsByCourse } = require('../controllers/assignmentController');
const verifyToken = require('../middleware/authMiddleware');
const permit = require('../middleware/roleMiddleware');

router.post('/', verifyToken, permit('teacher'), createAssignment);
router.get('/course/:courseId', verifyToken, permit('teacher', 'student'), getAssignmentsByCourse);

module.exports = router;