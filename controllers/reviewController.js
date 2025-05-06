const pool = require('../db');

// Buat review
exports.createReview = async (req, res) => {
  try {
    const { user_id, product_id, rating, comment } = req.body;

    const result = await pool.query(
      'INSERT INTO reviews (user_id, product_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *',
      [user_id, product_id, rating, comment]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating review:', err);
    res.status(500).json({ error: 'Gagal membuat review' });
  }
};

// Ambil semua review berdasarkan product_id
exports.getReviewsByProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'SELECT * FROM reviews WHERE product_id = $1',
      [id]
    );

    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).json({ error: 'Gagal mengambil review' });
  }
};
