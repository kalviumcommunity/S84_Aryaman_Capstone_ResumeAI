const Ai = require("../models/AiSchema");
const getAllAi = async (req, res) => {
  try {
    const aiData = await Ai.find();
    res.json(aiData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAiById = async (req, res) => {
  try {
    const ai = await Ai.findById(req.params.id);
    if (!ai) return res.status(404).json({ message: "AI entry not found" });
    res.json(ai);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST a new AI entry
const createAiEntry = async (req, res) => {
  try {
    const newAi = new Ai(req.body);
    const savedAi = await newAi.save();
    res.status(201).json(savedAi);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllAi, getAiById, createAiEntry };