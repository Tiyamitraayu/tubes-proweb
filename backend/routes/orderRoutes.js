const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/checkout', orderController.createOrder);
router.get('/:userId', orderController.getOrders);
router.get('/detail/:orderId', orderController.getOrderItems);

module.exports = router;
