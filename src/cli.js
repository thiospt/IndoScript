#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const { transpile } = require('./compiler/transpiler');
const { version } = require('../package.json');

program
  .version(version)
  .description('Kompiler IndoScript - Bahasa pemrograman Indonesia')
  .option('-v, --verbose', 'Tampilkan detail proses kompilasi')
  .option('-o, --output <file>', 'Tentukan nama file output')
  .argument('<file>', 'File IndoScript yang akan dikompilasi')
  .action((file, options) => {
    try {
      const filePath = path.resolve(process.cwd(), file);
      const outputPath = options.output 
        ? path.resolve(process.cwd(), options.output) 
        : filePath.replace('.jsid', '.js');

      if (!fs.existsSync(filePath)) {
        console.error(`File tidak ditemukan: ${filePath}`);
        process.exit(1);
      }

      const code = fs.readFileSync(filePath, 'utf8');
      const jsCode = transpile(code);
      fs.writeFileSync(outputPath, jsCode);

      if (options.verbose) {
        console.log(`✅ Berhasil mengompilasi ${file} ke ${outputPath}`);
        console.log('📝 Hasil kompilasi:');
        console.log('='.repeat(40));
        console.log(jsCode);
        console.log('='.repeat(40));
      } else {
        console.log(`✅ Berhasil mengompilasi ${file} ke ${outputPath}`);
      }
    } catch (error) {
      console.error(`❌ Gagal mengompilasi: ${error.message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);
