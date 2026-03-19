import { motion } from "framer-motion";
import styles from "./projects.module.css";
import { useMarkdownData } from "../../hooks/useMarkdownData";
import { parseProjects } from "../../services/parsers";
import { fadeInDown, fadeInProject } from "./animations";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const { data: projects } = useMarkdownData("projects", parseProjects, []);

  return (
    <section className={styles.projectsSection}>
      <span id="projects" className={styles.anchor}></span>

      <motion.h2 className={styles.headerProjects} {...fadeInDown}>
        PROJECTS
      </motion.h2>

      <div className={styles.projectsGrid}>
        {projects.map((project, i) => (
          <motion.div key={i} className={styles.projectCard} {...fadeInProject}>
            <img
              src={`${process.env.PUBLIC_URL}${project.image}`}
              alt={project.title}
              className={styles.projectImage}
            />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectButton}
            >
              <FiExternalLink size={20} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
