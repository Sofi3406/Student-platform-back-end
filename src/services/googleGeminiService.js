const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

exports.generateLessonPlan = async ({ topic, gradeLevel, objectives }) => {
  const model = genAI.getGenerativeModel({ model: "lesson planner AI " }); 

  const prompt = `Create a lesson plan for ${gradeLevel} students about "${topic}" covering objectives: ${objectives.join(", ")}. Return it in structured text format.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};
