import { useLanguageModal } from "./useLanguageModal";
import HomeHeader from "./HomeHeader";
import ProfileImage from "./ProfileImage";
import LanguageModal from "./LanguageModal";
import styles from "./Home.module.css";

export default function Home() {
  const { isOpen, toggle, downloadCV } = useLanguageModal();

  const openToeic = () =>
    window.open(`${process.env.PUBLIC_URL}/assets/images/english_toeic.png`, "_blank");

  return (
    <header className={styles.container}>
      <div className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <HomeHeader toggleCV={toggle} openToeic={openToeic} />
        </div>
        <div className={styles.profileImage}>
          <ProfileImage />
        </div>
      </div>
      <LanguageModal isOpen={isOpen} toggle={toggle} downloadCV={downloadCV} />
    </header>
  );
}
