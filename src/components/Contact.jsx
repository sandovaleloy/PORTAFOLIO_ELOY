import "./styles/Contact.css";
import { useTranslation } from "react-i18next";

const Contact = ({ theme }) => {
  const [t] = useTranslation("global");

  return (
    <section className="containerContact_principal">
      <h2>{t("Contact.ContactTitle")}</h2>

      <section className="container_contact">
        <section className="container_contact">
          <a
            id={theme}
            href="https://www.linkedin.com/in/eloy-sandoval-bba76115b/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon_container">
              <i className="iconos bx bxl-linkedin"></i>
              <span className="spanIconos">LinkedIn</span>
            </div>
          </a>
          <a id={theme} href="https://github.com/Eloysandoval10" target="_blank" rel="noreferrer">
            <div className="icon_container">
              <i className="iconos bx bxl-github"></i>
              <span className="spanIconos">GitHub</span>
            </div>
          </a>
          <a id={theme} href="mailto:eloysandoval10@hotmail.com" target="_blank" rel="noreferrer">
            <div className="icon_container">
              <i className="iconos bx bxs-envelope"></i>
              <span className="spanIconos">Email</span>
            </div>
          </a>
          <a id={theme} href="tel:+573023352133" target="_blank" rel="noreferrer">
            <div className="icon_container">
              <i className="iconos bx bx-phone"></i>
              <span className="spanIconos">Phone</span>
            </div>
          </a>
        </section>
      </section>

      <form 
        className="contact_form"
        action="https://formspree.io/f/mgvlzvpp" 
        method="POST"
      >
        <p>{t("Contact.pharagraphForm")}</p>
        <input type="text" name="name" placeholder={t("Contact.placeName")} required />
        <input type="email" name="email" placeholder={t("Contact.placeEmail")} required />
        <textarea name="message" placeholder={t("Contact.placeMessage")} required></textarea>
        <button type="submit">{t("Contact.buttonSend")}</button>
      </form>
    </section>
  );
};

export default Contact;
