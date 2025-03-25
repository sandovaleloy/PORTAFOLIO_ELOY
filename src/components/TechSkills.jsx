import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./styles/TechSkills.css";
import { useTranslation } from "react-i18next";

const skills = [
  "bxl-javascript",
  "bxl-react",
  "bxl-typescript",
  "bxl-github",
  "bxl-redux",
  "bxl-html5",
  "bxl-css3",
  "bxl-tailwind-css",
  "bxl-bootstrap",
  "bxl-nodejs",
  "bxl-postgresql",
  "bxl-mongodb",
];

const TechSkills = () => {
  const [t] = useTranslation("global");

  return (
    <section className="container_tech">
      <h2>{t("TechSkills.TechSkillsTitle")}</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="tech_swiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="tech_slide">
            <i className={`bx ${skill}`}></i>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TechSkills;
