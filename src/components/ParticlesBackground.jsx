import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particles-config";

const ParticlesBackground = ({ theme }) => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  const lightParticlesConfig = {
    ...particlesConfig,
    particles: {
      ...particlesConfig.particles,
      color: {
        value: "#111210", // Cambia el color según el modo claro/oscuro
      },
      shape: {
        type: "circle",
      },
      line_linked: {
        color: "rgb(231, 17, 17)", //no esta funcionando bien pero me sirve
      },
    },
  };

  return (
    <div id={theme}>
      <Particles
        id={theme}
        // options={particlesConfig}
        options={theme === "light" ? lightParticlesConfig : particlesConfig}
        init={particlesInit}
      />
    </div>
  );
};

export default ParticlesBackground;
