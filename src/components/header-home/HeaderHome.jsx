import styles from "./HeaderHome.module.css";

export default function HeaderHome({ config, toggleLanguageModal }) {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.home}>
          <h1 className={styles.name}>Felipe Babel</h1>
          <h1 className={styles.job}>Back-End Software Engineer</h1>
          <div className={styles.infoHome}>
            <p>Bachelor's degree in Information Systems</p>
            <p>3 years of professional experience</p>
            <p className={styles.toeic}   onClick={() => window.open(`${process.env.PUBLIC_URL}/assets/images/english_toeic.png`, "_blank")}>TOEIC English Certificate</p>
          </div>
          <div className={styles.column}>
            <div className={styles.socials}>
              <button className={styles.btn} onClick={toggleLanguageModal}>Download CV</button>
              <a href="https://www.linkedin.com/in/felipebabel/" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-line"></i>
              </a>
              <a href="https://github.com/felipebabel" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image} id="imageprofile">
        <img src={`${process.env.PUBLIC_URL}/assets/images/profile.png`} alt="Felipe Babel" />
      </div>
    </header>
  );
}
