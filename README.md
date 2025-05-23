**Tim Pengembang - Kelompok 10:**
- Riska Fadlun Khairiyah Purba_10231083
- Dzaky Rasyid Zuhair_10231035
- Muhammad Khoiruddin Marzuq_10231069
- Tiya Mitra Ayu Purwanti_10231088

**Mitra**: Jaya Mandiri Motor

# 🛠️ SPARETRACK - Sistem Informasi Penjualan Sparepart

SPARETRACK adalah sistem informasi berbasis web untuk mendukung proses jual beli sparepart mobil dan truk secara online. Proyek ini dikembangkan untuk Jaya Mandiri Motor oleh Kelompok 10.

---

## 📘 Deskripsi Proyek

Aplikasi ini membantu pelanggan mencari dan memesan sparepart, sekaligus memudahkan admin dalam mengelola produk, pesanan, dan laporan. Sistem ini dirancang berbasis web dengan pemisahan antara frontend (React) dan backend (PHP/Node.js + PostgreSQL).

---

## ✨ Fitur Utama

- **Autentikasi**: Login, register, logout
- **Manajemen Produk**: CRUD produk oleh admin
- **Keranjang (Cart)**: Simpan dan atur barang yang akan dibeli
- **Transaksi**: Checkout, pembayaran, pelacakan pesanan
- **Laporan Penjualan**: Data transaksi dan ringkasan
- **Manajemen Admin**: Superadmin kelola akun admin
- **Ulasan Produk**: Review dan rating oleh pelanggan
- **Kategori Produk**: Pengelompokan jenis sparepart
- **Shipping**: Update status pengiriman

---

## 🛠️ Teknologi yang Digunakan

- **Frontend**: React + Vite
- **Backend**: PHP dan Node.js (Express)
- **Database**: PostgreSQL
- **Tools Tambahan**:
  - Postman (testing API)
  - Draw.io (ERD)
  - GitHub (versi kontrol)

---

## 📋 Prasyarat Instalasi

- Node.js dan npm
- PHP 7.4+
- PostgreSQL
- Composer (jika memakai PHP OOP)
- Browser modern

---

## 🗂️ Struktur Proyek

```text
/sparetrack/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── db.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
├── database/
│   └── erd.png
├── README.md
└── package.json
```

---

## 📡 Dokumentasi API

### POST /api/login
Login pengguna

**Request:**
```json
{
  "email": "admin@test.com",
  "password": "admin123"
}
```

**Response:**
```json
{
  "status": "success",
  "token": "..."
}
```

---

### GET /api/products
Ambil semua produk

**Response:**
```json
[
  { "id": 1, "name": "Filter Oli", "price": 40000 },
  ...
]
```

---

## 🗃️ Diagram Database

Entitas utama:
- users
- products
- categories
- cart
- cart_items
- orders
- order_items
- payment
- reviews
- shipping

Relasi:
- User ↔ Orders (1:N)
- Product ↔ Reviews (1:N)
- Product ↔ OrderItems (1:N)
- Cart ↔ CartItems (1:N)

---

## 🔄 Pengembangan

- Versi awal menggunakan PHP OOP
- Frontend dibuat dengan React (Vite)
- Integrasi API dilakukan via fetch/Axios
- Revisi dilakukan berdasarkan feedback mitra tiap minggu

---

## 🛠️ Troubleshooting

| Masalah                      | Solusi                                      |
|------------------------------|----------------------------------------------|
| Gagal konek DB               | Periksa `db.js` dan env PostgreSQL           |
| CORS error di React          | Tambahkan header CORS di Express             |
| Bug saat register/login      | Tambahkan validasi dan feedback di frontend  |
| Gagal push Git               | Gunakan `git pull`, resolve konflik, lalu push ulang |

---

## 📄 Lisensi

Proyek ini dikembangkan untuk keperluan akademik. Tidak diperkenankan digunakan untuk tujuan komersial tanpa izin.

---

