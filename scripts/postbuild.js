import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientDir = path.resolve(__dirname, '../dist/client');
const assetsDir = path.resolve(clientDir, 'assets');

if (!fs.existsSync(assetsDir)) {
  console.error('Assets directory not found at:', assetsDir);
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const jsFiles = files.filter(f => f.endsWith('.js'));
const cssFiles = files.filter(f => f.endsWith('.css'));

// Create standard static index.html content embedding all built module assets natively
const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Arun Adhithya V — Software Engineer & AI/ML Developer</title>
    <meta name="description" content="Portfolio of Arun Adhithya V — Software Engineer specializing in AI/ML, AWS cloud architecture, MERN stack, and computer vision." />
    ${cssFiles.map(css => `<link rel="stylesheet" href="./assets/${css}" />`).join('\n    ')}
  </head>
  <body class="bg-[#22242C] text-white">
    <div id="root"></div>
    ${jsFiles.map(js => `<script type="module" src="./assets/${js}"></script>`).join('\n    ')}
  </body>
</html>`;

const outputPath = path.resolve(clientDir, 'index.html');
fs.writeFileSync(outputPath, htmlContent, 'utf-8');
console.log('Successfully generated pure static SPA entry file at:', outputPath);

// Duplicate to 404.html as well so GitHub Pages handles client-side routing natively without throwing server 404s!
const notFoundPath = path.resolve(clientDir, '404.html');
fs.writeFileSync(notFoundPath, htmlContent, 'utf-8');
console.log('Successfully generated GitHub Pages fallback routing wrapper at:', notFoundPath);
