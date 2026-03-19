import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { navbarVariants } from "./NavbarAnimations";

export default function HamburgerButton({ menuOpen, toggleMenu }) {
  return (
    <motion.button
      className={styles.btnMenu}
      onClick={toggleMenu}
      aria-label="Menu"
      variants={navbarVariants.link}    
      custom={0}                        
      initial="hidden"
      animate="visible"
    >
      <motion.span
        className={styles.bar}
        animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className={styles.bar}
        animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className={styles.bar}
        animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
