const Resume = require("../models/ResumeSchema");
const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST create a new resume
const createResume = async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const savedResume = await newResume.save();
    res.status(201).json(savedResume);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllResumes, getResumeById, createResume };