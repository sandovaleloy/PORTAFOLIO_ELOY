import { useTranslation } from "react-i18next";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import TechSkills from "./components/TechSkills";
import Education from "./components/Education";

function App() {
  const [t, i18n] = useTranslation("global");

  const [theme, setTheme] = useState("dark");
  const [barra, setBarra] = useState("darkBlue");

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark"),
      setBarra(barra === "darkBlue" ? "lightll" : "darkBlue");
  };

  return (
    <section className="App" id={theme}>
      <ParticlesBackground theme={theme}/>
      <div id="navbar" className="div_app">
        <button
          className="btn_es"
          id={theme}
          onClick={() => i18n.changeLanguage("es")}
        >
          <img src="./public/image/españa.png" alt="" />
        </button>
        <button
          className="btn_en"
          id={theme}
          onClick={() => i18n.changeLanguage("en")}
        >
          <img src="./public/image/uk.png" alt="" />
        </button>
      </div>
      <div >
        <Navbar changeTheme={changeTheme} theme={theme} barra={barra} />
      </div>
      <div id="aboutMe">
        <AboutMe />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="Education">
        <Education />
      </div>
      <div id="TechSkills">
        <TechSkills />
      </div>
      <div id="contact">
        <Contact theme={theme} />
      </div>
    </section>
  );
}

export default App;
