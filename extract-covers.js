const pdf2img = require('pdf-img-convert');
const fs = require('fs');
const path = require('path');

const pdfs = [
  { name: 'mercury-50', file: 'mercury-50.pdf' },
  { name: 'mercury-60', file: 'mercury-60.pdf' },
  { name: 'mercury-75', file: 'mercury-75.pdf' },
  { name: 'mercury-90', file: 'mercury-90.pdf' },
  { name: 'mercury-115', file: 'mercury-115.pdf' }
];

async function convertAll() {
  const pdfDir = path.join(__dirname, 'public', 'pdf');
  const imgDir = path.join(__dirname, 'public', 'img');

  for (const pdf of pdfs) {
    const pdfPath = path.join(pdfDir, pdf.file);
    const outPath = path.join(imgDir, `${pdf.name}-engine.png`);
    
    if (fs.existsSync(pdfPath)) {
      console.log(`Converting ${pdf.file}...`);
      try {
        const outputImages = await pdf2img.convert(pdfPath, { page_numbers: [1] });
        fs.writeFileSync(outPath, outputImages[0]);
        console.log(`Successfully saved ${outPath}`);
      } catch (err) {
        console.error(`Failed to convert ${pdf.file}:`, err);
      }
    } else {
      console.error(`File not found: ${pdfPath}`);
    }
  }
}

convertAll();
