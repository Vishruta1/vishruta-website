/**
 * ViShruTa - Digital Technology Solutions
 * Main UI Controller: Custom Cursor, Lenis/Smooth Scroll, Counters, Navigation & Form
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initNavbar();
  initScrollProgress();
  initStatCounters();
  initTiltEffects();
  initContactForm();
});

/* 1. Custom Cursor */
function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // Touch devices

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  const dot = document.createElement('div');
  dot.className = 'custom-cursor-dot';

  document.body.appendChild(cursor);
  document.body.appendChild(dot);

  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function render() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(render);
  }
  render();

  // Hover triggers
  const interactiveEls = document.querySelectorAll('a, button, input, textarea, .glass-card, .btn, .client-logo-item');
  interactiveEls.forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  });
}

/* 2. Navbar & Mobile Drawer */
function initNavbar() {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* 3. Scroll Progress Indicator */
function initScrollProgress() {
  let bar = document.querySelector('.scroll-progress');
  if (!bar) {
    bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);
  }

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    bar.style.width = `${progress}%`;
  }, { passive: true });
}

/* 4. Animated Numerical Stat Counters */
function initStatCounters() {
  const statElements = document.querySelectorAll('.counter');
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10) || 0;
        animateNumber(el, target, 1600);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statElements.forEach((el) => observer.observe(el));

  function animateNumber(element, target, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out expo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      element.textContent = Math.floor(ease * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = target;
      }
    };
    requestAnimationFrame(step);
  }
}

/* 5. 3D Card Hover Tilt */
function initTiltEffects() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* 6. Contact Form Processing */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusMsg = document.getElementById('form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const subject = form.querySelector('[name="subject"]')?.value.trim() || 'Inquiry from ViShruTa Website';
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      if (statusMsg) {
        statusMsg.textContent = "Please fill out all required fields.";
        statusMsg.className = "text-danger";
      }
      return;
    }

    // Submit Simulation & Mailto Fallback
    const submitBtn = form.querySelector('button[type="submit"]');
    const origText = submitBtn.textContent;
    submitBtn.textContent = "Transmitting...";
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = origText;
      submitBtn.disabled = false;
      form.reset();

      // Show success modal or banner
      alert(`Thank you, ${name}! Your inquiry has been received. Our team will contact you shortly.\n\nFallback direct emails:\n• hemanth@vishruta.co.in\n• naveen@vishruta.co.in`);

      // Also trigger mailto fallback link option
      window.location.href = `mailto:hemanth@vishruta.co.in,naveen@vishruta.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
    }, 1000);
  });
}
