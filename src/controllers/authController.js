// ==================== CONTROLLERS ====================

// src/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendResponse } = require('../utils/responseHandler');

exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword, role });
    sendResponse(res, 201, true, 'User registered successfully');
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return sendResponse(res, 401, false, 'Invalid credentials');
    }
    const accessToken = jwt.sign({ id: user._id, role: user.role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET);
    user.refreshToken = refreshToken;
    await user.save();
    sendResponse(res, 200, true, 'Login successful', { accessToken, refreshToken });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    const accessToken = jwt.sign({ id: decoded.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    sendResponse(res, 200, true, 'Token refreshed', { accessToken });
  } catch (err) {
    sendResponse(res, 403, false, 'Invalid refresh token');
  }
};

exports.logout = async (req, res) => {
  try {
    const { token } = req.body;
    await User.findOneAndUpdate({ refreshToken: token }, { refreshToken: null });
    sendResponse(res, 200, true, 'Logged out successfully');
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};
