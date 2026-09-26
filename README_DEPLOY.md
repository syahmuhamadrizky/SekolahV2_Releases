# 🚀 Panduan Deploy Dapoy Schools ke Hosting (Production)

Release bundle ini adalah paket siap pakai (**Production Build**) yang sudah dikompilasi, diminifikasi, dan diamankan dari modifikasi source code.

---

## 📋 File & Struktur Paket
```text
├── dist/                  # Hasil kompilasi Frontend & Backend (Obfuscated)
│   ├── assets/            # Bundle JS, CSS, Font, Gambar
│   ├── server.cjs         # Backend Express Server (Terkunci & Ter-obfuscate)
│   └── index.html         # Template Single Page Application
├── uploads/               # Direktori penyimpanan file upload (foto, berkas, dokumen)
├── ecosystem.config.cjs   # Konfigurasi PM2 (untuk VPS / Server)
├── package.json           # Dependensi modul produksi
├── server.js              # Entry script Node.js (Root Startup File)
├── update_version.txt     # Catatan versi & update checker
├── .env.example           # Contoh konfigurasi database & server
└── README_DEPLOY.md       # Panduan instalasi ini
```

---

## 🌐 Opsi 1: Deploy di cPanel (Setup Node.js App)

1. **Upload File Release:**
   - Masuk ke **cPanel File Manager**.
   - Upload file `dapoy-schools-production.zip` ke root direktori aplikasi (misal: `/home/username/sekolah`).
   - Ekstrak archive tersebut.

2. **Buat Database MySQL:**
   - Buka menu **MySQL Databases** di cPanel.
   - Buat database baru (misal: `user_sekolah`) dan buat user database beserta passwordnya.
   - Berikan hak akses (**ALL PRIVILEGES**) user ke database tersebut.

3. **Konfigurasi `.env`:**
   - Salin / ubah nama file `.env.example` menjadi `.env`.
   - Buka file `.env` dan sesuaikan:
     ```env
     PORT=5001
     NODE_ENV=production
     DB_HOST=localhost
     DB_NAME=user_namadb
     DB_USER=user_namadbuser
     DB_PASSWORD=password_db_anda
     JWT_SECRET=kunci_rahasia_acak_yang_panjang
     ```

4. **Konfigurasi Node.js App di cPanel:**
   - Masuk ke menu **Setup Node.js App** di cPanel.
   - Klik **Create Application**.
   - **Node.js version**: Pilih versi **18.x**, **20.x**, atau **22.x**.
   - **Application mode**: Pilih **Production**.
   - **Application root**: Isi sesuai folder (misal `sekolah`).
   - **Application URL**: Pilih domain atau subdomain Anda.
   - **Application startup file**: Isi `server.js`.
   - Klik **Create**.

5. **Instal Dependensi:**
   - Di halaman Node.js App cPanel, klik tombol **Run NPM Install** (atau buka Terminal cPanel, masuk ke folder aplikasi dan jalankan `npm install --omit=dev`).

6. **Restart Aplikasi:**
   - Klik **Restart** pada aplikasi Node.js Anda di cPanel.
   - Buka domain Anda di browser. Database tabel dan pengaturan sekolah akan dibuat otomatis pada startup pertama!

---

## 🖥️ Opsi 2: Deploy di VPS (Ubuntu / Debian / Linux)

1. **Upload dan Ekstrak:**
   ```bash
   mkdir -p /var/www/dapoy-schools
   cd /var/www/dapoy-schools
   tar -xzvf /path/to/dapoy-schools-production.tar.gz
   ```

2. **Instal Node.js & Dependensi:**
   ```bash
   npm install --omit=dev
   ```

3. **Buat File `.env`:**
   ```bash
   cp .env.example .env
   nano .env
   ```
   *(Isi kredensial MySQL dan JWT_SECRET)*

4. **Jalankan dengan PM2:**
   ```bash
   npm install -g pm2
   pm2 start ecosystem.config.cjs
   pm2 save
   pm2 startup
   ```

5. **Konfigurasi Nginx (Reverse Proxy):**
   ```nginx
   server {
       server_name sekolah.domainanda.com;

       client_max_body_size 50M;

       location / {
           proxy_pass http://127.0.0.1:5001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

---

## ✨ Fitur Keamanan Produksi
- ✅ **Obfuscated Backend Core**: Kode server diamankan sehingga logika lisensi & endpoint tidak dapat diubah oleh pihak ketiga.
- ✅ **Minified Frontend**: Kode antarmuka dikompilasi tanpa sourcemap sehingga aman dan sangat cepat dimuat.
- ✅ **Auto-Migration DB**: Skema database terbentuk otomatis saat server pertama kali dinyalakan.
