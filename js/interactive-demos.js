/**
 * ViShruTa - Client Interactions & UI Utilities
 * Filtering for Success Stories and Lightbox for Gallery
 */

document.addEventListener('DOMContentLoaded', () => {
  initCaseStudyFilters();
  initLightbox();
});

/* 1. Success Stories Category Filters */
function initCaseStudyFilters() {
  const filterBtns = document.querySelectorAll('.case-filter-btn');
  const cards = document.querySelectorAll('.case-study-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter.toLowerCase();
      cards.forEach((card) => {
        const cat = card.dataset.category.toLowerCase();
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* 2. Lightbox for Control & Instrumentation Gallery */
function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;

  const closeBtn = lightbox.querySelector('.lightbox-close');
  const imgEl = lightbox.querySelector('#lightbox-img');
  const titleEl = lightbox.querySelector('#lightbox-title');
  const triggers = document.querySelectorAll('.lightbox-trigger');

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const title = trigger.dataset.title || "ViShruTa Industrial Installation";
      const src = trigger.getAttribute('href') || trigger.dataset.src;

      if (titleEl) titleEl.textContent = title;
      if (imgEl && src) imgEl.src = src;

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) close();
  });
}
