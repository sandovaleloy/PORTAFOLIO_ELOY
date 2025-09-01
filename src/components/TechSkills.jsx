import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./styles/TechSkills.css";
import { useTranslation } from "react-i18next";

const skills = [
  { icon: "bxl-javascript", label: "JavaScript" },
  { icon: "bxl-java", label: "Java" },
  { icon: "bxl-react", label: "React" },
  { icon: "bxl-typescript", label: "TypeScript" },
  { icon: "bxl-nodejs", label: "Node.js" },
  { icon: "bxl-github", label: "GitHub" },
  { icon: "bxl-redux", label: "Redux" },
  { icon: "bxl-tailwind-css", label: "Tailwind" },
  { icon: "bxl-html5", label: "HTML5" },
  { icon: "bxl-bootstrap", label: "Bootstrap" },
  { icon: "bxl-css3", label: "CSS3" },
  { icon: "bxl-mongodb", label: "MongoDB" },
  { icon: "bxl-postgresql", label: "PostgreSQL" },
];

const TechSkills = ({ theme }) => {
  const [t] = useTranslation("global");

  return (
    <section className="container_tech">
      <h2>{t("TechSkills.TechSkillsTitle")}</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5}
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
            <div className={`tech_item ${theme}`}>
              <i className={`bx ${skill.icon}`}></i>
              <p>{skill.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TechSkills;
