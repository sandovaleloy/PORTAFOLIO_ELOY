import "./styles/Project.css";
import { useTranslation } from "react-i18next";

const Project = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <article className="container_project">
      <h2>{t("Project.ProyectTitle")}</h2>
      <div className="contenedor">
        <a
          href="https://project-management-app-coae.vercel.app/login"
          target="_blank"
          className="figure"
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheseQiUvPi9Dwo-GbV_mASPsSzC59vKTmFh9Q4zoDPbOrjyBsIUrgouAgDm3mVwNmzcZN4lOY2IYmAU_K04j-wHTNO_oTnZXiLOVzfBpB-MvpHYHhvDgS3R32c6Bt_hYJWvbD6IYTfD4QPGToatmS5A8YpD0Y2o40cW3s12aZE2L1J3bCt61sr61Ba7nAe/s1360/Screenshot_2026-09-04_12-45-27.png"
            alt=""
          />
          <div className="capa">
            <h3>{t("Project.Tasks")}</h3>
            <p>{t("Project.DescriptionTasks")}</p>
            <div className="div-icoon6">
              <i className="icoon_project devicon-nextjs-plain"></i>
              <i className="icoon_project bx bxl-typescript"></i>
              <i className="icoon_project bx bxl-tailwind-css"></i>
              <i className="icoon_project devicon-prisma-original"></i>
              <i className="icoon_project devicon-postgresql-plain"></i>
            </div>
          </div>
        </a>

        <a
          href="https://www.somosawaq.org/"
          target="_blank"
          className="figure"
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDV3byBMsfNNTAG_VYcESqm94gto_MnmF-hKvLiDjvrkZpMEWxN75wN_v53FAkruKAbKGvrqJTMcd_kapTSh_xy7-HUNwEccSkqrU-FsKUSp_C5gkOV6_FKPKI2cx4SPf4caTviOafpsW2efnRCrhtOtC_yzt_BRPdd4iB1B8wKIs8TARLeQ6kjQ5iMJY0/s1338/Captura%20de%20pantalla_2025-08-31_22-43-33.png"
            alt=""
          />
          <div className="qq">
            <div className="capa">
              <h3>{t("Project.somosawaq")}</h3>
              <p>{t("Project.DescriptionSomosawaq")}</p>
              <div className="div-icoon1">
                <i className="icoon_project bx bxl-github"></i>
                <i className="icoon_project bx bxl-react"></i>
                <i className="icoon_project bx bxl-typescript"></i>
                <i className="icoon_project bx bxl-tailwind-css"></i>
                <i className="icoon_project bx bxl-javascript"></i>
              </div>
            </div>
          </div>
        </a><a
          href="https://congreso.somosawaq.org/"
          target="_blank"
          className="figure"
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtxhGQyMTPdI-gtGd-8HRAprEsXI76egmCwyirHD_FnJvt8bnAbLiXA0k0_A6hDMZ5rjWgx8Fo_ClTYQKc5hRq0KYlpBgvWGH-Qj8kYrqzZKfT50ZKSPPtC8QyPWrYIliT9JrZ-GDOfOZExS2S7ckPhCcV2xq_lsWo560dLE39q_JPjd1Ouc3JOrnnZGt2/s1330/Captura%20de%20pantalla_2025-08-31_22-44-04.png"
            alt=""
          />
          <div className="qq">
            <div className="capa">
              <h3>{t("Project.segundoCongreso")}</h3>
              <p>{t("Project.DescriptionCongreso")}</p>
              <div className="div-icoon1">
                <i className="icoon_project bx bxl-github"></i>
                <i className="icoon_project bx bxl-react"></i>
                <i className="icoon_project bx bxl-typescript"></i>
                <i className="icoon_project bx bxl-tailwind-css"></i>
                <i className="icoon_project bx bxl-javascript"></i>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://wheather-app-location.netlify.app/"
          target="_blanñ"
          className="figure"
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSC-N51tDanYHSMLGYl7E1KPYLlfv2oXgfmUX0PG-hfUQMOJuTXYRU1Giy2740XgLWOdMTnLRi8X53MCDJC8l47QDkx9X_ygJYptlBeZdgnS9VgxSBVrN-bHxz9vUj12qwcXzYT0ujOLDLUQURjNesb_edRuzYzya3mpQxLuvmxrmnEK1ty77hVbCipQ/s1149/Captura.PNG"
            alt=""
          />
          <div className="capa">
            <h3>{t("Project.WheaterApp")}</h3>
            <p>{t("Project.DescriptionWeather")}</p>
            <div className="div-icoon2">
              <i className="icoon_project bx bxl-react"></i>
              <i className="icoon_project bx bxl-css3"></i>
              <i className="icoon_project bx bxl-html5"></i>
              <i className="icoon_project bx bxl-javascript"></i>
            </div>
          </div>
        </a>

        <a
          href="https://ecommerce-electronic-shop.netlify.app/"
          target="_blank"
          className="figure"
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiaBbRA8V11WB9N3Z5e1zdihzrCNPW8T2mNOdtmOrDdJAAnOG5lC0tstc78GD8_KlzWEVe8JUz5Z0tjzRdRq191xV_WaLmBJYone1p5jTSo1yzFPYb1mLpZLUeODdrcUOGkkyPbDvf_QI3snfok7roTIkW89PyQL-LndHYWdlp4L6l6NETbnuQEnjAxg/s1262/ecomerce.PNG"
            alt=""
          />
          <div className="qq">
            <div className="capa">
              <h3>{t("Project.Ecommerce")}</h3>
              <p>{t("Project.DescriptionEcommerce")}</p>
              <div className="div-icoon1">
                <i className="icoon_project bx bxl-react"></i>
                <i className="icoon_project bx bxl-redux"></i>
                <i className="icoon_project bx bxl-css3"></i>
                <i className="icoon_project bx bxl-html5"></i>
                <i className="icoon_project bx bxl-javascript"></i>
              </div>
            </div>
          </div>
        </a>
        
        <a
          href="https://pokedex-actual.netlify.app/"
          target="_blank"
          className="figure"
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKA1oQrLMrjW9TdNv5zUk8qITzBuIVcriAZFEFW0EzgOLdqDiOo7Ad862S-Vac1kgUZjz-vfcqdaWZymYE718MElCvk8yrkbF4uCDYnRfF_QRyIRjr6wtAZbBcsT6lb7fe6eaganPHY03vzXaEGmjTKmVjJjd0_mrQDw7eM8uUVGKoeB-8Nt-bPIDYcQ/s1339/poke.PNG"
            alt=""
          />

          <div className="capa">
            <h3>{t("Project.Pokedex")}</h3>
            <p>{t("Project.DescriptionPokedex")}</p>
            <div className="div-icoon5">
              <i className="icoon_project bx bxl-react"></i>
              <i className="icoon_project bx bxl-redux"></i>
              <i className="icoon_project bx bxl-css3"></i>
              <i className="icoon_project bx bxl-html5"></i>
              <i className="icoon_project bx bxl-javascript"></i>
            </div>
          </div>
        </a>

      </div>
    </article>
  );
};

export default Project;
