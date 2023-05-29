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
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip_enHIOPMZ1J4dY-1VddORkvJCAsSTugdonlVnVy8YBq2Yoac9H_smxe7gJbIe0brwTZc8o_mBUZrarjtrDEFdFE-kt_k9tjuzX_5dlLHgiFXk2fCuIAbREg_QVhr-On7ZLQyM0dtDESiVOfHMryxyGSJDWedBQKoypmmz82GZL2gMQsEnJ4eEr-aHA/s275/espa%C3%B1a.png" alt="" />
        </button>
        <button
          className="btn_en"
          id={theme}
          onClick={() => i18n.changeLanguage("en")}
        >
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMKIeLfA8SvzY09OMmQMO9bmqigW-51lx92Bs-RDECsmex9feZTYJwA2G8_Z7xtlwkYZyfe87M43SFkBeZg_8SjOBf5XuFaw5Vv3IHy5mFZb-q-LH6OCnqAyzbOS4biJKfN2s7qt7LJZYsOOYh-v4oGg8On8UCG0qcA_nM0NgyyzdHFCNs30C3LBXqYA/s290/uk.png" alt="" />
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
