// ===================== NAVBAR SCROLL =====================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===================== HAMBURGER MENU =====================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.querySelectorAll('span')[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  hamburger.querySelectorAll('span')[1].style.opacity   = isOpen ? '0' : '';
  hamburger.querySelectorAll('span')[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ===================== FADE-UP ANIMATION =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.categoria-card, .produto-card, .diferencial-card, .section__header, .hero__text, .hero__visual'
).forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${i * 0.07}s`;
  observer.observe(el);
});

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});
