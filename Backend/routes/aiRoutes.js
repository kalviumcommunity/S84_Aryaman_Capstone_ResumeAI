const express = require('express');
const router = express.Router();
const {
  getAllAnalyses,
  getAnalysisById,
  getAnalysisByResume
} = require('../controllers/aiController');

router.get('/', getAllAnalyses);

router.get('/resume/:resumeId', getAnalysisByResume);

router.get('/:id', getAnalysisById);

module.exports = router;
