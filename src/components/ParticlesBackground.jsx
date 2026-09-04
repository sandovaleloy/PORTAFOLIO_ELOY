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

      number: {
        ...particlesConfig.particles.number,
        value: 35,
      },

      color: {
        value: "#4f8a6a",
      },

      opacity: {
        ...particlesConfig.particles.opacity,
        value: 0.16,
      },

      size: {
        ...particlesConfig.particles.size,
        value: 2,
      },

      line_linked: {
        ...particlesConfig.particles.line_linked,
        color: "#4f8a6a",
        opacity: 0.08,
        distance: 160,
        width: 1,
      },

      move: {
        ...particlesConfig.particles.move,
        speed: 0.7,
      },
    },

    interactivity: {
      ...particlesConfig.interactivity,

      modes: {
        ...particlesConfig.interactivity.modes,

        grab: {
          ...particlesConfig.interactivity.modes.grab,
          distance: 160,

          line_linked: {
            opacity: 0.2,
          },
        },
      },
    },
  };

  const darkParticlesConfig = {
    ...particlesConfig,

    particles: {
      ...particlesConfig.particles,

      number: {
        ...particlesConfig.particles.number,
        value: 40,
      },

      color: {
        value: "#8eaa9a",
      },

      opacity: {
        ...particlesConfig.particles.opacity,
        value: 0.22,
      },

      size: {
        ...particlesConfig.particles.size,
        value: 2,
      },

      line_linked: {
        ...particlesConfig.particles.line_linked,
        color: "#4f8a6a",
        opacity: 0.11,
        distance: 170,
        width: 1,
      },

      move: {
        ...particlesConfig.particles.move,
        speed: 0.8,
      },
    },

    interactivity: {
      ...particlesConfig.interactivity,

      modes: {
        ...particlesConfig.interactivity.modes,

        grab: {
          ...particlesConfig.interactivity.modes.grab,
          distance: 180,

          line_linked: {
            opacity: 0.35,
          },
        },
      },
    },
  };

  return (
    <div
      className="particles-layer"
      aria-hidden="true"
    >
      <Particles
        id={`particles-${theme}`}
        options={
          theme === "light"
            ? lightParticlesConfig
            : darkParticlesConfig
        }
        init={particlesInit}
      />
    </div>
  );
};

export default ParticlesBackground;