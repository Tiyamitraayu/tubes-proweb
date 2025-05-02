// index.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);


app.get('/', (req, res) => {
res.send('Hello World from Express.js!');
});

app.post('/data', (req, res) => {
const { nama } = req.body;
res.send(`Data diterima: ${nama}`);
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
console.log(`Server berjalan di http://localhost:${PORT}`);
});