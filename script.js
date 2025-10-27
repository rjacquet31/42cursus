document.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('click', () => {
    const url = planet.dataset.url;
    window.open(url, '_blank');
  });
});
