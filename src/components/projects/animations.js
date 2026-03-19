export const fadeInDown = {
  initial: { y: -50, opacity: 0, scale: 0.9 },
  whileInView: { y: 0, opacity: 1, scale: [1.1, 1] },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeInProject = {
  initial: { y: 40, opacity: 0, scale: 0.95 },
  whileInView: { y: 0, opacity: 1, scale: [1.05, 1] },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: "easeOut" },
};
