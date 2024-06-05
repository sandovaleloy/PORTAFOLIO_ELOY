import React from "react";
import "./styles/Contact.css";
import { useTranslation } from "react-i18next";

const Contact = ({ theme }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <section className="containerContact_principal">
      <h2>{t("Contact.ContactTitle")}</h2>
      <section className="container_contact">
        <a id={theme} href="tel:+573023352133" target="_blank">
          <i className="iconos bx bx-phone"></i>
        </a>
        <a
          id={theme}
          href="https://www.linkedin.com/in/eloy-sandoval-bba76115b/"
          target="_blank"
        >
          <i className="iconos bx bxl-linkedin"></i>
        </a>
        <a id={theme} href="https://github.com/Eloysandoval10" target="_blank">
          <i className="iconos bx bxl-github"></i>
        </a>
        <a id={theme} href="mailto:eloysandoval10@hotmail.com" target="_blank">
          <i className="iconos bx bxs-envelope"></i>
        </a>
        <a
          id={theme}
          href="https://www.instagram.com/eloy_sandoval82/"
          target="_blank"
        >
          <i className="iconos bx bxl-instagram-alt"></i>
        </a>
        <a
          id={theme}
          href="https://www.facebook.com/eloy.sandoval.7564/"
          target="_blank"
        >
          <i className="iconos bx bxl-facebook-square"></i>
        </a>
      </section>
    </section>
  );
};

export default Contact;
