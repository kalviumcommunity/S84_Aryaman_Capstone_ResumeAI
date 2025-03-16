const mongoose = require("mongoose");

const AISchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resumeId: { type: mongoose.Schema.Types.ObjectId, ref: "Resume", required: true },
  aiSuggestions: {
    summary: String, 
    skillEnhancements: [String],
    experienceImprovements: [String], 
  },
  resumeScore: { type: Number, min: 0, max: 100 }, 
  generatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AI", AISchema);
