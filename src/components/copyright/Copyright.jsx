import { motion } from "framer-motion";
import styles from "./copyright.module.css";
import { slideInRight } from "./animations";

export default function Copyright() {

const currentYear = new Date().getFullYear();


  return (
    <motion.div className={styles.copyright} {...slideInRight} role="contentinfo" aria-label={`Copyright ${currentYear} Felipe Babel. All Rights Reserved.`}>
      Copyright © {currentYear} Felipe Babel. All Rights Reserved.
    </motion.div>
  );
}
