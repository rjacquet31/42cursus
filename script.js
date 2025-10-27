document.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('click', () => {
    const url = planet.dataset.url;
    if (url) window.open(url, '_blank');
  });
});

