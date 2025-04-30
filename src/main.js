// Smooth scroll for internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in animations on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
fadeEls.forEach(el => {
  observer.observe(el);
});

// Easter egg modal triggered by typing 'vibe'
let keyBuffer = '';
document.addEventListener('keydown', (e) => {
  keyBuffer += e.key.toLowerCase();
  if (keyBuffer.endsWith('vibe')) {
    document.getElementById('easter-egg-modal').classList.remove('hidden');
    keyBuffer = '';
  }
  if (keyBuffer.length > 8) keyBuffer = keyBuffer.slice(-8);
});
document.getElementById('close-easter-egg').addEventListener('click', () => {
  document.getElementById('easter-egg-modal').classList.add('hidden');
});
