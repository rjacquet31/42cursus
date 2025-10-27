const universe = document.getElementById("universe");
const planets = [...universe.querySelectorAll(".planet")];

const radii = [0, 120, 200, 280, 360]; // correspond aux orbit1..5
const grouped = [[], [], [], [], [], []];

// regroupe les planètes selon leur data-orbit
planets.forEach(p => grouped[p.dataset.orbit].push(p));

// place chaque planète en cercle
grouped.forEach((group, i) => {
  if (!group.length) return;
  const radius = radii[i];
  const count = group.length;

  group.forEach((planet, index) => {
    const angle = (index / count) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    planet.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// clic = ouvre le lien GitHub
planets.forEach(p => {
  p.addEventListener("click", () => {
    window.open(p.dataset.url, "_blank");
  });
});

