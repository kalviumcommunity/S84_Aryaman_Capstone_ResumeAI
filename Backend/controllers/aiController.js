const AI = require('../models/AiSchema');

exports.getAllAnalyses = async (req, res) => {
  const aiData = await AI.find();
  res.json(aiData);
};

exports.getAnalysisById = async (req, res) => {
  const analysis = await AI.findById(req.params.id);
  if (!analysis) return res.status(404).json({ error: 'Analysis not found' });
  res.json(analysis);
};

exports.getAnalysisByResume = async (req, res) => {
  const analysis = await AI.find({ resumeId: req.params.resumeId });
  res.json(analysis);
};
