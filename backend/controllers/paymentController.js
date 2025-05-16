const db = require('../db');

exports.payOrder = async (req, res) => {
  const { orderId, method } = req.body;

  try {
    await db.query(
      `INSERT INTO payments (order_id, method, paid, paid_at)
       VALUES ($1, $2, true, NOW())`,
      [orderId, method]
    );

    await db.query(
      `UPDATE orders SET status = 'PAID' WHERE id = $1`,
      [orderId]
    );

    res.status(200).json({ message: 'Pembayaran berhasil' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
