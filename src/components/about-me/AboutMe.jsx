import styles from "./aboutme.module.css";

export default function AboutMe() {
  return (
    <section
      className={styles.container}
      
    >      
    <span id="aboutme" className={styles.anchor}></span>
      <h2 className={styles.headeraboutme}>ABOUT ME</h2>

      <p className={styles.subHeader}></p>

      <div className={styles.aboutme}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.text}>
              <p className={styles.cardParagraph}>
                I am a technology professional focused in healthcare systems
                integrations, with a primary focus on HL7 FHIR, HL7, and JSON.
                My experience revolves around the creation and maintenance of
                both monolithic architectures and microservices to facilitate
                the exchange of health information between systems.
              </p>

              <p className={styles.cardParagraph}>
                I also work with cloud-based solutions, leveraging AWS services
                to build scalable, secure, and high-availability environments
                for healthcare applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
