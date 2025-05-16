const db = require('../db');

exports.getSalesReport = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT o.id AS order_id, u.name AS customer, o.total, o.status, o.created_at
      FROM orders o
      JOIN users u ON u.id = o.user_id
      ORDER BY o.created_at DESC
    `);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
