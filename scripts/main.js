document.addEventListener('DOMContentLoaded', () => {
  // Animación fade-in
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => el.classList.add('visible'));

  // Alternancia de fondos
  const sections = document.querySelectorAll('main section, section:not(.testimonios)');
  sections.forEach((section, index) => {
    const bgClass = index % 2 === 0 ? 'alt-bg-1' : 'alt-bg-2';
    section.classList.add(bgClass);
  });
});
