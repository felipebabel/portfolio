export const homeVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  },
  title: {
    hidden: { y: -50, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: [1.05, 1], 
      transition: { duration: 1.2, ease: "easeOut" }
    },
  },
  info: {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.0, ease: "easeOut" } 
    },
  },
  button: {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.0, ease: "easeOut" } 
    },
  },
  social: {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.0, ease: "easeOut" } 
    },
  },
  image: {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 1.5, ease: "easeOut" } 
    },
  },
};
