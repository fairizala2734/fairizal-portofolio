if (window.lucide) window.lucide.createIcons();

const caseStudyConfig = {
  'project-microsleep.html': {
    meta: [['Tugas akhir', 'Konteks'], ['Individual', 'Ownership'], ['Android · CV', 'Fokus']],
    next: ['project-stunting.html', 'Stunting Classification']
  },
  'project-preeclampsia.html': {
    meta: [['2025–2026', 'Periode'], ['Research project', 'Konteks'], ['Tim 3 orang', 'Kolaborasi']],
    next: ['project-comparative-text.html', 'Comparative Text Analysis']
  },
  'project-comparative-text.html': {
    meta: [['2026', 'Tahun'], ['Research project', 'Konteks'], ['NLP · Software', 'Fokus']],
    next: ['project-remind.html', 'REMIND Driver Safety System']
  },
  'project-remind.html': {
    meta: [['Capstone', 'Konteks'], ['Tim 3 orang', 'Kolaborasi'], ['Model mata', 'Kontribusi utama']],
    next: ['project-iot-academic.html', 'IoT Academic Prototypes']
  },
  'project-facetro.html': {
    meta: [['2024–2025', 'Periode'], ['Internship', 'Konteks'], ['IT Support · Mobile', 'Peran']],
    next: ['project-microsleep.html', 'Microsleep Detector']
  },
  'project-iot-academic.html': {
    meta: [['Akademik', 'Konteks'], ['3 prototipe', 'Cakupan'], ['Hands-on', 'Pendekatan']],
    next: ['projects.html', 'Kembali ke semua proyek']
  }
};

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const currentCaseStudy = caseStudyConfig[currentPage];
const caseStudyMain = document.querySelector('.case-study');

if (currentCaseStudy && caseStudyMain) {
  const caseIntro = caseStudyMain.querySelector('.case-hero .page-intro');
  if (caseIntro && !caseStudyMain.querySelector('.project-meta')) {
    const items = currentCaseStudy.meta.map(([value, label]) => `<li><strong>${value}</strong><span>${label}</span></li>`).join('');
    caseIntro.insertAdjacentHTML('afterend', `<ul class="project-meta">${items}</ul>`);
  }
  if (!caseStudyMain.querySelector('.next-project')) {
    const [href, title] = currentCaseStudy.next;
    caseStudyMain.insertAdjacentHTML('beforeend', `<section class="case-section next-project"><p class="section-kicker">Lanjut menjelajah</p><a href="${href}"><span>Proyek berikutnya</span><strong>${title}</strong><b>→</b></a></section>`);
  }
}

document.querySelectorAll('.copy-email').forEach((button) => {
  button.addEventListener('click', async () => {
    const label = button.querySelector('.contact-name');
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(button.dataset.email);
      label.textContent = 'Email tersalin';
      if (status) status.textContent = 'Alamat email berhasil disalin.';
    } catch {
      label.textContent = button.dataset.email;
      if (status) status.textContent = 'Alamat email ditampilkan untuk disalin secara manual.';
    }
    window.setTimeout(() => {
      label.textContent = 'Email';
      if (status) status.textContent = '';
    }, 1800);
  });
});

document.querySelectorAll('.filters button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filters button').forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle('selected', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    });
    let visibleProjects = 0;
    document.querySelectorAll('.case-card').forEach((card) => {
      const isVisible = filter === 'all' || card.dataset.category.split(' ').includes(filter);
      card.hidden = !isVisible;
      if (isVisible) visibleProjects += 1;
    });
    const projectCount = document.querySelector('#project-count');
    if (projectCount) projectCount.textContent = `${visibleProjects} proyek`;
  });
});

const navigationLinks = [...document.querySelectorAll('.site-header nav a')];
const navigationSections = navigationLinks
  .filter((link) => link.getAttribute('href').startsWith('#'))
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if (navigationSections.length > 1) {
  const setActiveNavigation = (section) => {
    let activeLink;
    navigationLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${section.id}`;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
        activeLink = link;
      } else {
        link.removeAttribute('aria-current');
      }
    });
    if (activeLink && activeLink.parentElement.scrollWidth > activeLink.parentElement.clientWidth) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      activeLink.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', inline: 'nearest', block: 'nearest' });
    }
  };

  let scrollFrame;
  const updateActiveNavigation = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      const marker = window.scrollY + window.innerHeight * 0.38;
      const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      let activeSection = navigationSections[0];
      navigationSections.forEach((section) => {
        if (section.offsetTop <= marker) activeSection = section;
      });
      if (atPageEnd) activeSection = navigationSections[navigationSections.length - 1];
      setActiveNavigation(activeSection);
      scrollFrame = null;
    });
  };

  window.addEventListener('scroll', updateActiveNavigation, { passive: true });
  window.addEventListener('resize', updateActiveNavigation);
  updateActiveNavigation();
}
