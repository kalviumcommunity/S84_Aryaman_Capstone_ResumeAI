const express = require("express");
const router = express.Router();
const { getAllAi, getAiById, createAiEntry, updateAiEntry } = require("../controllers/aiController");

router.get("/", getAllAi);
router.get("/:id", getAiById);
router.post("/", createAiEntry);
router.put("/:id", updateAiEntry);

module.exports = router;
