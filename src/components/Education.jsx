import React from "react";
import "./styles/Education.css";
import { useTranslation } from "react-i18next";

const Education = () => {
    const [t, i18n] = useTranslation("global")
  return (
    <section className="container_education">
        <h2>{t("Education.EducationTitle")}</h2>
      <div className="container_education-div">
        <div className="div_image">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgE8MPN-xX5meO9WGdngSH-IlUGRf1YhV7TSAL3ftCuLzwObAgmYzLM6JwFjzO6yaBW1hxFu5QDyGZYo6YtsF8WD0NbPLfXmbQJCTEs108BOy2JeXZQegMY88rCLMU9ImcQCRyTkA3PRcc66zrkMwmS_IPkRWk3v7-aN0RFEuBgbMHKx6YaiaruNnrpg/s672/reactSi.PNG" alt="" />
        </div>
        <div className="div_image">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqRJXiKTlp-jkCLmkGHJYR7Gnmw-naTqJ-7UV6mpc1IKTPAyW7jBN_Xd9sU0QdfLRMr9mC3fl7B8-V6r7ov9NuIdw-KXIYRZYJfKbuX3nrgJVVufN_kkWcM8xKeBtbs0J6mOXMw_tQzNYExgbN5QPzGAvFE6WGHa_q0A_OllsowJMsBq6hfKMh64MlBg/s668/react.PNG" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Education;
