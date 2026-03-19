import { motion } from "framer-motion";
import styles from "./Home.module.css";
import { homeVariants } from "./HomeAnimations";

const socials = [
  { href: "https://www.linkedin.com/in/felipebabel/", icon: "ri-linkedin-line", delay: 0.3 },
  { href: "https://github.com/felipebabel", icon: "ri-github-line", delay: 0.4 },
];

export default function HomeHeader({ toggleCV, openToeic }) {
  return (
    <motion.div
      className={styles.home}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={homeVariants.container}
    >
      <motion.h1 className={styles.name} variants={homeVariants.title}>
       {'Felipe Babel'}
      </motion.h1>
      <motion.h1 className={styles.job} variants={homeVariants.title} transition={{ delay: 0.2 }}>
        Back-End Software Engineer
      </motion.h1>

      <motion.div className={styles.infoHome} variants={homeVariants.info}>
        <p>Bachelor's degree in Information Systems (in progress)</p>
        <p>4+ years of professional experience</p>
        <p className={styles.toeic} onClick={openToeic}>
          TOEIC English Certificate
        </p>
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

        {socials.map((s) => (
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
