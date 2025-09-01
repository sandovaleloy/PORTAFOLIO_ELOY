import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = ({ changeTheme, theme, barra }) => {
  const [menuNav, setMenuNav] = useState(false);
  const [t] = useTranslation("global");

  const handleClickMenu = () => setMenuNav((v) => !v);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuNav(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="container_nav" role="navigation" aria-label="Main navigation">
      <button
        className="changeMode"
        onClick={changeTheme}
        aria-label="Cambiar tema"
      >
        <i className={`bx bx-${theme === "light" ? "moon" : "sun"}`}></i>
      </button>

      <button
        className="menuToggle"
        onClick={handleClickMenu}
        aria-expanded={menuNav}
        aria-controls="siteMenu"
        aria-label={menuNav ? "Cerrar menú" : "Abrir menú"}
      >
        <i className={`bx ${menuNav ? "bx-x" : "bx-menu"}`}></i>
      </button>

      <div
        className={`backdrop ${menuNav ? "visible" : ""}`}
        onClick={handleClickMenu}
        aria-hidden={!menuNav}
      />

      <aside
        id="siteMenu"
        className={`sidePanel ${menuNav ? "open" : ""}`}
        aria-hidden={!menuNav}
      >
        <div id={barra} className="sideInner">
          <ul className="navList">
            <li>
              <a onClick={handleClickMenu} href="#aboutMe" className="navLink">
                <i className="bx bx-user navIcon" aria-hidden="true" />
                <span>{t("menuNav.aboutMenu")}</span>
              </a>
            </li>
            <li>
              <a onClick={handleClickMenu} href="#projects" className="navLink">
                <i className="bx bx-briefcase navIcon" aria-hidden="true" />
                <span>{t("menuNav.projectMenu")}</span>
              </a>
            </li>
            <li>
              <a onClick={handleClickMenu} href="#TechSkills" className="navLink">
                <i className="bx bx-code-alt navIcon" aria-hidden="true" />
                <span>{t("TechSkills.TechSkillsTitle")}</span>
              </a>
            </li>
            <li>
              <a onClick={handleClickMenu} href="#Education" className="navLink">
                <i className="bx bx-book navIcon" aria-hidden="true" />
                <span>{t("Education.EducationTitle")}</span>
              </a>
            </li>
            <li>
              <a onClick={handleClickMenu} href="#contact" className="navLink">
                <i className="bx bx-mail-send navIcon" aria-hidden="true" />
                <span>{t("menuNav.contactMenu")}</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
