const router = require('express').Router();
const r = require('../controllers/reportController');
router.get('/sales', r.getSalesReport);

module.exports = router;