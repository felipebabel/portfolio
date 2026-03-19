import { motion } from "framer-motion";
import styles from "./skills.module.css";
import { useMarkdownData } from "../../hooks/useMarkdownData";
import { parseSkills } from "../../services/parsers";
import SkillCard from "./SkillCard";

export default function Skill() {
  const { data: skills } = useMarkdownData("skills", parseSkills, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const columns = isMobile ? 2 : 4;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = (direction) => ({
    hidden: { x: direction, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: [1.05, 1],
      transition: { duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <section className={styles.headerskills}>
      <span id="skills" className={styles.anchor}></span>

      <motion.h2
        className={styles.headerskills}
        initial={{ y: -50, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: [1.2, 1] }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        SKILLS
      </motion.h2>

      <motion.div
        className={styles.skills}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill, i) => {
          const rowIndex = Math.floor(i / columns);
          const direction = rowIndex % 2 === 0 ? -100 : 100;
          return (
            <motion.div key={i} variants={cardVariants(direction)} className={styles.cardWrapper}>
              <SkillCard {...skill} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
