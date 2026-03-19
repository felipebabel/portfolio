import styles from "./skills.module.css";

export default function SkillCard({ icon, img, name }) {
  return (
    <div className={styles.card}>
      {icon ? (
        <i className={`${icon} ${styles.icon}`}></i>
      ) : (
        <img src={img} alt={name} className={styles.imgIcon} />
      )}
      {name && <h3 className={styles.cardTitle}>{name}</h3>}
    </div>
  );
}
