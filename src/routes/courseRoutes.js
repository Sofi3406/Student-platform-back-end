// src/routes/courseRoutes.js
const router = require('express').Router();
const { createCourse, getCourses } = require('../controllers/courseController');
const verifyToken = require('../middleware/authMiddleware');
const permit = require('../middleware/roleMiddleware');

router.post('/', verifyToken, permit('teacher'), createCourse);
router.get('/', verifyToken, permit('teacher', 'student'), getCourses);

module.exports = router;
