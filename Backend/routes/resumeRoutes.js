const express = require("express");
const router = express.Router();
const { getAllResumes, getResumeById, createResume } = require("../controllers/resumeController");
router.get("/", getAllResumes);
router.get("/:id",getResumeById);
router.post("/", createResume);

module.exports = router;
