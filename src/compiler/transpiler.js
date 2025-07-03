const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const KEYWORDS = {
  'variabel': 'let',
  'konstan': 'const',
  'fungsi': 'function',
  'kembalikan': 'return',
  'jika': 'if',
  'lain': 'else',
  'atau_jika': 'else if',
  'untuk': 'for',
  'selama': 'while',
  'cetak': 'console.log',
  'benar': 'true',
  'salah': 'false',
  'panjang': 'length',
  'tanggalBaru': 'new Date',
  'getJam': 'getHours',
  'getMenit': 'getMinutes'
};

const BUILT_IN_FUNCTIONS = [
  'cetak', 'panjang', 'tanggalBaru', 'getJam', 'getMenit'
];

function transpile(code) {
  // Tokenisasi sederhana
  let tokens = tokenize(code);
  
  // Proses transpilasi
  let jsCode = tokens.map(token => {
    // Ganti kata kunci
    if (KEYWORDS[token]) return KEYWORDS[token];
    
    // Tangani fungsi built-in
    if (BUILT_IN_FUNCTIONS.includes(token)) {
      return token === 'panjang' ? '.length' : KEYWORDS[token];
    }
    
    return token;
  }).join('');

  // Perbaiki kasus khusus
  jsCode = jsCode.replace(/\.length\(/g, '.length');
  
  return jsCode;
}

function tokenize(code) {
  // Regex untuk tokenisasi
  const regex = /(\b\w+\b|["'][^"']*["']|[.,;(){}\[\]+\-*/=<>!]|\s+)/g;
  
  // Pisahkan kode menjadi token
  let tokens = code.split(regex);
  
  // Filter token yang tidak perlu
  tokens = tokens.filter(token => 
    token.trim() !== '' && 
    token !== undefined
  );
  
  return tokens;
}

module.exports = {
  transpile,
  tokenize
};
