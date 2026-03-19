import { motion } from "framer-motion";
import styles from "./Home.module.css";
import { homeVariants } from "./HomeAnimations";
import { useMarkdownData } from "../../hooks/useMarkdownData";
import { parseHome } from "../../services/parsers";

export default function HomeHeader({ toggleCV, openToeic }) {
  const { data: home } = useMarkdownData("home", parseHome, {
    name: "",
    title: "",
    info: [],
    socials: [],
  });

  return (
    <motion.div
      className={styles.home}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={homeVariants.container}
    >
      <motion.h1 className={styles.name} variants={homeVariants.title}>
        {home.name}
      </motion.h1>
      <motion.h1 className={styles.job} variants={homeVariants.title} transition={{ delay: 0.2 }}>
        {home.title}
      </motion.h1>

      <motion.div className={styles.infoHome} variants={homeVariants.info}>
        {home.info.map((line, i) => {
          const isToeic = line.toLowerCase().includes("toeic");
          return isToeic ? (
            <p key={i} className={styles.toeic} onClick={openToeic}>
              {line}
            </p>
          ) : (
            <p key={i}>{line}</p>
          );
        })}
      </motion.div>

      <motion.div className={styles.column} variants={homeVariants.button}>
        <div className={styles.socials}>
          <motion.button
            className={styles.btn}
            onClick={toggleCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>

          {home.socials.map((s) => (
            <motion.a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <i className={s.icon}></i>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
