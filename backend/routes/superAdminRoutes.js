const express = require('express');
const router = express.Router();
const superAdminController = require('../controllers/superAdminController');
const auth = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

// Semua route hanya bisa diakses oleh Super Admin
router.use(auth, authorizeRole('SUPER_ADMIN'));

router.post('/create', superAdminController.createAdmin);
router.get('/', superAdminController.getAdmins);
router.put('/update/:id', superAdminController.updateAdmin);
router.delete('/delete/:id', superAdminController.deleteAdmin);

module.exports = router;
