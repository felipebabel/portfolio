import styles from "./LanguageModal.module.css";

export default function LanguageModal({ languageModalOpen, toggleLanguageModal, downloadCV }) {
  return (
    <>
      <div
        id="languageModal"
        className={`${styles.languageModal} ${languageModalOpen ? styles.show : ""}`}
      >
        <h3>Select Language</h3>
        <button className={styles.btn} onClick={() => downloadCV("pt")}>
          Portuguese
        </button>
        <button className={styles.btn} onClick={() => downloadCV("en")}>
          English
        </button>
      </div>
      <div
        id="languageModalOverlay"
        className={`${styles.languageModalOverlay} ${
          languageModalOpen ? styles.show : styles.hideOverlay
        }`}
        onClick={toggleLanguageModal}
      ></div>
    </>
  );
}
