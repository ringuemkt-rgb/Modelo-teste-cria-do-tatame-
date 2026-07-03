import { readFile } from 'node:fs/promises';

const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));
const fail = (message) => {
  console.error(`DATA ERROR: ${message}`);
  process.exitCode = 1;
};

const characters = (await readJson('data/characters.json')).characters || [];
const techniques = (await readJson('data/techniques.json')).techniques || [];
const missions = (await readJson('data/missions.json')).missions || [];
const arenas = (await readJson('data/arenas.json')).arenas || [];

const characterIds = new Set(characters.map((item) => item.id));
const arenaIds = new Set(arenas.map((item) => item.id));

for (const character of characters) {
  if (!character.id || !character.name) fail('character without id or name');
  if (!character.stats?.hp || !character.stats?.stamina) fail(`character ${character.id} without core stats`);
}

for (const technique of techniques) {
  if (!technique.id || !technique.name) fail('technique without id or name');
  if (!Array.isArray(technique.from) || technique.from.length === 0) fail(`technique ${technique.id} without from positions`);
  if (!technique.cost || !technique.effects) fail(`technique ${technique.id} without cost/effects`);
}

for (const mission of missions) {
  if (!characterIds.has(mission.opponent_id)) fail(`mission ${mission.id} points to missing opponent ${mission.opponent_id}`);
  if (!arenaIds.has(mission.arena_id)) fail(`mission ${mission.id} points to missing arena ${mission.arena_id}`);
}

if (!process.exitCode) console.log('Game data validated.');
