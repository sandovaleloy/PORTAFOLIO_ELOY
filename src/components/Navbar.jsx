import React, { useState } from "react";
import "./styles/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = ({ changeTheme, theme, barra }) => {
  const [menuNav, setMenuNav] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleClickMenu = () => {
    setMenuNav(!menuNav);
  };

  return (
    <nav className="container_nav">
      <i
        id={theme}
        onClick={changeTheme}
        className={`changeMode bx bx-${theme === "light" ? "moon" : "sun"}`}
      ></i>
      {menuNav ? (
        <i id={theme} onClick={handleClickMenu} className="icon bx bx-menu"></i>
      ) : (
        <i
          id={theme}
          onClick={handleClickMenu}
          className="icon bx bx-menu-alt-left"
        ></i>
      )}
      <section className="conatiner_navbar">
        <div id={barra} className={`initial ${menuNav ? "active" : ""}`}>
          <div className="container_a">
            <a
              onClick={handleClickMenu}
              href="#aboutMe"
              className="conatiner_navbar-h2"
              id={barra}
            >
              {t("menuNav.aboutMenu")}
            </a>
            <a
              onClick={handleClickMenu}
              href="#projects"
              className="conatiner_navbar-h2"
              id={barra}
            >
              {t("menuNav.projectMenu")}
            </a>
            <a
              onClick={handleClickMenu}
              href="#TechSkills"
              className="conatiner_navbar-h2"
              id={barra}
            >
              {t("TechSkills.TechSkillsTitle")}
            </a>
            <a
              onClick={handleClickMenu}
              href="#Education"
              className="conatiner_navbar-h2"
              id={barra}
            >
              {t("Education.EducationTitle")}
            </a>
            <a
              onClick={handleClickMenu}
              href="#contact"
              className="conatiner_navbar-h2"
              id={barra}
            >
              {t("menuNav.contactMenu")}
            </a>
            <i className="iconX bx bx-x" onClick={handleClickMenu}></i>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
