const router = require('express').Router();
const s = require('../controllers/shippingController');
router.post('/update', s.updateShipping);

module.exports = router;