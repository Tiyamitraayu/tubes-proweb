const db = require('../db');

exports.getCategories = async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM categories`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    await db.query(`INSERT INTO categories (name) VALUES ($1)`, [name]);
    res.status(201).json({ message: 'Kategori berhasil ditambahkan' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await db.query(`UPDATE categories SET name = $1 WHERE id = $2`, [name, id]);
    res.status(200).json({ message: 'Kategori berhasil diupdate' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query(`DELETE FROM categories WHERE id = $1`, [id]);
    res.status(200).json({ message: 'Kategori berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
