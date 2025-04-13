## **3. Laporan Progres Mingguan**
**Kelompok**: 10  
**Mitra**: Jaya Mandiri Motor  
**Pekan ke-**: 9
**3. Laporan Progres Mingguan**
**Kelompok**: 10  
**Mitra**: Jaya Mandiri Motor  
**Pekan ke-**: 9  
**Tanggal**: 13 April 2025  

### **Progress Summary**
Pada pekan ke-9, tim menyelesaikan requirement gathering dengan mitra dan memulai perencanaan proyek. Dokumen kebutuhan (SKPL) telah diverifikasi, wireframe UI dirancang, dan struktur repositori GitHub disiapkan.

### **Accomplished Tasks**
**Dokumen Requirement (SKPL)**:
- Finalisasi spesifikasi kebutuhan fungsional/non-fungsional  
- Penyusunan use case diagram dan class diagram  

**Wireframe/Mockup**:
- Desain awal UI untuk halaman utama, katalog, dan dashboard admin  
- Validasi wireframe dengan mitra  

**GitHub Repository**:
- Inisialisasi repositori proyek  
- Pembuatan README.md berisi timeline dan tech stack  

### **Challenges & Solutions**
**Tantangan**: Ada perbedaan pendapat tentang fitur yang paling penting  
**Solusi**: Diskusi dengan mitra untuk menyepakati fitur yang perlu dibuat lebih dulu  

**Tantangan**: Bingung menentukan tampilan desain awal  
**Solusi**: Melihat referensi dari aplikasi serupa untuk dijadikan inspirasi  

### **Next Week Plan**
**Pekan 10**: Implementasi Autentikasi & Halaman Customer  
- Setup database MySQL  
- Develop halaman login/register  
- Mulai pembuatan halaman katalog produk  

### **Contributions**
**Riska Fadlun Khairiyah P**: Dokumen requirement, Desain wireframe UI
**Dzaky Rasyid**: Desain wireframe UI, timeline
**Muhammad Khoiruddin Marzuq**: Desain Mockup  
**Tiya Mitra Ayu**: Setup Github Repository

### **Screenshots/Demo**
[Wireframe](https://www.figma.com/design/SOtHF3jpfN6wD9JXCqgSfe/Proweb?node-id=0-1&p=f&t=ZU7zVhXxUINAFKJh-0)  
[GitHub Repo](https://github.com/aidilsaputrakirsan/sparetrack)  
[Tampilan Mockup] (![alt text]()

---

## **4. Fitur MVP**
- Autentikasi: Login untuk admin/customer  
- Katalog Produk: CRUD produk + filter kategori  
- Transaksi: Keranjang belanja & checkout  
- Manajemen Stok: Update otomatis  
- Laporan: Penjualan harian/bulanan  

## **5. User Roles**
| Role         | Akses                         |
|--------------|-------------------------------|
| Super Admin  | Kelola semua fitur            |
| Admin        | Kelola produk & transaksi     |
| Customer     | Belanja & lihat riwayat       |

## **6. Tech Stack**
**Frontend**: HTML, CSS, JavaScript  
**Backend**: PHP, MySQL  
**Tools**: Figma (UI), GitHub 

## **7. Timeline**
| No. | Kegiatan                     | Minggu ke-9 | Minggu ke-10 | Minggu ke-11 | Minggu ke-12 | Minggu ke-13 | Minggu ke-14 | Minggu ke-15 | Deliverables               |
|-----|------------------------------|-------------|--------------|--------------|--------------|--------------|--------------|--------------|----------------------------|
| 1   | Requirement Gathering        | ✅          |              |              |              |              |              |              | Dokumen SKPL Final         |
| 2   | Desain UI/UX                 | ✅          |              |              |              |              |              |              | Wireframe Figma            |
| 3   | Setup Environment            | ✅          |              |              |              |              |              |              | GitHub Repo                |
| 4   | Implementasi Autentikasi     |             | ✅           |              |              |              |              |              | Sistem Login/Register      |
| 5   | Pengembangan Katalog Produk  |             |              | ✅           | ✅           |              |              |              | Halaman Produk + Filter    |
| 6   | Fitur Transaksi              |             |              |              | ✅           |              |              |              | Keranjang + Checkout       |
| 7   | Manajemen Produk (Admin)     |             |              |              |              | ✅           |              |              | CRUD Produk                |
| 8   | Manajemen Stok               |             |              |              |              | ✅           |              |              | Update Stok Otomatis       |
| 9   | Sistem Laporan               |             |              |              |              |              | ✅           |              | Laporan Penjualan          |
| 10  | Testing & Debugging          |             |              |              |              |              | ✅           | ✅           | Test Case                  |
| 11  | Deployment                   |             |              |              |              |              |              | ✅           | Live System                |


# **Proyek SPARETRACK - Sistem Manajemen Sparepart Jaya Mandiri Motor**

## **1. Latar Belakang**
Jaya Mandiri Motor adalah penyedia sparepart mobil dan truk dengan reputasi baik di industri otomotif, menawarkan suku cadang asli dan aftermarket berkualitas. Meskipun demikian, perusahaan menghadapi masalah dalam pengelolaan stok manual, pemesanan konvensional yang tidak efisien, dan pelacakan ketersediaan sparepart. Untuk mengatasi hal ini dan memperluas pasar, Jaya Mandiri Motor mengembangkan website SPARETRACK, sistem berbasis web yang mempermudah jual beli sparepart secara daring. SPARETRACK menyediakan katalog produk online, fitur pencarian, pemesanan, pelacakan pesanan, manajemen stok, serta integrasi pembayaran, yang meningkatkan efisiensi dan transparansi proses pembelian sparepart.

## **2. Tujuan**
Membangun sistem berbasis web untuk:
- Digitalisasi katalog sparepart  
- Otomatisasi manajemen stok  
- Penyediaan laporan real-time  

## **3. Fitur MVP**
**Autentikasi**
- Login multi-role (Super Admin/Admin/Customer)  
- Register dengan verifikasi email  

**Manajemen Produk**
- CRUD sparepart  
- Filter by tipe kendaraan (mobil/truk)  

**Transaksi**
- Keranjang belanja  
- Checkout dengan multi-metode pembayaran  

**Manajemen Admin**
- Update stok otomatis  
- Laporan penjualan harian/mingguan  

## **4. User Roles**
| Role         | Hak Akses                     |
|--------------|-------------------------------|
| Super Admin  | Kelola semua admin & sistem   |
| Admin        | Manajemen produk & transaksi  |
| Customer     | Pembelian & riwayat pesanan   |

## **5. Tech Stack**
**Frontend**: HTML/CSS/JS, Bootstrap  
**Backend**: PHP, MySQL  
**Keamanan**: Session-based authentication, enkripsi data  

## **6. Timeline**
## **Timeline Proyek SPARETRACK (Sesuai SKPL)**

| No. | Kegiatan                     | Minggu ke-9 | Minggu ke-10 | Minggu ke-11 | Minggu ke-12 | Minggu ke-13 | Minggu ke-14 | Minggu ke-15 | Deliverables               |
|-----|------------------------------|-------------|--------------|--------------|--------------|--------------|--------------|--------------|----------------------------|
| 1   | Requirement Gathering        | ✅          |              |              |              |              |              |              | Dokumen SKPL Final         |
| 2   | Desain UI/UX                 | ✅          |              |              |              |              |              |              | Wireframe Figma            |
| 3   | Setup Environment            | ✅          |              |              |              |              |              |              | GitHub Repo                |
| 4   | Implementasi Autentikasi     |             | ✅           |              |              |              |              |              | Sistem Login/Register      |
| 5   | Pengembangan Katalog Produk  |             |              | ✅           | ✅           |              |              |              | Halaman Produk + Filter    |
| 6   | Fitur Transaksi              |             |              |              | ✅           |              |              |              | Keranjang + Checkout       |
| 7   | Manajemen Produk (Admin)     |             |              |              |              | ✅           |              |              | CRUD Produk                |
| 8   | Manajemen Stok               |             |              |              |              | ✅           |              |              | Update Stok Otomatis       |
| 9   | Sistem Laporan               |             |              |              |              |              | ✅           |              | Laporan Penjualan          |
| 10  | Testing & Debugging          |             |              |              |              |              | ✅           | ✅           | Test Case                  |
| 11  | Deployment                   |             |              |              |              |              |              | ✅           | Live System                |

**Tanggal**: 13 April 2025  

### **Progress Summary**
Pada pekan ke-9, tim menyelesaikan requirement gathering dengan mitra dan memulai perencanaan proyek. Dokumen kebutuhan (SKPL) telah diverifikasi, wireframe UI dirancang, dan struktur repositori GitHub disiapkan.

### **Accomplished Tasks**
**Dokumen Requirement (SKPL)**:
- Finalisasi spesifikasi kebutuhan fungsional/non-fungsional  
- Penyusunan use case diagram dan class diagram  

**Wireframe/Mockup**:
- Desain awal UI untuk halaman utama, katalog, dan dashboard admin  
- Validasi wireframe dengan mitra  

**GitHub Repository**:
- Inisialisasi repositori proyek  
- Pembuatan README.md berisi timeline dan tech stack  

### **Challenges & Solutions**
**Tantangan**: Ada perbedaan pendapat tentang fitur yang paling penting  
**Solusi**: Diskusi dengan mitra untuk menyepakati fitur yang perlu dibuat lebih dulu  

**Tantangan**: Bingung menentukan tampilan desain awal  
**Solusi**: Melihat referensi dari aplikasi serupa untuk dijadikan inspirasi  

### **Next Week Plan**
**Pekan 10**: Implementasi Autentikasi & Halaman Customer  
- Setup database MySQL  
- Develop halaman login/register  
- Mulai pembuatan halaman katalog produk  

### **Contributions**
**Riska Fadlun Khairiyah P**: Dokumen requirement, Desain wireframe UI 
**Dzaky Rasyid**: Desain wireframe UI, timeline
**Muhammad Khoiruddin  **: Setup GitHub repository  
**Tiya Mitra Ayu**: Setup Github Repository

### **Screenshots/Demo**
[Wireframe](https://www.figma.com/design/SOtHF3jpfN6wD9JXCqgSfe/Proweb?node-id=0-1&p=f&t=ZU7zVhXxUINAFKJh-0)  
[GitHub Repo](https://github.com/aidilsaputrakirsan/sparetrack)  
[Tampilan Mockup] (![alt text]()

---

## **4. Fitur MVP**
- Autentikasi: Login untuk admin/customer  
- Katalog Produk: CRUD produk + filter kategori  
- Transaksi: Keranjang belanja & checkout  
- Manajemen Stok: Update otomatis  
- Laporan: Penjualan harian/bulanan  

## **5. User Roles**
| Role         | Akses                         |
|--------------|-------------------------------|
| Super Admin  | Kelola semua fitur            |
| Admin        | Kelola produk & transaksi     |
| Customer     | Belanja & lihat riwayat       |

## **6. Tech Stack**
**Frontend**: HTML, CSS, JavaScript  
**Backend**: PHP, MySQL  
**Tools**: Figma (UI), GitHub 

## **7. Timeline**
| No. | Kegiatan                     | Minggu ke-9 | Minggu ke-10 | Minggu ke-11 | Minggu ke-12 | Minggu ke-13 | Minggu ke-14 | Minggu ke-15 | Deliverables               |
|-----|------------------------------|-------------|--------------|--------------|--------------|--------------|--------------|--------------|----------------------------|
| 1   | Requirement Gathering        | ✅          |              |              |              |              |              |              | Dokumen SKPL Final         |
| 2   | Desain UI/UX                 | ✅          |              |              |              |              |              |              | Wireframe Figma            |
| 3   | Setup Environment            | ✅          |              |              |              |              |              |              | GitHub Repo                |
| 4   | Implementasi Autentikasi     |             | ✅           |              |              |              |              |              | Sistem Login/Register      |
| 5   | Pengembangan Katalog Produk  |             |              | ✅           | ✅           |              |              |              | Halaman Produk + Filter    |
| 6   | Fitur Transaksi              |             |              |              | ✅           |              |              |              | Keranjang + Checkout       |
| 7   | Manajemen Produk (Admin)     |             |              |              |              | ✅           |              |              | CRUD Produk                |
| 8   | Manajemen Stok               |             |              |              |              | ✅           |              |              | Update Stok Otomatis       |
| 9   | Sistem Laporan               |             |              |              |              |              | ✅           |              | Laporan Penjualan          |
| 10  | Testing & Debugging          |             |              |              |              |              | ✅           | ✅           | Test Case                  |
| 11  | Deployment                   |             |              |              |              |              |              | ✅           | Live System                |


# **Proyek SPARETRACK - Sistem Manajemen Sparepart Jaya Mandiri Motor**

## **1. Latar Belakang**
Jaya Mandiri Motor adalah penyedia sparepart mobil dan truk dengan reputasi baik di industri otomotif, menawarkan suku cadang asli dan aftermarket berkualitas. Meskipun demikian, perusahaan menghadapi masalah dalam pengelolaan stok manual, pemesanan konvensional yang tidak efisien, dan pelacakan ketersediaan sparepart. Untuk mengatasi hal ini dan memperluas pasar, Jaya Mandiri Motor mengembangkan website SPARETRACK, sistem berbasis web yang mempermudah jual beli sparepart secara daring. SPARETRACK menyediakan katalog produk online, fitur pencarian, pemesanan, pelacakan pesanan, manajemen stok, serta integrasi pembayaran, yang meningkatkan efisiensi dan transparansi proses pembelian sparepart.

## **2. Tujuan**
Membangun sistem berbasis web untuk:
- Digitalisasi katalog sparepart  
- Otomatisasi manajemen stok  
- Penyediaan laporan real-time  

## **3. Fitur MVP**
**Autentikasi**
- Login multi-role (Super Admin/Admin/Customer)  
- Register dengan verifikasi email  

**Manajemen Produk**
- CRUD sparepart  
- Filter by tipe kendaraan (mobil/truk)  

**Transaksi**
- Keranjang belanja  
- Checkout dengan multi-metode pembayaran  

**Manajemen Admin**
- Update stok otomatis  
- Laporan penjualan harian/mingguan  

## **4. User Roles**
| Role         | Hak Akses                     |
|--------------|-------------------------------|
| Super Admin  | Kelola semua admin & sistem   |
| Admin        | Manajemen produk & transaksi  |
| Customer     | Pembelian & riwayat pesanan   |

## **5. Tech Stack**
**Frontend**: HTML/CSS/JS, Bootstrap  
**Backend**: PHP, MySQL  
**Keamanan**: Session-based authentication, enkripsi data  

## **6. Timeline**
## **Timeline Proyek SPARETRACK (Sesuai SKPL)**

| No. | Kegiatan                     | Minggu ke-9 | Minggu ke-10 | Minggu ke-11 | Minggu ke-12 | Minggu ke-13 | Minggu ke-14 | Minggu ke-15 | Deliverables               |
|-----|------------------------------|-------------|--------------|--------------|--------------|--------------|--------------|--------------|----------------------------|
| 1   | Requirement Gathering        | ✅          |              |              |              |              |              |              | Dokumen SKPL Final         |
| 2   | Desain UI/UX                 | ✅          |              |              |              |              |              |              | Wireframe Figma            |
| 3   | Setup Environment            | ✅          |              |              |              |              |              |              | GitHub Repo                |
| 4   | Implementasi Autentikasi     |             | ✅           |              |              |              |              |              | Sistem Login/Register      |
| 5   | Pengembangan Katalog Produk  |             |              | ✅           | ✅           |              |              |              | Halaman Produk + Filter    |
| 6   | Fitur Transaksi              |             |              |              | ✅           |              |              |              | Keranjang + Checkout       |
| 7   | Manajemen Produk (Admin)     |             |              |              |              | ✅           |              |              | CRUD Produk                |
| 8   | Manajemen Stok               |             |              |              |              | ✅           |              |              | Update Stok Otomatis       |
| 9   | Sistem Laporan               |             |              |              |              |              | ✅           |              | Laporan Penjualan          |
| 10  | Testing & Debugging          |             |              |              |              |              | ✅           | ✅           | Test Case                  |
| 11  | Deployment                   |             |              |              |              |              |              | ✅           | Live System                |
