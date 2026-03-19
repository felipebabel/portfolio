import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import NavLink from "./NavLink";

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

export default function MobileMenu({ menuOpen, closeMenu, links, scrollToSection }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.showOverlay : ""}`}
        onClick={closeMenu}
      ></div>

      <motion.ul
        className={`${styles.navLinksMobile}`}
        initial="hidden"
        animate={menuOpen ? "visible" : "hidden"}
        variants={menuVariants}
        transition={{ type: "tween", duration: 0.3 }}
      >
        
        {links.map((link, i) => (
          <NavLink
            key={link.name}
            name={link.name}
            id={link.id}
            index={i}
            onClick={scrollToSection}
          />
        ))}
      </motion.ul>
    </>
  );
}
