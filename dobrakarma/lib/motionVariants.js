const titleVariants = {
  offscreen: {
    opacity: 0,
    x: 300,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const cardsVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
  },
  onscreenSlow: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
    },
  },
  onscreenFast: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export { titleVariants, cardsVariants };
