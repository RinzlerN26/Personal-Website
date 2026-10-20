// Reveal elements as they scroll into view
const items = document.querySelectorAll(".reveal");

if (!("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("in"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  // small stagger for cards in the same row
  document.querySelectorAll(".grid .card").forEach((card, i) => {
    card.style.transitionDelay = `${(i % 2) * 80}ms`;
  });

  items.forEach((el) => observer.observe(el));
}
