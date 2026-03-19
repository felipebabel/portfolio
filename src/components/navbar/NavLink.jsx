import { motion } from "framer-motion";
import { navbarVariants } from "./NavbarAnimations";
import styles from "./Navbar.module.css";

export default function NavLink({ name, id, index, onClick }) {
  const handleClick = () => onClick(id);

  return (
    <motion.li
      className={styles.link}
      custom={index}
      initial="hidden"
      animate="visible"
      variants={navbarVariants.link}
      onClick={handleClick}
    >
      {name}
    </motion.li>
  );
}
