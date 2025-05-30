const express = require("express");
const router = express.Router();
const { 
  getAllResumes, 
  getResumeById, 
  createResume, 
  updateResume 
} = require("../controllers/resumeController");

router.get("/", getAllResumes);
router.get("/:id", getResumeById);
router.post("/", createResume);
router.put("/:id", updateResume); 

module.exports = router;
