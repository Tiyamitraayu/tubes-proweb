const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

// Hanya bisa diakses oleh Super Admin
router.post('/create', auth, authorizeRole('SUPER_ADMIN'), adminController.createAdmin);
router.get('/', auth, authorizeRole('SUPER_ADMIN'), adminController.getAdmins);
router.put('/update/:id', auth, authorizeRole('SUPER_ADMIN'), adminController.updateAdmin);
router.delete('/delete/:id', auth, authorizeRole('SUPER_ADMIN'), adminController.deleteAdmin);

module.exports = router;
