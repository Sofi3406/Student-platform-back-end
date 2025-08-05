// src/controllers/aiController.js
const { generateLessonPlan } = require('../services/googleGeminiService');
const { sendResponse } = require('../utils/responseHandler');

exports.generateLessonPlanHandler = async (req, res) => {
  try {
    const result = await generateLessonPlan(req.body);
    sendResponse(res, 200, true, 'Lesson plan generated successfully', { lessonPlan: result });
  } catch (err) {
    // Check for Gemini-specific 503 error
    if (err.message.includes('overloaded') || err.message.includes('503')) {
      return sendResponse(res, 503, false, 'The AI service is busy. Please try again later.');
    }

    // Default error handler
    sendResponse(res, 500, false, err.message);
  }
};
