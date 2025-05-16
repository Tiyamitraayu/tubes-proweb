const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Import routes
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/adminRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes'); 
const paymentRoutes = require('./routes/paymentRoutes'); 
const shippingRoutes = require('./routes/shippingRoutes'); 
const reportRoutes = require('./routes/reportRoutes');
const superAdminRoutes = require('./routes/superAdminRoutes'); 
const categoryRoutes = require('./routes/categoryRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Route definitions
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes); 
app.use('/api/orders', orderRoutes); 
app.use('/api/cart', cartRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/shipping', shippingRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/super-admins', superAdminRoutes);
app.use('/api/categories', categoryRoutes);

// Default routes
app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

app.post('/data', (req, res) => {
  const { nama } = req.body;
  res.send(`Data diterima: ${nama}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
