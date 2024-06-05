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
      <section className="container_navbar">
        <div id={barra} className={`initial ${menuNav ? "active" : ""}`}>
          <div className="container_a">
            <a
              onClick={handleClickMenu}
              href="#aboutMe"
              className="container_navbar-h2"
              id={barra}
            >
              <span className="container_navbar-span">
                {t("menuNav.aboutMenu")}
              </span>
            </a>
            <a
              onClick={handleClickMenu}
              href="#projects"
              className="container_navbar-h2"
              id={barra}
            >
              <span className="container_navbar-span">
                {t("menuNav.projectMenu")}
              </span>
            </a>
            <a
              onClick={handleClickMenu}
              href="#TechSkills"
              className="container_navbar-h2"
              id={barra}
            >
              <span className="container_navbar-span">
                {t("TechSkills.TechSkillsTitle")}
              </span>
            </a>
            <a
              onClick={handleClickMenu}
              href="#Education"
              className="container_navbar-h2"
              id={barra}
            >
              <span className="container_navbar-span">
                {t("Education.EducationTitle")}
              </span>
            </a>
            <a
              onClick={handleClickMenu}
              href="#contact"
              className="container_navbar-h2"
              id={barra}
            >
              <span className="container_navbar-span">
                {t("menuNav.contactMenu")}
              </span>
            </a>
            <i className="iconX bx bx-x" onClick={handleClickMenu}></i>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
