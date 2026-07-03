const app = document.querySelector('#app');
const state = { week: 1, xp: 0, energy: 80, honra: 50, hype: 10 };

const readJson = async (path) => {
  const response = await fetch(path);
  if (!response.ok) throw new Error(path);
  return response.json();
};

const data = await Promise.all([
  readJson('../data/characters.json'),
  readJson('../data/techniques.json'),
  readJson('../data/missions.json')
]).then(([characters, techniques, missions]) => ({ characters, techniques, missions }));

function train() {
  if (state.energy < 10) return;
  state.energy -= 10;
  state.xp += 10;
  state.honra += 1;
  render();
}

function rest() {
  state.energy = Math.min(100, state.energy + 25);
  render();
}

function mission() {
  state.hype += 2;
  state.xp += 15;
  state.week += 1;
  render();
}

function render() {
  const hero = data.characters.characters.find((item) => item.id === 'ruan_macacao');
  const firstMission = data.missions.missions[0];
  app.innerHTML = `
    <section class="panel">
      <p class="kicker">Cria do Tatame</p>
      <h1>${hero.name} “${hero.nickname}”</h1>
      <p class="muted">${hero.archetype}</p>
      <button id="train">Treinar</button>
      <button id="rest">Descansar</button>
      <button id="mission">Missão</button>
    </section>
    <section class="grid">
      <div class="card"><small>Semana</small><h2>${state.week}</h2></div>
      <div class="card"><small>XP</small><h2>${state.xp}</h2></div>
      <div class="card"><small>Energia</small><h2>${state.energy}</h2></div>
      <div class="card"><small>Honra</small><h2>${state.honra}</h2></div>
      <div class="card"><small>Hype</small><h2>${state.hype}</h2></div>
      <div class="card"><small>Missão</small><h2>${firstMission.title}</h2></div>
    </section>`;
  document.querySelector('#train').onclick = train;
  document.querySelector('#rest').onclick = rest;
  document.querySelector('#mission').onclick = mission;
}

render();
