window.sr = ScrollReveal({ reset: true });
window.addEventListener('DOMContentLoaded', () => {
  ScrollReveal({
    origin: "bottom",
    duration: 2000,
    scale: 0.5,
    distance: "100px",
    reset: false,
    mobile: false,
    delay: 100,
  }).reveal(".sBottom", {
    interval: 100
  });
  ScrollReveal({
    origin: "left",
    duration: 2000,
    scale: 0.5,
    distance: "100px",
    reset: false,
    mobile: false,
    delay: 100,
  }).reveal(".sLeft", {
    interval: 100
  });
  ScrollReveal({
    origin: "right",
    duration: 2000,
    scale: 0.5,
    distance: "100px",
    reset: false,
    mobile: false,
    delay: 100,
  }).reveal(".sRight", {
    interval: 100
  });
  ScrollReveal({
    origin: "top",
    duration: 1000,
    scale: 0.5,
    distance: "100px",
    reset: false,
    mobile: false,
    delay: 100,
  }).reveal(".sTop", {
    interval: 100
  });

});
