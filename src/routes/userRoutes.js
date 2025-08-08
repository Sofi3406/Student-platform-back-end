// userRoutes
const router = require('express').Router();
const { getUsersByRole } = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');
const permit = require('../middleware/roleMiddleware');
router.get('/', verifyToken, permit('admin'), getUsersByRole);

module.exports = router;
