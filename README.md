# 🔍 ML Stalker Web App

[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-Web%20Framework-blue?logo=express)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-BETA-orange)]()
[![Made with HTML/CSS/JS](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJS-informational)]()

Aplikasi web sederhana untuk melakukan *stalk* player Mobile Legends berdasarkan **User ID** dan **Server ID**. Dibuat menggunakan **Node.js + Express** di sisi server dan **HTML/CSS/JS** di sisi frontend.

---

## 🚀 Fitur

- Input User ID dan Server ID
- Validasi input agar hanya menerima angka
- Mengambil data dari API eksternal (`https://www.laurine.site`)
- Tooltip bantuan dengan gambar (panduan ID & Server)
- Spinner loading saat menunggu hasil
- Menampilkan hasil (username & region) atau pesan error
- UI modern dan responsif

---

## 📦 Instalasi & Menjalankan

Untuk menjalankan aplikasi ini, pertama-tama silakan **clone repositori** ke dalam folder lokal dengan perintah berikut:

```bash
git clone https://github.com/username/ml-stalker.git
cd ml-stalker
Setelah itu, lakukan instalasi dependensi Node.js yang dibutuhkan menggunakan:

bash
Copy
Edit
npm install
Dependensi yang digunakan antara lain: express sebagai framework web, body-parser untuk membaca data form, dan node-fetch untuk melakukan request ke API eksternal.

Jika semua sudah terpasang, jalankan server menggunakan perintah:

bash
Copy
Edit
node app.js
Kemudian akses aplikasi melalui browser di alamat:

arduino
Copy
Edit
http://localhost:3000
Struktur proyek ini cukup sederhana, berikut gambaran direktori dan file utamanya:

graphql
Copy
Edit
ml-stalker/
├── app.js                 # Server utama menggunakan Express
├── public/
│   ├── index.html         # File HTML utama (frontend)
│   └── stalkml.jpeg       # Gambar panduan (tooltip)
├── package.json           # Konfigurasi proyek Node.js
🔄 Alur Kerja
Pengguna akan mengisi form dengan User ID dan Server ID, lalu data dikirim ke endpoint /stalk menggunakan AJAX. Server akan memvalidasi bahwa input hanya terdiri dari angka, kemudian mengirim permintaan ke API eksternal:

bash
Copy
Edit
https://www.laurine.site/api/stalk/mlstalk?id=USERID&zone=ZONEID
Jika data ditemukan, maka username dan region akan ditampilkan. Jika tidak, akan muncul pesan error.
