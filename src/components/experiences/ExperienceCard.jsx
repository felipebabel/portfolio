import { motion } from "framer-motion";
import { fadeInUp, slideLeftRight } from "./animations";
import styles from "./experience.module.css";

export default function ExperienceCard({ exp, idx }) {
  return (
    <motion.div
      className={styles.card}
      variants={fadeInUp}
      initial="hidden"
      animate="visible" 
    >
      <div className={styles.flexContainer}>
        <motion.div className={styles.navLogoPhilips} {...slideLeftRight(-100)}>
          <img src={`${process.env.PUBLIC_URL}${exp.logoSrc}`} alt={exp.logoAlt} />
        </motion.div>

        <motion.div className={styles.text} {...slideLeftRight(100)}>
          <p className={styles.cardParagraph}>{exp.role}</p>
          <p className={styles.cardParagraph}>{exp.period}</p>
          <p className={styles.cardParagraph}>{exp.description}</p>
          {Array.isArray(exp.highlights) && exp.highlights.length > 0 && (
            <>
              <p className={styles.cardParagraph}>Key Highlights:</p>
              <ul className={styles.list}>
                {exp.highlights.map((h, i) => (
                  <li key={i} className={styles.listItem}>
                    <strong>{h.title}</strong> {h.text}
                  </li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
