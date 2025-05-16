const db = require('../db');

exports.updateShipping = async (req, res) => {
  const { orderId, courier, trackingNo, status } = req.body;

  try {
    const check = await db.query('SELECT * FROM shippings WHERE order_id = $1', [orderId]);
    if (check.rows.length > 0) {
      await db.query(
        `UPDATE shippings SET courier = $1, tracking_no = $2, status = $3 WHERE order_id = $4`,
        [courier, trackingNo, status, orderId]
      );
    } else {
      await db.query(
        `INSERT INTO shippings (order_id, courier, tracking_no, status)
         VALUES ($1, $2, $3, $4)`,
        [orderId, courier, trackingNo, status]
      );
    }

    await db.query(`UPDATE orders SET status = 'SHIPPED' WHERE id = $1`, [orderId]);

    res.status(200).json({ message: 'Status pengiriman diperbarui' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
