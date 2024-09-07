const express = require('express');
const { createNews, getAllNews, getNewsById, updateNews, deleteNews } = require('../controllers/news.controller');
const auth = require('../middleware/authentification');
const upload = require('../middleware/upload'); // Assume you have a middleware to handle file uploads

const router = express.Router();

// Public Routes
router.get('/', getAllNews);
router.get('/:id', getNewsById);

// Protected Routes (Admin only)
router.post('/', auth, upload.single('image'), createNews);
router.put('/:id', auth, upload.single('image'), updateNews);
router.delete('/:id', auth, deleteNews);

module.exports = router;
