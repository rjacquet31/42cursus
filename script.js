/**
 * Placement exact façon Holy Graph 42
 * - On garde le conteneur carré -> orbites rondes
 * - Chaque planète a:
 *   - data-orbit : 1..5
 *   - data-angle : angle en degrés (0° = à droite, anti-horaire)
 */

const root = document.documentElement;
const universe = document.getElementById('universe');
const planets = [...universe.querySelectorAll('.planet')];

// Rayon des orbites = moitié du diamètre CSS
const orbitRadiusPx = orbitClass =>
  parseFloat(getComputedStyle(universe.querySelector(`.${orbitClass}`)).width) / 2;

// Pré-calcul des rayons
const radii = {
  1: orbitRadiusPx('orbit1'),
  2: orbitRadiusPx('orbit2'),
  3: orbitRadiusPx('orbit3'),
  4: orbitRadiusPx('orbit4'),
  5: orbitRadiusPx('orbit5'),
};

// Place une planète selon orbite + angle (degrés)
function place(planet){
  const orbit = Number(planet.dataset.orbit);
  const deg   = Number(planet.dataset.angle || 0);
  const rad   = (deg * Math.PI) / 180;

  const r = radii[orbit] || 0;

  // Coordonnées relatives au centre (0,0)
  const x = r * Math.cos(rad);
  const y = r * Math.sin(rad);

  // On stocke dans des CSS custom props pour conserver l'effet hover scale
  planet.style.setProperty('--tx', `${x}px`);
  planet.style.setProperty('--ty', `${y}px`);
  planet.style.transform = `translate(${x}px, ${y}px)`;
}

// Placement initial
planets.forEach(place);

// Recalcule au redimensionnement (pour le responsive)
window.addEventListener('resize', () => {
  // Recalcule les rayons (le conteneur change avec vmin)
  ['orbit1','orbit2','orbit3','orbit4','orbit5'].forEach((cls, i) => {
    radii[i+1] = orbitRadiusPx(cls);
  });
  planets.forEach(place);
});

// Interaction : clic -> GitHub
planets.forEach(p => {
  p.addEventListener('click', () => {
    const url = p.dataset.url;
    if (url) window.open(url, '_blank', 'noopener');
  });
});
