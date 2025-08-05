// src/controllers/userController.js
const User = require('../models/User');
const { sendResponse } = require('../utils/responseHandler');

exports.getUsersByRole = async (req, res) => {
  try {
    const role = req.query.role;
    if (!role) return sendResponse(res, 400, false, 'Role query param is required');

    // ✅ Optional: restrict to known roles
    const allowedRoles = ['student', 'teacher', 'admin'];
    if (!allowedRoles.includes(role)) {
      return sendResponse(res, 400, false, 'Invalid role type');
    }

    const users = await User.find({ role }).select('-password -refreshToken');
    sendResponse(res, 200, true, `Users with role: ${role}`, users);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};
