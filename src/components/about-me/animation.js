export const fadeInUpItem = {
  initial: { y: 20, opacity: 0, scale: 0.95 },
  whileInView: { y: 0, opacity: 1, scale: [1.05, 1], transition: { duration: 0.8, ease: "easeOut" } },
};

export const fadeInDown = {
  initial: { y: -50, opacity: 0, scale: 0.9 },
  whileInView: { y: 0, opacity: 1, scale: [1.1, 1], transition: { duration: 0.8, ease: "easeOut" } },
};

export const fadeInUpContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2, when: "beforeChildren" } },
};

export const slideLeftRight = (direction = 100) => ({
  initial: { x: direction, opacity: 0 },
  whileInView: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
});
