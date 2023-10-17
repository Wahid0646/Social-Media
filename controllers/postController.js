const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { description, imageUrl } = req.body;
    const newPost = await Post.create({ description, imageUrl });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getPosts = async (req, res) => {
  try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const deletedRows = await Post.destroy({ where: { id: postId } });

    if (deletedRows > 0) {
      res.status(204).end(); // Successfully deleted
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};