// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// GET semua pesanan
router.get('/', orderController.getAllOrders);

module.exports = router;
