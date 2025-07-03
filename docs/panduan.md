# Panduan IndoScript

IndoScript adalah bahasa pemrograman dengan sintaks Bahasa Indonesia yang dikompilasi menjadi JavaScript.

## Instalasi
```bash
npm install -g indoscript
```

## Penggunaan Dasar
### Kompilasi file
```bash
indoscript compile contoh.jsid
```

### Menjalankan hasil kompilasi
```bash
node contoh.js
```

## Sintaks Dasar
### Variabel
```javascript
variabel nama = "Budi";
konstan PI = 3.14;
```

### Output
```javascript
cetak("Halo Dunia!");
cetak("Nilai:", 42);
```

### Kondisi
```javascript
jika (umur >= 17) {
    cetak("Dewasa");
} lain {
    cetak("Anak-anak");
}
```

### Perulangan
```javascript
// For loop
untuk (variabel i = 0; i < 5; i++) {
    cetak(i);
}

// While loop
variabel x = 0;
selama (x < 3) {
    cetak(x);
    x++;
}
```

### Fungsi
```javascript
fungsi tambah(a, b) {
    kembalikan a + b;
}

cetak(tambah(2, 3)); // Output: 5
```

## Fitur Lanjutan
### Array
```javascript
variabel angka = [1, 2, 3];
cetak(panjang(angka)); // Output: 3
```

### Tanggal dan Waktu
```javascript
variabel sekarang = tanggalBaru();
cetak(sekarang.getJam() + ":" + sekarang.getMenit());
```

### Interoperabilitas dengan JavaScript
```javascript
// Gunakan library JavaScript
variabel moment = require('moment');
cetak(moment().format('DD-MM-YYYY'));
```
