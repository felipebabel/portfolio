import styles from "./experience.module.css";
import { motion } from "framer-motion";
import { fadeInDown } from "./animations";
import { useMarkdownData } from "../../hooks/useMarkdownData";
import { parseExperiences } from "../../services/parsers";
import ExperienceCard from "./ExperienceCard";

export default function Experiences() {
  const { data: experiencesData } = useMarkdownData("experience", parseExperiences, []);

  return (
    <section className={`container ${styles.experiences}`} id="experiences">
      <span className={styles.anchor}></span>

      <motion.h2 className={styles.headerexperiences} {...fadeInDown}>
        EXPERIENCES
      </motion.h2>

      <div className={styles.experiences}>
        {experiencesData.map((exp, idx) => (
          <ExperienceCard key={exp.id} exp={exp} idx={idx} />
        ))}
      </div>
    </section>
  );
}
