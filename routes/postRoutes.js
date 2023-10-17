const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/posts', postController.createPost);
router.get('/posts', postController.getPosts);
router.delete('/posts/:postId', postController.deletePost);

module.exports = router;
