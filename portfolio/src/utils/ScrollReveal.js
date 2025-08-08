import ScrollReveal from "scrollreveal";

export const initScrollReveal = () => {
  ScrollReveal().reveal(".reveal", {
    duration: 1000,
    distance: "40px",
    easing: "ease-out",
    origin: "bottom",
    reset: false,
    interval: 100,
  });
};
