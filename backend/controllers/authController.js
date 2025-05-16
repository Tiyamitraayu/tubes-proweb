const db = require('../db');
const jwt = require('jsonwebtoken');

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'Email tidak ditemukan' });
    }

    const found = user.rows[0];

    // Catatan: Ini tanpa hashing. Tambahkan bcrypt.compare jika sudah pakai hash
    if (found.password !== password) {
      return res.status(401).json({ message: 'Password salah' });
    }

    const token = jwt.sign(
      { id: found.id, role: found.role },
      process.env.JWT_SECRET || 'SPARETRACK_SECRET',
      { expiresIn: '1d' }
    );

    res.json({ token, role: found.role, user: { id: found.id, email: found.email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
