import React from "react";
import "./styles/Education.css";
import { useTranslation } from "react-i18next";

const images = [
  {
    url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisBIYAts_YLKq-7hldFwdKimkbvxjSeSfB1pIJHNYGunHyo4_6crlzRdhS97-w7n9cTJj0BWQ6xVozdrmtGiXYFKMb2DMN7a4tkDXs2ZGetu5900zeY6Sr1rmb6-rwJpu9QNNibFvZ5brCs9DDqHCVQn0uD7sm0-esDK197CfY7q2XD2Ysupb_IZPQe8d5/s1600/53972808005952.png",
  },
  {
    url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH1H1MDB-LHl17gcuozlrQOQuT2NxCAyHpic_PY96WDkOSPyZqDzNOQgUVtPQ6CyzFB9OVCPkQDPakM-XnENQMLD6R0kYJ6FNEZkYlRB3EOzM2jZO4hhPVNQuZfUaL7OQRosh3nZXBg0EBHhehVI3gEBqS5VnCQ5OcSnNsuU1g3tOI_-VvZkHto5Vs6uUP/s1600/61194722468868%20(1).png",
  },
  {
    url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-IqNqUibDM-xJgv8ZR5r4Lxz0FnY9d4O7r7GKusSLSytiQ11angpqRlCDsOf3Y5T-t-jMq8ZdXZKwhqrC6YrglsrpWMzagOhRzY7T09BMInQ_lP2XYtjKrLhFcDRmZA83sxiAUL7GDR_BDXXTUxWBA9X5Y20FrmLAwrS4ol3kNQBIGAPHcoSLNl5KADCI/s1600/05075550802118%20(1).png",
  },
  {
    url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqRJXiKTlp-jkCLmkGHJYR7Gnmw-naTqJ-7UV6mpc1IKTPAyW7jBN_Xd9sU0QdfLRMr9mC3fl7B8-V6r7ov9NuIdw-KXIYRZYJfKbuX3nrgJVVufN_kkWcM8xKeBtbs0J6mOXMw_tQzNYExgbN5QPzGAvFE6WGHa_q0A_OllsowJMsBq6hfKMh64MlBg/s668/react.PNG",
  },
];

const Education = () => {
  const [t] = useTranslation("global");

  return (
    <section className="container_education">
      <h2>{t("Education.EducationTitle")}</h2>
      <div className="container_education-div">
        {images.map((image, index) => (
          <a key={index} href={image.url} target="_blank" className="div_image">
            <img src={image.url} alt={`Education-${index}`} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Education;
