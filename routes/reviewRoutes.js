const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// POST /api/reviews -> Tambah review
router.post('/', reviewController.createReview);

// GET /api/products/:id/reviews -> Ambil review berdasarkan ID produk
router.get('/products/:id', reviewController.getReviewsByProduct);

module.exports = router;
