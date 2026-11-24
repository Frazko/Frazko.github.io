import { projects, ui } from './project-content.js';

// Small, local outline icons: no external font, script or icon service is needed.
const icons = {
  mountain: '<path d="m2 20 7-15 4 8 3-6 6 13Z M6 12l3 2 2-2"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5Z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v5m10-5v5M3 11h18M7 15h2m6 0h2m-10 3h2"/>',
  route: '<circle cx="5" cy="6" r="3"/><circle cx="19" cy="18" r="3"/><path d="M8 6h9a4 4 0 0 1 0 8H7a4 4 0 0 0 0 8h4"/>',
  camera: '<path d="M8 6l2-3h4l2 3h4a2 2 0 0 1 2 2v11H2V8a2 2 0 0 1 2-2Z"/><circle cx="12" cy="12" r="4"/>',
  user: '<circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>',
  'user-plus': '<circle cx="9" cy="7" r="4"/><path d="M2 22v-3a7 7 0 0 1 14 0v3m3-13v8m-4-4h8"/>',
  users: '<circle cx="9" cy="7" r="4"/><path d="M2 22v-3a7 7 0 0 1 14 0v3m0-19a4 4 0 0 1 0 8m3 3a7 7 0 0 1 3 6v2"/>',
  home: '<path d="m2 11 10-8 10 8M5 9v12h14V9m-10 12v-8h6v8"/>',
  map: '<path d="m2 5 6-3 8 3 6-3v17l-6 3-8-3-6 3Zm6-3v17m8-14v17"/>',
  store: '<path d="M3 10h18l-2-7H5ZM4 10v11h16V10M9 21v-7h6v7m-8-18-1 7m11-7 1 7"/>',
  car: '<path d="m4 10 2-6h12l2 6m-17 7V12a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5ZM5 17v3m14-3v3M6 14h2m8 0h2"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  chat: '<path d="M21 15a4 4 0 0 1-4 4H9l-6 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z M7 8h10M7 12h7"/>',
  images: '<rect x="6" y="3" width="16" height="15" rx="2"/><path d="M2 7v13a2 2 0 0 0 2 2h14M6 15l5-5 4 4 3-3 4 4"/><circle cx="17" cy="7" r="1"/>',
  settings: '<path d="M3 6h4m6 0h8M3 12h10m6 0h2M3 18h4m6 0h8"/><circle cx="10" cy="6" r="3"/><circle cx="16" cy="12" r="3"/><circle cx="10" cy="18" r="3"/>',
  cards: '<rect x="7" y="3" width="14" height="18" rx="2"/><path d="M3 6v13m8-10h6m-6 4h6m-6 4h3"/>',
  book: '<path d="M12 5C8 2 5 2 2 3v17c3-1 6-1 10 2 4-3 7-3 10-2V3c-3-1-6-1-10 2Zm0 0v17"/>',
  check: '<path d="m5 12 4 4L20 5M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9"/>',
  swap: '<path d="M3 7h17m-5-5 5 5-5 5m6 5H4m5-5-5 5 5 5"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="m7 12-2 10 7-3 7 3-2-10"/>',
  heart: '<path d="M12 21 3 12C-3 5 6-2 12 6 18-2 27 5 21 12Z"/>',
  shield: '<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6Zm-5 10 3 3 7-7"/>',
  activity: '<path d="M2 12h5l3-8 4 16 3-8h5"/>',
  bell: '<path d="M4 18h16l-2-4V8a6 6 0 0 0-12 0v6Zm5 3h6"/>',
  history: '<path d="M3 10a9 9 0 1 1 1 7M3 3v7h7m2-5v7l4 3"/>',
  palette: '<path d="M12 2a10 10 0 1 0 0 20c4 0 1-4 4-5h2c6 0 6-15-6-15Z"/><path d="M7 7h.01M12 5h.01M17 8h.01M5 12h.01"/>',
  square: '<rect x="3" y="3" width="18" height="18" rx="4"/><rect x="7" y="7" width="10" height="10" rx="2"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/>',
  play: '<circle cx="12" cy="12" r="10"/><path d="m10 7 7 5-7 5Z"/>',
  film: '<rect x="3" y="2" width="18" height="20" rx="2"/><path d="M7 2v20m10-20v20M3 7h4m-4 5h18M3 17h4M17 7h4m-4 10h4"/>',
  filter: '<path d="M3 4h18l-7 8v8l-4 2V12Z"/>',
  layers: '<path d="m2 7 10-5 10 5-10 5Zm0 5 10 5 10-5M2 17l10 5 10-5"/>',
  receipt: '<path d="M5 2 8 4l4-2 4 2 3-2v20l-3-2-4 2-4-2-3 2ZM9 8h6m-6 4h6m-6 4h3"/>',
  search: '<circle cx="10" cy="10" r="7"/><path d="m15 15 7 7"/>',
  network: '<circle cx="12" cy="4" r="3"/><circle cx="4" cy="19" r="3"/><circle cx="20" cy="19" r="3"/><path d="m10 7-5 9m9-9 5 9M7 19h10"/>',
  mic: '<rect x="8" y="2" width="8" height="13" rx="4"/><path d="M4 10v2a8 8 0 0 0 16 0v-2m-8 10v3m-4 0h8"/>',
  code: '<path d="m8 5-6 7 6 7m8-14 6 7-6 7M14 2l-4 20"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
};

const dialog = document.querySelector('#project-dialog');
const content = dialog.querySelector('.detail-content');
const title = dialog.querySelector('#detail-title');
const closeButton = dialog.querySelector('[data-close-details]');
let currentId = null;
let selectedBranch = 0;
let returnFocus = null;
let map = null;
let previousOverflow = '';
const language = () => document.documentElement.lang === 'es' ? 'es' : 'en';
const localized = (value) => typeof value === 'string' ? value : (value[language()] || value.en);
const label = (key) => localized(ui[key]);
const node = (tag, className, value) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (value !== undefined) element.textContent = value;
  return element;
};
const icon = (name) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.6');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = icons[name] || icons.square;
  return svg;
};

closeButton.append(icon('close'));
closeButton.addEventListener('click', () => dialog.close());
// Keep keyboard navigation in the panel, including browsers that otherwise
// move focus to their toolbar at the ends of a native dialog's tab order.
dialog.addEventListener('keydown', (event) => {
  if (event.key !== 'Tab') return;
  const controls = [...dialog.querySelectorAll('button:not([disabled]), a[href]')];
  const first = controls[0], last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = previousOverflow;
  observer.disconnect();
  returnFocus?.focus({ preventScroll: true });
  currentId = null;
});
let startedOnBackdrop = false;
dialog.addEventListener('pointerdown', (event) => { startedOnBackdrop = event.target === dialog; });
dialog.addEventListener('click', (event) => {
  if (event.target === dialog && startedOnBackdrop) dialog.close();
  startedOnBackdrop = false;
});

function drawConnections() {
  if (!dialog.open || !map) return;
  const canvas = map.canvas.getBoundingClientRect();
  const center = map.center.getBoundingClientRect();
  const cx = center.left + center.width / 2 - canvas.left;
  const cy = center.top + center.height / 2 - canvas.top;
  map.edges.setAttribute('viewBox', `0 0 ${canvas.width} ${canvas.height}`);
  map.buttons.forEach((button, index) => {
    const box = button.getBoundingClientRect();
    const dx = box.left + box.width / 2 - canvas.left - cx;
    const dy = box.top + box.height / 2 - canvas.top - cy;
    const start = Math.min(dx ? center.width / 2 / Math.abs(dx) : Infinity, dy ? center.height / 2 / Math.abs(dy) : Infinity);
    const end = Math.min(dx ? box.width / 2 / Math.abs(dx) : Infinity, dy ? box.height / 2 / Math.abs(dy) : Infinity);
    const sx = cx + dx * start, sy = cy + dy * start;
    const ex = cx + dx * (1 - end), ey = cy + dy * (1 - end);
    const bend = (ex - sx) * 0.55;
    map.paths[index].setAttribute('d', `M ${sx} ${sy} C ${sx + bend} ${sy}, ${ex - bend} ${ey}, ${ex} ${ey}`);
  });
}
const observer = new ResizeObserver(drawConnections);

function updateBranch() {
  const data = projects[currentId].branches[selectedBranch];
  map.buttons.forEach((button, index) => {
    button.setAttribute('aria-pressed', String(index === selectedBranch));
    map.paths[index].classList.toggle('is-active', index === selectedBranch);
  });
  const heading = node('h4', '', localized(data.title));
  heading.id = 'function-title';
  const list = node('ul');
  data.items.forEach((item) => {
    const li = node('li');
    const copy = node('div');
    const name = node('strong', '', localized(item.title));
    copy.append(name);
    if (item.planned) copy.append(node('span', 'feature-planned', label('planned')));
    copy.append(node('p', '', localized(item.description)));
    li.append(icon(item.icon), copy);
    list.append(li);
  });
  map.detail.replaceChildren(heading, list);
}

function buildMap(project, appName) {
  const section = node('section', 'functional-map');
  section.setAttribute('aria-labelledby', 'map-title');
  const heading = node('h3', '', label('map').replace('{app}', appName));
  heading.id = 'map-title';
  section.append(heading, node('p', 'map-hint', label('mapHint')));
  const canvas = node('div', 'map-canvas');
  canvas.setAttribute('role', 'group');
  canvas.setAttribute('aria-label', label('areas'));
  const edges = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  edges.classList.add('map-connections');
  edges.setAttribute('aria-hidden', 'true');
  const center = node('div', 'map-center');
  center.append(icon(project.icon), node('strong', '', appName));
  if (project.subtitle) center.append(node('span', '', project.subtitle));
  canvas.append(edges, center);
  const detail = node('section', 'map-detail');
  detail.id = 'function-detail';
  detail.setAttribute('aria-live', 'polite');
  detail.setAttribute('aria-atomic', 'true');
  detail.setAttribute('aria-labelledby', 'function-title');
  const paths = [], buttons = [];
  project.branches.forEach((branch, index) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    edges.append(path);
    paths.push(path);
    const button = node('button', 'map-branch');
    button.type = 'button';
    button.dataset.branch = String(index);
    button.setAttribute('aria-controls', detail.id);
    button.append(icon(branch.icon), node('span', '', localized(branch.title)));
    button.addEventListener('click', () => { selectedBranch = index; updateBranch(); });
    canvas.append(button);
    buttons.push(button);
  });
  section.append(canvas, detail);
  map = { canvas, center, edges, paths, buttons, detail };
  updateBranch();
  return section;
}

function render() {
  const project = projects[currentId];
  const card = document.getElementById(`app-${currentId}`);
  const appName = card.querySelector('h3').textContent;
  const scrollTop = content.scrollTop;
  observer.disconnect();
  content.replaceChildren();
  dialog.style.setProperty('--project-accent', project.accent);
  title.textContent = appName;
  closeButton.setAttribute('aria-label', label('close'));
  dialog.querySelector('.language-switch').setAttribute('aria-label', label('language'));

  const hero = node('section', 'detail-hero');
  const pitch = node('div', 'detail-pitch');
  const status = card.querySelector('.tag').cloneNode(true);
  const headline = node('h3', '', localized(project.headline));
  pitch.append(status, headline);
  project.story.forEach((paragraph) => pitch.append(node('p', '', localized(paragraph))));
  const image = card.querySelector('.project-art img').cloneNode(true);
  image.className = 'detail-art';
  image.loading = 'eager';
  hero.append(pitch, image);

  const technical = node('section', 'detail-section');
  technical.append(node('h3', '', label('technical')), node('p', '', localized(project.technical)));
  const stack = node('section', 'detail-section');
  stack.append(node('h3', '', label('technologies')));
  const definitions = node('dl', 'technology-list');
  project.technologies.forEach((technology) => {
    const row = node('div');
    row.append(node('dt', '', localized(technology.name)), node('dd', '', localized(technology.description)));
    definitions.append(row);
  });
  stack.append(definitions);
  content.append(hero, technical, buildMap(project, appName), stack);
  const cardLinks = card.querySelector('.project-links');
  if (cardLinks) {
    const stores = node('section', 'detail-section detail-stores');
    stores.append(node('h3', '', label(cardLinks.dataset.linksLabel || 'stores')), cardLinks.cloneNode(true));
    content.append(stores);
  }
  observer.observe(map.canvas);
  observer.observe(map.center);
  map.buttons.forEach((button) => observer.observe(button));
  content.scrollTop = scrollTop;
  requestAnimationFrame(drawConnections);
}

document.querySelectorAll('[data-project-details]').forEach((button) => {
  if (!projects[button.dataset.projectDetails]) return;
  button.hidden = false;
  button.addEventListener('click', () => {
    returnFocus = button;
    currentId = button.dataset.projectDetails;
    selectedBranch = 0;
    render();
    content.scrollTop = 0;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    closeButton.focus({ preventScroll: true });
    requestAnimationFrame(drawConnections);
  });
});

document.addEventListener('portfolio:languagechange', () => {
  if (!dialog.open) return;
  const focusedBranch = document.activeElement?.dataset.branch;
  render();
  if (focusedBranch !== undefined) map.buttons[Number(focusedBranch)]?.focus({ preventScroll: true });
});
