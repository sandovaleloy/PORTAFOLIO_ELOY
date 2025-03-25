import React from "react";
import "./styles/Project.css";
import { useTranslation } from "react-i18next";

const Project = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <article className="container_project">
      <h2>{t("Project.ProyectTitle")}</h2>
      <div className="contenedor">
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

        {/* <a href="https://club-sampdoria-becerril.netlify.app/" target="_blank" className="figure">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtAZFMgLHyoO5WiQUdwsRZ-1XDS-Tg2WdJ-NIgVuBQ3OSRTEpf9Bdt2fDivbZJJ2Xg-YHNcsp5QR82pLvPoRScxHWkGTfAAGow1rwfdMulbQheExqPt9ha_7yUDIbWu4zF2dY2iNO7CERbR_9S0pwrLgAGaP_uSajDuXGsxdgNVfVU43OIEenNWjodMA/s1328/sampdoria.PNG"
            alt=""
          />

          <div className="capa">
            <h3>{t("Project.Sampdoria")}</h3>
            <p>{t("Project.DescriptionSampdoria")}</p>
            <div className="div-icoon3">
              <i className="icoon_project bx bxl-react"></i>
              <i className="icoon_project bx bxl-css3"></i>
              <i className="icoon_project bx bxl-html5"></i>
              <i className="icoon_project bx bxl-javascript"></i>
            </div>
          </div>
        </a> */}

        <a
          href="https://memories-card-historic.netlify.app/"
          target="_blank"
          className="figure"
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPd6EWhvC0u2RyCem9aZnm1xWRdEkCXF51b6wFeSZUhFgKlqvIE5cjfRnOU0e7YNNN4LbCF_kW2ZNjN39fI6ptiMof7dYAvD53sr1YuzZhqiOIVBgKekvIh2zyQgVCwfNRSTfZgXUxTisi2cXT2KIjQjtT4tDrItiiwK5FQ8yrpZ4h4XeCwM-4MLk62w/s1134/memories2.PNG"
            alt=""
          />

          <div className="capa">
            <h3>{t("Project.MemoriesCard")}</h3>
            <p>{t("Project.DescriptionCard")}</p>
            <div className="div-icoon4">
              <i className="icoon_project bx bxl-react"></i>
              <i className="icoon_project bx bxl-css3"></i>
              <i className="icoon_project bx bxl-html5"></i>
              <i className="icoon_project bx bxl-javascript"></i>
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

        <a
          href="https://users-generation.netlify.app/"
          target="_blank"
          className="figure"
        >
          <img
            // src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYpGzZcnh9cJXfipDrClaYBiGO5qnWWLFOPgPMdrfK5JZT9gXPPmmCKLM4FbeGdxLS01dfBoqHljrrRKd47k1sE7HRZYehrdbdFQDvTk3fp9QfHpbkrIAvoxztQeEGmvB_h769sHytBqCSDLAjmkV4mi1jERmZBf1KFHcqxQy2CmgKFSj46q03Ei5aS7kq/s856/usersGeneretion.PNG"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKPcuwvwE7mp4zaFDnkcn1wZWI6_la1oUyDhFGkwckQZ9Ngn1C-wbTfDS6yNugA-7CQ_iKPcXhwbYXqsxx3ERZny0xWNp_ywxaQcAkmUMw7T3gYKGqFJElSrunqO2xFTS7jaaj5aGCIf3oyMW7ANeScvVFDSS1N4bJ_4J0N_DeO91l6cuzip31gUiuEA-N/s1010/users.2.PNG"
            alt=""
          />
          <div className="capa">
            <h3>{t("Project.users")}</h3>
            <p>{t("Project.DescriptionUsers")}</p>
            <div className="div-icoon6">
              <i className="icoon_project bx bxl-react"></i>
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
