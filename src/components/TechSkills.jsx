import React from "react";
import "./styles/TechSkills.css";
import { useTranslation } from "react-i18next";

const TechSkills = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section className="container_tech">
      <h2>{t("TechSkills.TechSkillsTitle")}</h2>
      <div className="container_tech-div">
        <div className="div2222">
          <div className="div22">
            <i className="bx bxl-javascript"></i>
            <i className="bx bxl-react"></i>
            <i className="bx bxl-typescript"></i>
          </div>
          <div className="div22">
            <i className="bx bxl-github"></i>
            <i className="bx bxl-redux"></i>
            <i className="bx bxl-html5"></i>
          </div>
        </div>

        <div className="div2222">
          <div className="div22">
            <i className="bx bxl-css3"></i>
            <i className="bx bxl-tailwind-css"></i>
            <i className="bx bxl-bootstrap"></i>
          </div>
          <div className="div22">
            <i className="bx bxl-nodejs"></i>
            <i className="bx bxl-postgresql"></i>
            <i className="bx bxl-mongodb"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
