import styles from './copyright.module.css';

export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.copyright}>
      Copyright © {currentYear} Felipe Babel. All Rights Reserved.
    </div>
  );
}
