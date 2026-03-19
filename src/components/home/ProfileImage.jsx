import { motion } from "framer-motion";
import styles from "./Home.module.css";
import { homeVariants } from "./HomeAnimations";

export default function ProfileImage() {
  return (
    <motion.div
      className={styles.image}
      id="imageprofile"
      data-no-glow
      variants={homeVariants.image}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.5 }}
    >
      <img src={`${process.env.PUBLIC_URL}/assets/images/profile.png`} alt="Felipe Babel" />
    </motion.div>
  );
}
