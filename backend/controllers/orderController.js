const db = require('../db');

exports.createOrder = async (req, res) => {
  const { userId } = req.body;

  try {
    const cartResult = await db.query('SELECT id FROM carts WHERE user_id = $1', [userId]);
    if (cartResult.rows.length === 0) return res.status(400).json({ message: 'Keranjang tidak ditemukan' });
    const cartId = cartResult.rows[0].id;

    const cartItems = await db.query(`
      SELECT p.id as product_id, p.price, ci.quantity
      FROM cart_items ci
      JOIN products p ON p.id = ci.product_id
      WHERE ci.cart_id = $1
    `, [cartId]);

    if (cartItems.rows.length === 0) return res.status(400).json({ message: 'Keranjang kosong' });

    let total = 0;
    for (const item of cartItems.rows) {
      total += item.price * item.quantity;
    }

    const order = await db.query(
      `INSERT INTO orders (user_id, total, status) VALUES ($1, $2, 'PENDING') RETURNING id`,
      [userId, total]
    );
    const orderId = order.rows[0].id;

    for (const item of cartItems.rows) {
      await db.query(
        `INSERT INTO order_items (order_id, product_id, price, quantity)
         VALUES ($1, $2, $3, $4)`,
        [orderId, item.product_id, item.price, item.quantity]
      );
      await db.query(
        `UPDATE products SET stock = stock - $1 WHERE id = $2`,
        [item.quantity, item.product_id]
      );
    }

    await db.query('DELETE FROM cart_items WHERE cart_id = $1', [cartId]);

    res.status(201).json({ message: 'Pesanan berhasil dibuat', orderId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  const userId = req.params.userId;

  try {
    const orders = await db.query(
      `SELECT id, total, status, created_at FROM orders WHERE user_id = $1 ORDER BY created_at DESC`,
      [userId]
    );
    res.status(200).json(orders.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Melihat detail item dalam pesanan tertentu
exports.getOrderItems = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const items = await db.query(`
      SELECT oi.product_id, p.name, oi.price, oi.quantity
      FROM order_items oi
      JOIN products p ON p.id = oi.product_id
      WHERE oi.order_id = $1
    `, [orderId]);

    res.status(200).json(items.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};