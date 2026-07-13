/**
 * Generate PNG favicon assets from SVG source.
 * Run: node scripts/generate-favicons.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Icon-only SVG for favicons/app icons (on dark navy background)
const faviconSvg = readFileSync(join(publicDir, 'favicon.svg'), 'utf-8');

// Transparent icon SVG for apple-touch-icon
const logoSvg = readFileSync(join(publicDir, 'logo.svg'), 'utf-8');

// Create a simple icon SVG with white background for apple-touch
function createAppleTouchSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
    <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="#0F172A"/>
    <g transform="translate(${size * 0.1}, ${size * 0.1}) scale(${size * 0.8 / 48})">
      <path d="M10.5 33C5.8 33 2 29.2 2 24.5c0-3.9 2.6-7.1 6.2-8.1C9.8 10.4 14.6 6 20.5 6c4.3 0 8 2.2 10.2 5.5.9-.3 1.9-.5 2.8-.5 4.4 0 8 3.6 8 8 0 .5-.1 1-.1 1.4C44.2 21.8 46 24.8 46 28.2c0 2.7-1.4 5-3.5 6.4" stroke="#2563EB" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M10.5 33v1.5M42.5 34.6v-1.6" stroke="#2563EB" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      <circle cx="19" cy="22.5" r="2.6" fill="#2563EB"/>
      <line x1="19" y1="25.1" x2="19" y2="45" stroke="#2563EB" stroke-width="2.8" stroke-linecap="round"/>
      <circle cx="26.5" cy="15" r="2.6" fill="#2563EB"/>
      <line x1="26.5" y1="17.6" x2="26.5" y2="45" stroke="#2563EB" stroke-width="2.8" stroke-linecap="round"/>
      <circle cx="34" cy="22.5" r="2.6" fill="#2563EB"/>
      <line x1="34" y1="25.1" x2="34" y2="45" stroke="#2563EB" stroke-width="2.8" stroke-linecap="round"/>
    </g>
  </svg>`;
}

const sizes = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192.png', size: 192 },
  { name: 'android-chrome-512.png', size: 512 },
];

async function generate() {
  for (const { name, size } of sizes) {
    const svg = createAppleTouchSvg(size);
    const buffer = Buffer.from(svg);
    
    await sharp(buffer)
      .resize(size, size)
      .png()
      .toFile(join(publicDir, name));
    
    console.log(`✓ Generated ${name} (${size}x${size})`);
  }

  // Generate OG image (1200x630) with logo
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <rect width="1200" height="630" fill="#0F172A"/>
    <!-- Subtle grid -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(37,99,235,0.08)" stroke-width="1"/>
    </pattern>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <!-- Glow -->
    <circle cx="600" cy="250" r="200" fill="rgba(37,99,235,0.15)"/>
    <!-- Logo icon -->
    <g transform="translate(510, 120) scale(4)">
      <path d="M10.5 33C5.8 33 2 29.2 2 24.5c0-3.9 2.6-7.1 6.2-8.1C9.8 10.4 14.6 6 20.5 6c4.3 0 8 2.2 10.2 5.5.9-.3 1.9-.5 2.8-.5 4.4 0 8 3.6 8 8 0 .5-.1 1-.1 1.4C44.2 21.8 46 24.8 46 28.2c0 2.7-1.4 5-3.5 6.4" stroke="#2563EB" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M10.5 33v1.5M42.5 34.6v-1.6" stroke="#2563EB" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      <circle cx="19" cy="22.5" r="2.6" fill="#2563EB"/>
      <line x1="19" y1="25.1" x2="19" y2="45" stroke="#2563EB" stroke-width="2.8" stroke-linecap="round"/>
      <circle cx="26.5" cy="15" r="2.6" fill="#2563EB"/>
      <line x1="26.5" y1="17.6" x2="26.5" y2="45" stroke="#2563EB" stroke-width="2.8" stroke-linecap="round"/>
      <circle cx="34" cy="22.5" r="2.6" fill="#2563EB"/>
      <line x1="34" y1="25.1" x2="34" y2="45" stroke="#2563EB" stroke-width="2.8" stroke-linecap="round"/>
    </g>
    <!-- Wordmark -->
    <text x="600" y="420" text-anchor="middle" font-family="Inter, Manrope, system-ui, sans-serif" font-size="72" font-weight="700">
      <tspan fill="#ffffff">Ein</tspan><tspan fill="#2563EB">Data</tspan>
    </text>
    <!-- Tagline -->
    <text x="600" y="470" text-anchor="middle" font-family="Inter, Manrope, system-ui, sans-serif" font-size="22" font-weight="600" letter-spacing="6" fill="rgba(255,255,255,0.5)">
      DATA  •  CLOUD  •  AI
    </text>
    <!-- URL -->
    <text x="600" y="560" text-anchor="middle" font-family="Inter, Manrope, system-ui, sans-serif" font-size="20" fill="rgba(255,255,255,0.3)">
      eindata.nl
    </text>
  </svg>`;

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png()
    .toFile(join(publicDir, 'og-image.png'));
  
  console.log('✓ Generated og-image.png (1200x630)');
  console.log('\n✅ All favicon and OG assets generated successfully!');
}

generate().catch(console.error);
