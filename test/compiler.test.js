const { transpile } = require('../src/compiler/transpiler');

describe('IndoScript Compiler', () => {
  test('mengubah variabel', () => {
    const code = 'variabel nama = "Budi";';
    const expected = 'let nama = "Budi";';
    expect(transpile(code)).toBe(expected);
  });

  test('mengubah fungsi dan kembalikan', () => {
    const code = 'fungsi tambah(a, b) { kembalikan a + b; }';
    const expected = 'function tambah(a, b) { return a + b; }';
    expect(transpile(code)).toBe(expected);
  });

  test('mengubah jika-lain', () => {
    const code = 'jika (umur > 17) { cetak("Dewasa"); } lain { cetak("Anak"); }';
    const expected = 'if (umur > 17) { console.log("Dewasa"); } else { console.log("Anak"); }';
    expect(transpile(code)).toBe(expected);
  });

  test('mengubah perulangan untuk', () => {
    const code = 'untuk (variabel i = 0; i < 10; i++) { cetak(i); }';
    const expected = 'for (let i = 0; i < 10; i++) { console.log(i); }';
    expect(transpile(code)).toBe(expected);
  });

  test('mengubah panjang', () => {
    const code = 'variabel arr = [1, 2, 3]; cetak(panjang(arr));';
    const expected = 'let arr = [1, 2, 3]; console.log(arr.length);';
    expect(transpile(code)).toBe(expected);
  });
});
