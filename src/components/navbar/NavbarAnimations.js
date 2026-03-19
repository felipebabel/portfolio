export const navbarVariants = {
  logo: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  },
  link: {
    hidden: { x: 100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.15, duration: 1, ease: "easeOut" },
    }),
  },
};
