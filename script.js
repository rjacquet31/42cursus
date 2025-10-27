const universe = document.getElementById("universe");
const planets = [...universe.querySelectorAll(".planet")];

// Groupes d’orbites selon le nombre d’éléments
const orbits = [
  [planets[0]], // orbit 1
  planets.slice(1, 4), // orbit 2
  planets.slice(4, 7), // orbit 3
  planets.slice(7, 9), // orbit 4
  planets.slice(9, 12), // orbit 5
];

// rayon en pixels (distance du centre)
const radii = [0, 120, 200, 280, 360];

// Placer chaque planète sur son orbite circulaire
orbits.forEach((group, i) => {
  const radius = radii[i];
  const count = group.length;

  group.forEach((planet, index) => {
    const angle = (index / count) * 2 * Math.PI; // angle en radians
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    planet.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Rendre les planètes cliquables
planets.forEach(p => {
  p.addEventListener("click", () => {
    const url = p.dataset.url;
    if (url) window.open(url, "_blank");
  });
});

