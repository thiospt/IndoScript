# IndoScript 🇮🇩

Bahasa pemrograman JavaScript dengan sintaks Bahasa Indonesia yang sederhana.

![IndoScript Logo](https://via.placeholder.com/150/2c3e50/3498db?text=IS)

## Fitur Utama
- ✅ Sintaks bahasa Indonesia (`variabel`, `jika`, `cetak`, dll.)
- ✅ Kompatibel dengan ekosistem JavaScript
- ✅ Ringan dan mudah dipelajari
- ✅ Mendukung semua fitur JavaScript modern

## Instalasi
```bash
npm install -g indoscript
```

## Penggunaan
### Kompilasi file IndoScript
```bash
indoscript compile contoh.jsid
```

### Jalankan hasil kompilasi
```bash
node contoh.js
```

## Contoh Kode
```javascript
// Program Hello World
cetak("Halo Dunia!");

// Fungsi dan kondisi
fungsi sapa(nama) {
    jika (panjang(nama) > 0) {
        kembalikan "Halo, " + nama + "!";
    } lain {
        kembalikan "Halo, anonim!";
    }
}

cetak(sapa("Budi"));
```

## Dokumentasi Lengkap
Lihat [Panduan Penggunaan](docs/panduan.md) untuk dokumentasi lengkap.

## Berkontribusi
1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -am 'Tambahkan fitur'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Lisensi
Projek ini dilisensikan di bawah [MIT License](LICENSE).
