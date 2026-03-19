export const slideInRight = {
  initial: { x: -100, opacity: 0, scale: 0.9 },      
  whileInView: { x: 0, opacity: 1, scale: [1.1, 1] }, 
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 1.2, ease: "easeOut" },     
};
