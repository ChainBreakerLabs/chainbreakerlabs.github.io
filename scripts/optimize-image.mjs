import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const [source, destination, width = '1536'] = process.argv.slice(2);
if (!source || !destination || !destination.endsWith('.webp')) {
  throw new Error(
    'Usage: node scripts/optimize-image.mjs input.png output.webp [width]',
  );
}
const size = Number(width);
if (!Number.isInteger(size) || size < 64 || size > 2048)
  throw new Error('Width must be an integer between 64 and 2048.');
await mkdir(dirname(destination), { recursive: true });
await sharp(source)
  .resize({ width: size, withoutEnlargement: true })
  .webp({ quality: 86, effort: 6 })
  .toFile(destination);
console.log(`Saved ${destination}`);
