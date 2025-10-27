const universe = document.getElementById('universe');
const planets = [...document.querySelectorAll('.planet')];
const cluster1 = document.querySelector('.cpp-cluster');
const cluster2 = document.querySelector('.cpp-cluster2');

/* 📐 Rayon d'une orbite */
const radiusOf = (orbitClass) =>
  document.querySelector('.' + orbitClass).getBoundingClientRect().width / 2;

let radii = {};
function calcRadii() {
  for (let i = 1; i <= 7; i++) {
    radii[i] = radiusOf(`orbit${i}`);
  }
}

/* 🎯 Placement d’une planète */
function placePlanet(el){
  const orbit = +el.dataset.orbit;
  const deg = +el.dataset.angle;
  const rad = deg * Math.PI / 180;
  const r = radii[orbit];

  const x = r * Math.cos(rad);
  const y = r * Math.sin(rad);

  el.style.setProperty('--x', `${x}px`);
  el.style.setProperty('--y', `${y}px`);
}

/* ⭐ Placement d’un cluster */
function placeCluster(cluster, orbit, angleDeg, smallR = 38){
  if (!cluster) return;

  const r = radii[orbit];
  const rad = angleDeg * Math.PI / 180;

  const cx = r * Math.cos(rad);
  const cy = r * Math.sin(rad);

  cluster.style.setProperty('--x', `${cx}px`);
  cluster.style.setProperty('--y', `${cy}px`);

  const children = [...cluster.querySelectorAll('.cpp')];
  children.forEach((p, i) => {
    const a = (i / children.length) * 2 * Math.PI;
    const x = smallR * Math.cos(a);
    const y = smallR * Math.sin(a);
    p.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/* ♻️ Placement global */
function refresh() {
  calcRadii();
  planets.forEach(p => !p.classList.contains('cpp') && placePlanet(p));
  cluster1 && placeCluster(cluster1, 5, +cluster1.dataset.angle, 34);
  cluster2 && placeCluster(cluster2, 6, +cluster2.dataset.angle, 34);
}
refresh();

/* 🔄 Responsive */
window.addEventListener('resize', refresh);

/* 🖱️ Zoom */
let scale = 1;
universe.addEventListener('wheel', (e) => {
  e.preventDefault();
  scale += (e.deltaY < 0 ? 0.05 : -0.05);
  scale = Math.max(0.4, Math.min(2.5, scale));
  universe.style.transform = `scale(${scale})`;
});

/* 🌐 Clic = GitHub */
planets.forEach(p => p.addEventListener('click', () =>
  window.open(p.dataset.url, '_blank', 'noopener')
));
