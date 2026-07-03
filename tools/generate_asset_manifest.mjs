import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = 'art';
const output = 'art/ASSET_MANIFEST.json';
const allowed = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.aseprite', '.kra'];
const assets = [];

async function walk(dir) {
  const items = await readdir(dir, { withFileTypes: true }).catch(() => []);
  for (const item of items) {
    const path = join(dir, item.name);
    if (path === output) continue;
    if (item.isDirectory()) await walk(path);
    else if (allowed.some((ext) => item.name.toLowerCase().endsWith(ext))) assets.push(path);
  }
}

await walk(root);
await writeFile(output, JSON.stringify({ generated_at: new Date().toISOString(), assets }, null, 2));
console.log(`Asset manifest generated with ${assets.length} asset(s).`);
