import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { navbarVariants } from "./NavbarAnimations";
import { navbarLinks } from "./navbarLinks";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import HamburgerButton from "./HamburgerButton";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

const scrollToSection = (id) => {
  if (id === "top") {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }
    closeMenu();
  };

  return (
    <nav className={styles.nav}>
      <motion.div
        className={styles.logo}
        initial="hidden"
        animate="visible"
        variants={navbarVariants.logo}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo_bold.jpg`}
          alt="Logo Felipe Babel"
          onClick={() => scrollToSection("top")}
          style={{ cursor: "pointer" }}
        />
      </motion.div>

      <ul className={styles.navLinks}>
        {navbarLinks.map((link, i) => (
          <NavLink
            key={link.name}
            name={link.name}
            id={link.id}
            index={i}
            onClick={scrollToSection}
          />
        ))}
      </ul>

      <HamburgerButton menuOpen={menuOpen} toggleMenu={toggleMenu} />


      <MobileMenu
        menuOpen={menuOpen}
        closeMenu={closeMenu}
        links={navbarLinks}
        scrollToSection={scrollToSection}
      />
    </nav>
  );
}
