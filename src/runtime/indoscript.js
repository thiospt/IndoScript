// Runtime untuk eksekusi langsung di browser
(function() {
  // Fungsi cetak untuk browser
  window.cetak = function(...args) {
    if (typeof console !== 'undefined') {
      console.log(...args);
    } else {
      // Fallback untuk browser lama
      document.write(args.join(' ') + '<br>');
    }
  };

  // Fungsi panjang untuk array dan string
  window.panjang = function(obj) {
    if (Array.isArray(obj) return obj.length;
    if (typeof obj === 'string') return obj.length;
    return Object.keys(obj).length;
  };

  // Fungsi tanggal
  window.tanggalBaru = function() {
    return new Date();
  };

  // Fungsi jam
  Date.prototype.getJam = function() {
    return this.getHours();
  };

  // Fungsi menit
  Date.prototype.getMenit = function() {
    return this.getMinutes();
  };
})();
