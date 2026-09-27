import { mkdir, writeFile } from 'node:fs/promises';

const directory = new URL('../public/fonts/', import.meta.url);
await mkdir(directory, { recursive: true });
const files = [
  ['manrope.ttf', 'manrope/Manrope%5Bwght%5D.ttf'],
  ['instrument-serif.ttf', 'instrumentserif/InstrumentSerif-Regular.ttf'],
  ['instrument-serif-italic.ttf', 'instrumentserif/InstrumentSerif-Italic.ttf'],
  ['manrope-LICENSE.txt', 'manrope/OFL.txt'],
  ['instrument-serif-LICENSE.txt', 'instrumentserif/OFL.txt'],
];

for (const [destination, source] of files) {
  const response = await fetch(
    `https://raw.githubusercontent.com/google/fonts/main/ofl/${source}`,
    { signal: AbortSignal.timeout(30000) },
  );
  if (!response.ok) throw new Error(`Font download failed: ${response.status}`);
  await writeFile(
    new URL(destination, directory),
    Buffer.from(await response.arrayBuffer()),
  );
  console.log(`Saved ${destination}`);
}
