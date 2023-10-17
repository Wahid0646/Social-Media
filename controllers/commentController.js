const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const { text, postId } = req.body;
    const newComment = await Comment.create({ text, postId });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getComments = async (req, res) => {
  try {
    const { postId } = req.params; // Assuming postId is part of the URL parameters
    const comments = await Comment.findAll({ where: { postId } });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};