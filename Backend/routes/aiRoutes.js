const express = require("express");
const router = express.Router();
const { getAllAi, getAiById } = require("../controllers/aiController");

router.get("/", getAllAi);
router.get("/:id", getAiById);

module.exports = router;
