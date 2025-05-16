const db = require('../db');

exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    let cart = await db.query('SELECT id FROM carts WHERE user_id = $1', [userId]);
    let cartId;

    if (cart.rows.length === 0) {
      const newCart = await db.query('INSERT INTO carts (user_id) VALUES ($1) RETURNING id', [userId]);
      cartId = newCart.rows[0].id;
    } else {
      cartId = cart.rows[0].id;
    }

    await db.query(
      `INSERT INTO cart_items (cart_id, product_id, quantity) 
       VALUES ($1, $2, $3) 
       ON CONFLICT (cart_id, product_id) DO UPDATE 
       SET quantity = cart_items.quantity + EXCLUDED.quantity`,
      [cartId, productId, quantity]
    );

    res.status(200).json({ message: 'Produk ditambahkan ke keranjang' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCart = async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await db.query(`
      SELECT c.id as cart_id, p.id as product_id, p.name, p.price, ci.quantity
      FROM carts c
      JOIN cart_items ci ON ci.cart_id = c.id
      JOIN products p ON p.id = ci.product_id
      WHERE c.user_id = $1
    `, [userId]);

    res.status(200).json(cart.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const cart = await db.query('SELECT id FROM carts WHERE user_id = $1', [userId]);
    if (cart.rows.length === 0) return res.status(404).json({ message: 'Cart tidak ditemukan' });

    const cartId = cart.rows[0].id;
    await db.query('DELETE FROM cart_items WHERE cart_id = $1 AND product_id = $2', [cartId, productId]);

    res.status(200).json({ message: 'Produk dihapus dari keranjang' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
