const router = require('express').Router();
const p = require('../controllers/paymentController');
router.post('/pay', p.payOrder);

module.exports = router;