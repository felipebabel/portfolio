import styles from './skills.module.css';

export default function Skill() {
  return (
    <section className={styles.headerskills}>
      <span id="skills" className={styles.anchor}></span>
      <h2 className={styles.headerskills}>SKILLS</h2>
      <div></div>
      <div className={styles.skills}>
        <div className={styles.card}>
          <i className={`devicon-java-plain ${styles.icon}`}></i>
          <h3 className={styles.cardTitle}>Java</h3>
        </div>

        <div className={styles.card}>
          <i className={`devicon-spring-original ${styles.icon}`}></i>
          <h3 className={styles.cardTitle}>Spring Boot</h3>
        </div>

        <div className={styles.card}>
          <i className={`devicon-spring-original ${styles.icon}`}></i>
          <h3 className={styles.cardTitle}>Spring Cloud</h3>
        </div>

        <div className={styles.card}>
          <i className={`fas fa-database ${styles.icon}`}></i>
          <h3 className={styles.cardTitle}>PL/SQL</h3>
        </div>

        <div className={styles.card}>
          <i className={`devicon-docker-plain ${styles.icon}`}></i>
          <h3 className={styles.cardTitle}>Docker</h3>
        </div>

        <div className={styles.card}>
          <i className={`fas fa-cubes ${styles.icon}`}></i>
          <h3 className={styles.cardTitle}>Microservice</h3>
        </div>

        <div className={styles.card}>
          <i className={`devicon-apachekafka-original ${styles.icon}`}></i>
          <h3 className={styles.cardTitle}>Apache Kafka</h3>
        </div>

        <div className={styles.card}>
          <i className={`fas fa-cogs ${styles.icon}`}></i>
          <h3 className={styles.cardTitle}>CI</h3>
        </div>

        <div className={styles.card}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="AWS logo"
            className={styles.imgIcon}
          />
        </div>
      </div>
    </section>
  );
}
