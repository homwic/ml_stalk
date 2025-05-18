# 🔍 ML Stalker Web App

[![Node.js](https://img.shields.io/badge/Node.js-22.x-brightgreen?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-Web%20Framework-blue?logo=express)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-BETA-orange)]()
[![Made with HTML/CSS/JS](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJS-informational)]()

Aplikasi web sederhana untuk melakukan *stalk* player Mobile Legends berdasarkan **User ID** dan **Server ID**. Dibuat menggunakan **Node.js + Express** di sisi server dan **HTML/CSS/JS** di sisi frontend.

---

## 🚀 Fitur

- Input User ID dan Server ID
- Validasi input agar hanya menerima angka
- Fetch data dari API eksternal (`https://www.laurine.site`)
- Tooltip bantuan dengan gambar (ID & Server)
- Spinner loading saat menunggu hasil
- Menampilkan hasil (username & region) atau pesan error
- UI modern dan responsif

---

## 📦 Instalasi & Menjalankan

### 1. Clone Repositori

```bash
git clone https://github.com/username/ml-stalker.git
cd ml-stalker
```

### 2. Install Dependensi

```bash
npm install
```

Dependensi yang digunakan:

- express – Framework web untuk Node.js
- body-parser – Untuk membaca data form yang dikirim ke server
- node-fetch – Untuk mengambil data dari API pihak ketiga

### 3. Jalankan Server

```bash
node app.js
```

Akses aplikasi di browser pada:

```
http://localhost:3000
```

---

## 📁 Struktur Proyek

```
ml-stalker/
├── app.js               # Server utama menggunakan Express
├── public/
│   ├── index.html       # File HTML utama (frontend)
│   └── stalkml.jpeg     # Gambar panduan (digunakan dalam tooltip)
├── package.json         # File konfigurasi Node.js
```

---

## 🔄 Alur Kerja

1. Pengguna mengisi form dengan User ID dan Server ID
2. Data dikirim ke endpoint `/stalk` via AJAX
3. Server melakukan validasi input (harus angka)
4. Server mengirim request ke API eksternal:

```
https://www.laurine.site/api/stalk/mlstalk?id=USERID&zone=ZONEID
```

5. Jika berhasil:
   - Menampilkan username dan region

6. Jika gagal:
   - Menampilkan pesan error

---

## 🖼️ Contoh Tooltip

Tooltip digunakan untuk membantu pengguna memahami cara mengisi User ID dan Server ID dengan benar. Gambar `stalkml.png` akan ditampilkan sebagai panduan visual.

---

## ⚠️ Catatan Penting

- Pastikan API `https://www.laurine.site/api/stalk/mlstalk` sedang online
- File `stalkml.jpeg` harus berada di dalam folder `public/`
- Input hanya boleh berupa angka (0–9)

---

## 🧾 Lisensi

Proyek ini menggunakan lisensi MIT. Silakan lihat file LICENSE untuk informasi lebih lanjut.

Dibuat dengan ❤️ oleh [homwic]

---


