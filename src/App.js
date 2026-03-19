import { useEffect, useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutMe from "./components/about-me/AboutMe";
import Skill from "./components/skill/Skill";
import Projects from "./components/projects/Projects";
import Experiences from "./components/experiences/Experiences";
import Copyright from "./components/copyright/Copyright";
import Loader from "./components/loader/Loader";
import MouseGlow from "./components/background/MouseGlow";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "devicon/devicon.min.css";
import "remixicon/fonts/remixicon.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  let progressValue = 0;

  const interval = setInterval(() => {
    if (progressValue < 70) {
      progressValue += 9;
    } else if (progressValue < 95) {
      progressValue += 2;
    }

    if (progressValue >= 95) {
      progressValue = 100;
      setProgress(progressValue);
      clearInterval(interval);
      setTimeout(() => {
        setLoading(false);
      }, 300);

      return;
    }

    setProgress(progressValue);
  }, 80);

  return () => clearInterval(interval);
}, []);



  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  if (loading) {
    return <Loader progress={progress} />;
  }

  return (
    <>
      <MouseGlow />
      <Navbar
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        handleMenuLinkClick={closeMenu}
        handleOverlayClick={closeMenu}
      />

      <Home />
      <AboutMe />
      <Skill />
      <Projects />
      <Experiences />
      <Copyright />
    </>
  );
}

export default App;
