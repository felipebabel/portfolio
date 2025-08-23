import { useState, useEffect } from "react";
import AboutMe from './components/about-me/AboutMe'; 
import Skill from './components/skill/Skill';  
import Experiences from './components/experiences/Experiences';  
import Copyright from './components/copyright/Copyright';  
import Navbar from "./components/navbar/Navbar";
import HeaderHome from "./components/header-home/HeaderHome";
import LanguageModal from "./components/language-modal/LanguageModal";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'devicon/devicon.min.css';
import 'remixicon/fonts/remixicon.css';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const [config, setConfig] = useState(null);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  const toggleLanguageModal = () => setLanguageModalOpen((v) => !v);
  const closeLanguageModal = () => setLanguageModalOpen(false);

  const downloadCV = (language) => {
    const fileName =
      language === "pt"
        ? "cv_felipe_babel_pt.pdf"
        : "cv_felipe_babel_en.pdf";
    const filePath = `/assets/docs/${fileName}`;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeLanguageModal();
  };

  useEffect(() => {
    if (!languageModalOpen) return;

    const onScroll = () => closeLanguageModal();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [languageModalOpen]);

  const handleMenuLinkClick = () => closeMenu();

  const handleOverlayClick = () => closeMenu();

  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} handleMenuLinkClick={handleMenuLinkClick} handleOverlayClick={handleOverlayClick}/>
      <HeaderHome config={config} toggleLanguageModal={toggleLanguageModal}/>
      <LanguageModal languageModalOpen={languageModalOpen} toggleLanguageModal={toggleLanguageModal} downloadCV={downloadCV}/>
      <AboutMe />
      <Skill />
      <Experiences />
      <Copyright />
    </>
  );
  
}

export default App;
