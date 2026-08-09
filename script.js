const heroActions = document.querySelector('.hero .actions');

if (heroActions) {
  heroActions.insertAdjacentHTML(
    'beforeend',
    '<a class="button secondary" href="https://drive.google.com/file/d/1M7P5gtRLOeqCj6yqikhrcDpgAR295bEy/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i data-lucide="file-down"></i>Unduh CV</a>'
  );
}

if (window.lucide) window.lucide.createIcons();

document.querySelectorAll('.copy-email').forEach((button) => {
  button.addEventListener('click', async () => {
    const label = button.querySelector('.contact-name');
    try {
      await navigator.clipboard.writeText(button.dataset.email);
      label.textContent = 'Email tersalin';
    } catch {
      label.textContent = button.dataset.email;
    }
    window.setTimeout(() => { label.textContent = 'Email'; }, 1800);
  });
});

document.querySelectorAll('.filters button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filters button').forEach((item) => item.classList.toggle('selected', item === button));
    document.querySelectorAll('.case-card').forEach((card) => {
      card.hidden = filter !== 'all' && !card.dataset.category.includes(filter);
    });
  });
});

const navigationLinks = [...document.querySelectorAll('.site-header nav a')];
const navigationSections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if (navigationSections.length) {
  const updateActiveNavigation = (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navigationLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  };
  const observer = new IntersectionObserver(updateActiveNavigation, {
    rootMargin: '-25% 0px -55% 0px',
    threshold: [0.1, 0.35, 0.6]
  });
  navigationSections.forEach((section) => observer.observe(section));
}
