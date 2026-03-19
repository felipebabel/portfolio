import { motion } from "framer-motion";
import styles from "./Home.module.css";

export default function LanguageModal({ isOpen, toggle, downloadCV }) {
  return (
    <>
      <div className={`${styles.languageModal} ${isOpen ? styles.show : ""}`}>
        <h3>Select Language</h3>
        <motion.button
          className={styles.btn}
          onClick={() => downloadCV("pt")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          Portuguese
        </motion.button>
        <motion.button
          className={styles.btn}
          onClick={() => downloadCV("en")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          English
        </motion.button>
      </div>

      <div
        className={`${styles.languageModalOverlay} ${isOpen ? styles.show : styles.hideOverlay}`}
        onClick={toggle}
      ></div>
    </>
  );
}
