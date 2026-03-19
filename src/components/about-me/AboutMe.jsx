import { motion } from "framer-motion";
import { fadeInDown, fadeInUpContainer, fadeInUpItem } from "./animation";
import styles from "./aboutme.module.css";
import { useMarkdownData } from "../../hooks/useMarkdownData";
import { parseAbout } from "../../services/parsers";

export default function AboutMe() {
  const { data: paragraphs } = useMarkdownData("about", parseAbout, []);

  return (
    <section className={styles.container}>
      <span className={styles.anchor} id="aboutme"></span>

      <motion.h2
        id="aboutmeTitle"
        className={styles.headeraboutme}
        variants={fadeInDown}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.5 }}
      >
        ABOUT ME
      </motion.h2>

      <motion.div
        className={styles.card}
        data-no-glow
        variants={fadeInUpContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.5 }}
      >
        {paragraphs.map((p, i) => (
          <motion.p key={i} className={styles.cardParagraph} variants={fadeInUpItem}>
            {p}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
