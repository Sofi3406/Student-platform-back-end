// src/controllers/assignmentController.js
const Assignment = require('../models/Assignment');
const { sendResponse } = require('../utils/responseHandler');

exports.createAssignment = async (req, res) => {
  try {
    const { title, courseId, content, dueDate } = req.body;
    const assignment = await Assignment.create({ title, courseId, content, dueDate });
    sendResponse(res, 201, true, 'Assignment created', assignment);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.getAssignmentsByCourse = async (req, res) => {
  try {
    const assignments = await Assignment.find({ courseId: req.params.courseId });
    sendResponse(res, 200, true, 'Assignments retrieved', assignments);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};
