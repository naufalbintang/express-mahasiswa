# Express Mahasiswa API

REST API untuk mengelola data mahasiswa, prodi, dan jurusan. Dibangun dengan **Express.js** dan **Prisma ORM** dengan database **MySQL**.

## 📋 Daftar Isi

- [Fitur](#fitur)
- [Persyaratan Sistem](#persyaratan-sistem)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [API Endpoints](#api-endpoints)
- [Struktur Project](#struktur-project)
- [Database Schema](#database-schema)

## ✨ Fitur

- CRUD operations untuk Mahasiswa, Prodi, dan Jurusan
- Relasi antar table (Jurusan → Prodi → Mahasiswa)
- Cascade delete otomatis
- Error handling yang comprehensive
- Middleware JSON parser

## 🔧 Persyaratan Sistem

- Node.js v14 atau lebih tinggi
- MySQL v5.7 atau lebih tinggi
- npm atau yarn

## 📦 Instalasi

1. **Clone atau download project**
   ```bash
   cd express-mahasiswa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

4. **Sync schema ke database**
   ```bash
   npx prisma db push
   ```

5. **Buat file `.env`** di root project
   ```bash
   cp .env.example .env  # Jika ada file .env.example
   # atau buat manual file .env
   ```

## ⚙️ Konfigurasi

Buat file `.env` di root project dengan konfigurasi berikut:

```env
# Server
PORT=3000

# Database MySQL (Prisma menggunakan DATABASE_URL)
DATABASE_URL="mysql://root:password_anda@localhost:3306/express_mahasiswa"
```

**Contoh untuk XAMPP/WAMP:**
```env
PORT=3000
DATABASE_URL="mysql://root:@localhost:3306/express_mahasiswa"
```

Jika Anda ingin menggunakan kredensial lain, ganti `root`, `password_anda`, `localhost`, `3306`, dan `express_mahasiswa` sesuai konfigurasi MySQL Anda.

## 🚀 Menjalankan Aplikasi

### Mode Development (dengan Auto-reload)
```bash
npm run dev
```
*Menggunakan nodemon untuk auto-reload saat ada perubahan file*

### Mode Production
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

## 📡 API Endpoints

### Mahasiswa
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/mahasiswa` | Ambil semua mahasiswa |
| GET | `/api/mahasiswa/:id` | Ambil mahasiswa by ID |
| POST | `/api/mahasiswa` | Buat mahasiswa baru |
| PUT | `/api/mahasiswa/:id` | Update mahasiswa |
| DELETE | `/api/mahasiswa/:id` | Hapus mahasiswa |

### Prodi (Program Studi)
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/prodi` | Ambil semua prodi |
| GET | `/api/prodi/:id` | Ambil prodi by ID |
| POST | `/api/prodi` | Buat prodi baru |
| PUT | `/api/prodi/:id` | Update prodi |
| DELETE | `/api/prodi/:id` | Hapus prodi |

### Jurusan
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/jurusan` | Ambil semua jurusan |
| GET | `/api/jurusan/:id` | Ambil jurusan by ID |
| POST | `/api/jurusan` | Buat jurusan baru |
| PUT | `/api/jurusan/:id` | Update jurusan |
| DELETE | `/api/jurusan/:id` | Hapus jurusan |

### Contoh Request

**GET - Ambil semua mahasiswa dengan relasi prodi**
```bash
curl http://localhost:3000/api/mahasiswa
```

**POST - Buat mahasiswa baru**
```bash
curl -X POST http://localhost:3000/api/mahasiswa \
  -H "Content-Type: application/json" \
  -d '{
    "nama": "John Doe",
    "nim": "12345678",
    "prodi_id": 1
  }'
```

**GET - Ambil mahasiswa by ID**
```bash
curl http://localhost:3000/api/mahasiswa/1
```

**PUT - Update mahasiswa**
```bash
curl -X PUT http://localhost:3000/api/mahasiswa/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nama": "Jane Doe",
    "nim": "87654321"
  }'
```

**DELETE - Hapus mahasiswa**
```bash
curl -X DELETE http://localhost:3000/api/mahasiswa/1
```

## 📁 Struktur Project

```
express-mahasiswa/
├── config/
│   └── database.js          # Konfigurasi Prisma Client
├── controllers/
│   ├── jurusanController.js # Business logic Jurusan
│   ├── mahasiswaController.js # Business logic Mahasiswa
│   └── prodiController.js   # Business logic Prodi
├── models/
│   ├── index.js             # Relasi antar model (opsional jika masih tersedia)
│   ├── Jurusan.js           # Model Jurusan (opsional jika masih tersedia)
│   ├── Mahasiswa.js         # Model Mahasiswa (opsional jika masih tersedia)
│   └── Prodi.js             # Model Prodi (opsional jika masih tersedia)
├── prisma/
│   └── schema.prisma        # Schema Prisma untuk MySQL
├── routes/
│   ├── index.js             # Route aggregator
│   ├── jurusan.js           # Route Jurusan
│   ├── mahasiswa.js         # Route Mahasiswa
│   └── prodi.js             # Route Prodi
├── index.js                 # Entry point aplikasi
├── package.json             # Dependencies
├── .env                     # Environment variables (jangan commit!)
└── .gitignore               # Git ignore rules
```

## 🗄️ Database Schema

### Relasi Diagram
```
Jurusan (1) ----<(Many)---- Prodi
  ↓ (1)
  └----<(Many)---- Mahasiswa (via Prodi)
```

### Table Structure

**Jurusan**
- `id` (INT, PK, Auto-increment)
- `nama` (STRING, NOT NULL)
- `timestamps` (createdAt, updatedAt)

**Prodi**
- `id` (INT, PK, Auto-increment)
- `nama` (STRING, NOT NULL)
- `jurusan_id` (INT, FK to Jurusan, NOT NULL)
- `timestamps` (createdAt, updatedAt)

**Mahasiswa**
- `id` (INT, PK, Auto-increment)
- `nama` (STRING, NOT NULL)
- `nim` (STRING, NOT NULL)
- `prodi_id` (INT, FK to Prodi, NOT NULL)
- `timestamps` (createdAt, updatedAt)

### Cascade Delete
- Saat Jurusan dihapus → Prodi terkait otomatis terhapus
- Saat Prodi dihapus → Mahasiswa terkait otomatis terhapus

## 📝 Response Format

### Success Response
```json
{
  "id": 1,
  "nama": "Teknik Informatika",
  "jurusan_id": 1,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### Error Response
```json
{
  "message": "Error description"
}
```

## 🐛 Troubleshooting

### Error: connect ECONNREFUSED 127.0.0.1:3306
- Pastikan MySQL server sudah running
- Cek konfigurasi di file `.env`

### Error: Access denied for user 'root'@'localhost'
- Verifikasi username dan password MySQL di `.env`

### Tabel tidak tercipta
- Jalankan `npx prisma db push` untuk membuat tabel sesuai schema Prisma
- Pastikan database sudah tercipta sebelum menjalankan perintah tersebut

## 📚 Dependencies

- **express** - Web framework
- **prisma** - Prisma CLI dan tooling
- **@prisma/client** - Prisma client untuk query database
- **dotenv** - Environment variables
- **nodemon** (dev) - Auto-reload development server

## 📄 License

ISC

---

**Dibuat untuk Coding Camp**
