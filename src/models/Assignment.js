const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  content: { type: String },
  dueDate: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);
