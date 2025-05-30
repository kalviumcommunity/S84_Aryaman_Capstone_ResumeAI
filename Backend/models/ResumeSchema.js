const mongoose = require('mongoose')

const ResumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    personalInfo: {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String },
      linkedin: { type: String },
      github: { type: String }
    },
    education: {
  type: [
    {
      institution: { type: String, required: true },
      degree: { type: String, required: true },
      startYear: { type: String, required: true },
      endYear: { type: String, required: true }
    }
  ]
},
    experience: [
      {
        company: String,
        position: String,
        startDate: String,
        endDate: String,
        description: String
      }
    ],
    skills: [String],
    projects: [
      {
        title: String,
        description: String,
        techStack: [String],
        link: String
      }
    ],
    generatedByAI: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Resume', ResumeSchema);
  