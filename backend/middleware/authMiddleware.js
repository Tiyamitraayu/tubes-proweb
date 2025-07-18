const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: 'Token tidak ada' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Simpan role dan id user
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token tidak valid' });
  }
};

module.exports = authMiddleware;
