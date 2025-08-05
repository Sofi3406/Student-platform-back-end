// src/controllers/courseController.js
const Course = require('../models/Course');
const { sendResponse } = require('../utils/responseHandler');

exports.createCourse = async (req, res) => {
  try {
    const { title, description } = req.body;
    const course = await Course.create({ title, description, teacherId: req.user.id });
    sendResponse(res, 201, true, 'Course created', course);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    sendResponse(res, 200, true, 'Courses retrieved', courses);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};