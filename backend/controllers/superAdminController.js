const db = require('../db');

// Tambah admin baru
exports.createAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, 'ADMIN') RETURNING *`,
      [name, email, password]
    );
    res.status(201).json({ message: 'Admin berhasil dibuat', data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Tampilkan semua admin
exports.getAdmins = async (req, res) => {
  try {
    const result = await db.query(`SELECT id, name, email FROM users WHERE role = 'ADMIN'`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Ubah admin
exports.updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    await db.query(
      `UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 AND role = 'ADMIN'`,
      [name, email, password, id]
    );
    res.status(200).json({ message: 'Admin berhasil diupdate' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Hapus admin
exports.deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query(`DELETE FROM users WHERE id = $1 AND role = 'ADMIN'`, [id]);
    res.status(200).json({ message: 'Admin berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
