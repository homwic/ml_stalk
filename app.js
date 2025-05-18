const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware untuk parsing JSON dan form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (untuk HTML dan asset lainnya)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint untuk form request
app.post('/stalk', async (req, res) => {
    let { id, zone } = req.body;

    // Hapus semua karakter non-angka dari id dan zone
    id = (id || '').replace(/\D/g, '');
    zone = (zone || '').replace(/\D/g, '');

    // Validasi input
    if (!id || !zone) {
        return res.json({ error: "❌ User ID dan Server ID tidak boleh kosong dan harus berupa angka." });
    }

    const url = `https://www.laurine.site/api/stalk/mlstalk?id=${id}&zone=${zone}`;
    console.log("URL yang dipanggil:", url);

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Status HTTP: ${response.status}`);
        }

        const data = await response.json();

        // Cek jika data ditemukan
        if (data && data.data && data.data.success) {
            return res.json({
                username: data.data.username.replace(/\+/g, ' '), // Ganti tanda '+' dengan spasi
                region: data.data.region || 'Tidak diketahui'
            });
        } else {
            return res.json({ error: "⚠️ Data tidak ditemukan atau format salah." });
        }
    } catch (err) {
        console.error("Gagal fetch:", err.message);
        return res.json({ error: "❌ Gagal menghubungi API. Coba lagi nanti." });
    }
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
