export const fadeInUp = {
  initial: { y: 20, opacity: 0, scale: 0.95 },
  whileInView: { y: 0, opacity: 1, scale: [1.05, 1] },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeInDown = {
  initial: { y: -50, opacity: 0, scale: 0.9 },
  whileInView: { y: 0, opacity: 1, scale: [1.1, 1] },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const slideLeftRight = (direction = 100) => ({
  hidden: { x: direction, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
});
