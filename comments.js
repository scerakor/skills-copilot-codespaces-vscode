// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Import database models
const Comment = require('../models/Comment');

// @route   GET api/comments
// @desc    Get all comments
// @access  Public
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/comments
// @desc    Create a comment
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('body', 'Body is required').not().isEmpty(),
  ],
  async (req, res) => {
    // Check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return error messages
      return res.status(400).json({ errors: errors.array() });
    }

    // Create comment
    const { name, email, body } = req.body;
    try {
      const newComment = new Comment({
        name,
        email,
        body,
      });

      // Save comment to database
      const comment = await newComment.save();
      res.json(comment);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;

