import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ menuOpen, toggleMenu, closeMenu }) {
  const handleMenuLinkClick = () => closeMenu();
  const handleOverlayClick = () => closeMenu();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a href="#top">
          <img src="/assets/images/logo_bold.jpg" alt="Logo Felipe Babel" />
        </a>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <li className={styles.link} onClick={handleMenuLinkClick}>
          <a href="#top">Home</a>
        </li>
        <li className={styles.link} onClick={handleMenuLinkClick}>
          <a href="#aboutme">About me</a>
        </li>
        <li className={styles.link} onClick={handleMenuLinkClick}>
          <a href="#skills">Skills</a>
        </li>
        <li className={styles.link} onClick={handleMenuLinkClick}>
          <a href="#experiences">Experiences</a>
        </li>
      </ul>

      <button className={styles.btnMenu} onClick={toggleMenu} aria-label="Toggle menu">
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.showOverlay : styles.hideOverlay}`}
        onClick={handleOverlayClick}
      ></div>

      <ul className={`${styles.navLinksMobile} ${menuOpen ? styles.showMenu : styles.hideMenu}`}>
        <button className={styles.btnClose} onClick={closeMenu} aria-label="Close menu">
          <i className="ri-close-line"></i>
        </button>
        <li className={styles.linkMenu} onClick={handleMenuLinkClick}>
          <a href="#top">Home</a>
        </li>
        <li className={styles.linkMenu} onClick={handleMenuLinkClick}>
          <a href="#aboutme">About me</a>
        </li>
        <li className={styles.linkMenu} onClick={handleMenuLinkClick}>
          <a href="#skills">Skills</a>
        </li>
        <li className={styles.linkMenu} onClick={handleMenuLinkClick}>
          <a href="#experiences">Experiences</a>
        </li>
      </ul>
    </nav>
  );
}
