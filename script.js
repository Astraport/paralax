const scene = document.getElementById('scene');
const panels = [...document.querySelectorAll('.scene-panel')];
const tabs = [...document.querySelectorAll('.location-tab')];
const modeButtons = [...document.querySelectorAll('.mode-button')];
const depthList = document.getElementById('depth-list');
const modeDescription = document.getElementById('mode-description');
const fullscreenToggle = document.getElementById('fullscreen-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const locations = {
  portal: {
    kicker: 'МЕСТО 04 · ПО ТУ СТОРОНУ',
    main: 'Лунный', accent: 'портал',
    description: 'Шесть планов глубины: долина, лес, светящийся проход и деревья совсем рядом с камерой.',
    plaqueNumber: '04 / 05', plaquePlace: 'ЛУННАЯ ДОЛИНА',
    aria: 'Лунный портал, интерактивная параллакс-сцена',
    planes: [['background', 'Лунная долина'], ['far-trees', 'Дальний лес'], ['arch', 'Портал'], ['left-tree', 'Левое дерево'], ['right-tree', 'Правое дерево'], ['foreground', 'Папоротники']],
  },
  pond: {
    kicker: 'МЕСТО 01 · ТИХИЙ ВЕЧЕР',
    main: 'Пруд', accent: 'на закате',
    description: 'Камыши у берега, лодка в глубине пруда и последние лучи солнца на воде.',
    plaqueNumber: '01 / 05', plaquePlace: 'ПРУД · ЗАКАТ',
    aria: 'Пруд на закате, интерактивная параллакс-сцена',
    planes: [['background', 'Дальний берег'], ['boat', 'Лодка'], ['dock', 'Причал'], ['reeds', 'Камыш']],
  },
  greece: {
    kicker: 'МЕСТО 02 · У МОРЯ',
    main: 'Греческая', accent: 'деревня',
    description: 'Белые дома, синяя ограда и море между улочками. Оливы и апельсины греются на солнце.',
    plaqueNumber: '02 / 05', plaquePlace: 'ГРЕЦИЯ · ПОБЕРЕЖЬЕ',
    aria: 'Греческая деревня у моря, интерактивная параллакс-сцена',
    planes: [['background', 'Море и горы'], ['houses', 'Дальний берег'], ['buildings', 'Белые дома'], ['fence', 'Ограда'], ['olive', 'Олива'], ['orange', 'Апельсин']],
  },
  room: {
    kicker: 'МЕСТО 03 · ДОМА',
    main: 'Комната', accent: 'СССР',
    description: 'Ковёр на стене, сервант, кресло, стол, два стула и забытый на полу мячик.',
    plaqueNumber: '03 / 05', plaquePlace: 'СССР · КОНЕЦ 1970-Х',
    aria: 'Советская гостиная, интерактивная параллакс-сцена',
    planes: [['background', 'Стены и ковёр'], ['cabinet', 'Сервант'], ['armchair', 'Кресло'], ['chair-left', 'Левый стул'], ['chair-right', 'Правый стул'], ['table', 'Стол'], ['ball', 'Мячик']],
  },
  meso: {
    kicker: 'МЕСТО 05 · ДО НАС',
    main: 'Мезозойская', accent: 'долина',
    description: 'Вулкан на горизонте, динозавры у реки, птерозавры в небе и папоротники у самых ног.',
    plaqueNumber: '05 / 05', plaquePlace: 'ДОЛИНА · МЕЗОЗОЙ',
    aria: 'Мезозойская долина с динозаврами, интерактивная параллакс-сцена',
    planes: [['background', 'Вулкан и река'], ['sauropods', 'Зауроподы'], ['pterosaurs', 'Птерозавры'], ['trex', 'Тираннозавр'], ['ferns-left', 'Левые папоротники'], ['ferns-right', 'Правые папоротники']],
  },
};

const hiddenPlanes = Object.fromEntries(Object.keys(locations).map((key) => [key, new Set()]));
let activeLocation = 'portal';
let activeLayers = getLayers('portal');
let mode = '';
let activePointer = null;
let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;
let lastFrame = performance.now();
let motionClock = 0;

function getLayers(location) {
  return [...document.querySelector(`[data-panel="${location}"]`).querySelectorAll('.scene-layer')].map((element) => ({
    element, depth: Number(element.dataset.depth),
  }));
}

function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }

function render() {
  const scale = scene.clientWidth < 600 ? 0.78 : 1;
  const verticalFactor = activeLocation === 'room' ? 0.08 : 0.28;
  for (const { element, depth } of activeLayers) {
    let x = currentX * depth * scale;
    let y = currentY * depth * verticalFactor * scale;
    if (mode === 'auto' && element.dataset.drift === 'boat') {
      x += Math.sin(motionClock * 0.00073 + 1.2) * 12;
      y += Math.sin(motionClock * 0.00115) * 3;
    }
    if (mode === 'auto' && element.dataset.drift === 'fly') {
      x += Math.sin(motionClock * 0.00031 + 0.8) * 36;
      y += Math.sin(motionClock * 0.00049 + 1.4) * 11;
    }
    element.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
  }
}

function buildDepthList() {
  depthList.replaceChildren();
  document.getElementById('depth-count').textContent = String(locations[activeLocation].planes.length).padStart(2, '0');
  document.getElementById('layer-caption').textContent = `${locations[activeLocation].planes.length} НЕЗАВИСИМЫХ ПЛАНОВ ГЛУБИНЫ`;
  locations[activeLocation].planes.forEach(([plane, label], index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'depth-chip';
    button.dataset.plane = plane;
    button.setAttribute('aria-pressed', String(!hiddenPlanes[activeLocation].has(plane)));
    button.setAttribute('aria-label', `${label}: показать или скрыть слой`);
    button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>${label}`;
    button.addEventListener('click', () => {
      const hidden = hiddenPlanes[activeLocation];
      if (hidden.has(plane)) hidden.delete(plane); else hidden.add(plane);
      const visible = !hidden.has(plane);
      button.setAttribute('aria-pressed', String(visible));
      document.querySelectorAll(`[data-panel="${activeLocation}"] [data-plane="${plane}"]`).forEach((layer) => {
        layer.classList.toggle('is-hidden', !visible);
      });
    });
    depthList.append(button);
  });
}

function activateLocation(location) {
  if (!locations[location] || location === activeLocation) return;
  activeLocation = location;
  const details = locations[location];
  document.body.dataset.scene = location;
  document.getElementById('scene-kicker').textContent = details.kicker;
  document.getElementById('title-main').textContent = details.main;
  document.getElementById('title-accent').textContent = details.accent;
  document.getElementById('scene-description').textContent = details.description;
  document.getElementById('plaque-number').textContent = details.plaqueNumber;
  document.getElementById('plaque-place').textContent = details.plaquePlace;
  scene.setAttribute('aria-label', details.aria);
  panels.forEach((panel) => {
    const active = panel.dataset.panel === location;
    panel.classList.toggle('is-active', active);
    panel.setAttribute('aria-hidden', String(!active));
  });
  tabs.forEach((tab) => {
    const active = tab.dataset.location === location;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-pressed', String(active));
  });
  activeLayers = getLayers(location);
  buildDepthList();
  updateModeDescription();
  render();
}

function updateModeDescription() {
  const count = locations[activeLocation].planes.length;
  modeDescription.textContent = {
    auto: `Авто: ${count} планов плавно движутся из стороны в сторону. Курсор не влияет на сцену.`,
    mouse: 'Мышь: ведите курсор по сцене или перетащите её. Автоматическое движение выключено.',
    pause: 'Пауза: все планы остановлены. Курсор не влияет на сцену.',
  }[mode];
}

function setMode(nextMode) {
  if (nextMode === 'auto' && reducedMotion.matches) return;
  mode = nextMode;
  scene.dataset.mode = mode;
  if (mode === 'pause' || mode === 'mouse') {
    targetX = currentX;
    targetY = currentY;
  }
  modeButtons.forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  updateModeDescription();
}

tabs.forEach((tab) => tab.addEventListener('click', () => activateLocation(tab.dataset.location)));
modeButtons.forEach((button) => button.addEventListener('click', () => setMode(button.dataset.mode)));
fullscreenToggle.addEventListener('pointerdown', (event) => event.stopPropagation());
fullscreenToggle.addEventListener('click', async () => {
  if (document.fullscreenElement === scene) await document.exitFullscreen();
  else await scene.requestFullscreen();
});
document.addEventListener('fullscreenchange', () => {
  const expanded = document.fullscreenElement === scene;
  fullscreenToggle.innerHTML = expanded ? '⤢ <span>Свернуть</span>' : '⛶ <span>На весь экран</span>';
  fullscreenToggle.setAttribute('aria-label', expanded ? 'Выйти из полноэкранного режима' : 'Показать сцену на весь экран');
});

function pointScene(event) {
  const rect = scene.getBoundingClientRect();
  targetX = clamp(((event.clientX - rect.left) / rect.width - 0.5) * 2, -1, 1);
  targetY = clamp(((event.clientY - rect.top) / rect.height - 0.5) * 2, -1, 1);
  if (reducedMotion.matches) {
    currentX = targetX;
    currentY = targetY;
    render();
  }
}

scene.addEventListener('pointerdown', (event) => {
  if (mode !== 'mouse' || (event.pointerType === 'mouse' && event.button !== 0)) return;
  activePointer = event.pointerId;
  scene.setPointerCapture(event.pointerId);
  pointScene(event);
});
scene.addEventListener('pointermove', (event) => {
  if (mode !== 'mouse') return;
  if (activePointer !== null && event.pointerId !== activePointer) return;
  if (event.pointerType === 'touch' && activePointer === null) return;
  pointScene(event);
});
function endDrag(event) { if (event.pointerId === activePointer) activePointer = null; }
scene.addEventListener('pointerup', endDrag);
scene.addEventListener('pointercancel', endDrag);
scene.addEventListener('keydown', (event) => {
  if (mode !== 'mouse') return;
  const step = 0.2;
  if (event.key === 'ArrowLeft') targetX = clamp(targetX - step, -1, 1);
  else if (event.key === 'ArrowRight') targetX = clamp(targetX + step, -1, 1);
  else if (event.key === 'ArrowUp') targetY = clamp(targetY - step, -1, 1);
  else if (event.key === 'ArrowDown') targetY = clamp(targetY + step, -1, 1);
  else return;
  event.preventDefault();
  if (reducedMotion.matches) { currentX = targetX; currentY = targetY; render(); }
});

reducedMotion.addEventListener('change', (event) => {
  document.querySelector('[data-mode="auto"]').disabled = event.matches;
  if (event.matches && mode === 'auto') setMode('pause');
});

function animate(now) {
  const delta = Math.min(now - lastFrame, 64);
  lastFrame = now;
  if (mode === 'auto') {
    motionClock += delta;
    targetX = Math.sin(now * 0.00046) * 0.92;
    targetY = 0;
  }
  if (mode !== 'pause' && !reducedMotion.matches) {
    const ease = 1 - Math.exp(-delta / (mode === 'mouse' ? 135 : 230));
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;
    render();
  }
  requestAnimationFrame(animate);
}

document.querySelector('[data-mode="auto"]').disabled = reducedMotion.matches;
buildDepthList();
const requestedScene = new URLSearchParams(window.location.search).get('scene');
if (requestedScene && locations[requestedScene]) activateLocation(requestedScene);
setMode(reducedMotion.matches ? 'pause' : 'auto');
render();
requestAnimationFrame(animate);
