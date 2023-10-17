const express = require('express');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const router = express.Router();

router.use('/api', postRoutes);
router.use('/api', commentRoutes);

module.exports = router;
