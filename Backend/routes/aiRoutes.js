const express = require('express');
const router = express.Router();
const {
  getAllAnalyses,
  getAnalysisById,
  getAnalysisByResume
} = require('../controllers/aiController');

router.get('/', getAllAnalyses);

router.get('/:id', getAnalysisById);

router.get('/resume/:resumeId', getAnalysisByResume);

module.exports = router;
