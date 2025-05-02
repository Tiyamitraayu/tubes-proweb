/ controllers/productController.js
const pool = require('../db'); // koneksi db

exports.getAllProducts = async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.json(result.rows);
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
  res.json(result.rows[0]);
};

exports.createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const result = await pool.query(
    'INSERT INTO products (name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, description, price, stock]
  );
  res.status(201).json(result.rows[0]);
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  const result = await pool.query(
    'UPDATE products SET name=$1, description=$2, price=$3, stock=$4 WHERE id=$5 RETURNING *',
    [name, description, price, stock, id]
  );
  res.json(result.rows[0]);
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM products WHERE id = $1', [id]);
  res.json({ message: 'Product deleted' });
};
