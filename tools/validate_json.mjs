import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const folders = ['data', 'schemas'];
let failed = false;

for (const folder of folders) {
  const files = await readdir(folder).catch(() => []);
  for (const file of files.filter((name) => name.endsWith('.json'))) {
    const path = join(folder, file);
    try {
      JSON.parse(await readFile(path, 'utf8'));
      console.log(`OK ${path}`);
    } catch (error) {
      failed = true;
      console.error(`INVALID ${path}: ${error.message}`);
    }
  }
}

if (failed) process.exit(1);
