const express = require("express");
const router = express.Router();
const { getAllAi, getAiById, createAiEntry } = require("../controllers/aiController");

router.get("/",getAllAi);
router.get("/:id", getAiById);
router.post("/", createAiEntry);

module.exports = router;
