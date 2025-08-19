const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { 
  getAllResumes, 
  getResumeById, 
  createResume, 
  updateResume,
  deleteResume
} = require("../controllers/resumeController");

router.get("/", auth, getAllResumes);
router.get("/:id", auth, getResumeById);
router.post("/", auth, createResume);
router.put("/:id", auth, updateResume);
router.delete("/:id", auth, deleteResume);

module.exports = router;
