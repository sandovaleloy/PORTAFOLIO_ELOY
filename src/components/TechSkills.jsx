import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./styles/TechSkills.css";
import { useTranslation } from "react-i18next";

const skills = [
  { icon: "bxl-javascript", label: "JavaScript", type: "bx" },
  { icon: "bxl-typescript", label: "TypeScript", type: "bx" },
  { icon: "bxl-react", label: "React", type: "bx" },
  { icon: "devicon-nextjs-plain", label: "Next.js", type: "devicon" },
  { icon: "bxl-nodejs", label: "Node.js", type: "bx" },
  { icon: "bxl-java", label: "Java", type: "bx" },
  { icon: "bxl-tailwind-css", label: "Tailwind CSS", type: "bx" },
  { icon: "bxl-postgresql", label: "PostgreSQL", type: "bx" },
  { icon: "devicon-prisma-original", label: "Prisma", type: "devicon" },
  { icon: "bxl-mongodb", label: "MongoDB", type: "bx" },
  { icon: "bxl-redux", label: "Redux", type: "bx" },
  { icon: "devicon-git-plain", label: "Git", type: "devicon" },
  { icon: "bxl-github", label: "GitHub", type: "bx" },
  { icon: "bxl-html5", label: "HTML5", type: "bx" },
  { icon: "bxl-css3", label: "CSS3", type: "bx" },
  { icon: "bxl-bootstrap", label: "Bootstrap", type: "bx" },
  { icon: "devicon-linux-plain", label: "Linux", type: "devicon" },
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
              <i className={`${skill.type} ${skill.icon}`}></i>
              <p>{skill.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TechSkills;
