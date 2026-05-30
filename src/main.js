// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animationType = entry.target.dataset.animate;

      if (animationType) {
        entry.target.classList.add(animationType);
      }

      // Animate skill badges
      if (entry.target.classList.contains('skill-badge')) {
        entry.target.classList.add('visible');
      }

      animationObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with data-animate attribute
document.querySelectorAll('[data-animate]').forEach(element => {
  animationObserver.observe(element);
});

// Observe all skill badges
document.querySelectorAll('.skill-badge').forEach(badge => {
  animationObserver.observe(badge);
});
