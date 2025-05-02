const express = require('express');
const router = express.Router(); // Buat router Express
const productController = require('../controllers/productController'); // Panggil controller produk

// Daftar route
router.get('/', productController.getAllProducts); // GET semua produk
router.get('/:id', productController.getProductById); // GET produk berdasarkan ID
router.post('/', productController.createProduct); // POST tambah produk
router.put('/:id', productController.updateProduct); // PUT edit produk
router.delete('/:id', productController.deleteProduct); // DELETE hapus produk

module.exports = router; // Export router supaya bisa dipakai di file utama

