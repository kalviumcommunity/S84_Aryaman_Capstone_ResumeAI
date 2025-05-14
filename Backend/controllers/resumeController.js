const Resume = require('../models/ResumeSchema');

exports.getAllResumes = async (req, res) => {
  const resumes = await Resume.find();
  res.json(resumes);
};

exports.getResumeById = async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  if (!resume) return res.status(404).json({ error: 'Resume not found' });
  res.json(resume);
};

exports.getResumesByUser = async (req, res) => {
  const resumes = await Resume.find({ userId: req.params.userId });
  res.json(resumes);
};
