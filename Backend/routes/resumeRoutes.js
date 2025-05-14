const express = require('express');
const router = express.Router();
const {
  getAllResumes,
  getResumeById,
  getResumesByUser
} = require('../controllers/resumeController');

router.get('/', getAllResumes);

router.get('/:id', getResumeById);

router.get('/user/:userId', getResumesByUser);

module.exports = router;
