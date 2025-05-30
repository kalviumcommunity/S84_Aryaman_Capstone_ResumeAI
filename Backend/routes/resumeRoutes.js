const express = require("express");
const router = express.Router();
const { getAllResumes, getResumeById } = require("../controllers/resumeController");
router.get("/", getAllResumes);
router.get("/:id", getResumeById);
module.exports = router;
