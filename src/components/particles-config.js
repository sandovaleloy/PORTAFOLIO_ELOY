const particlesConfig = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 900,
      },
    },

    color: {
      value: "#8eaa9a",
    },

    shape: {
      type: "circle",

      stroke: {
        width: 0,
        color: "#ffffff",
      },

      polygon: {
        nb_sides: 5,
      },
    },

    opacity: {
      value: 0.22,
      random: true,

      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.08,
        sync: false,
      },
    },

    size: {
      value: 2,
      random: true,

      anim: {
        enable: false,
        speed: 4,
        size_min: 0.5,
        sync: false,
      },
    },

    line_linked: {
      enable: true,
      distance: 170,
      color: "#4f8a6a",
      opacity: 0.11,
      width: 1,
    },

    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,

      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },

      onclick: {
        enable: true,
        mode: "push",
      },

      resize: true,
    },

    modes: {
      grab: {
        distance: 180,

        line_linked: {
          opacity: 0.35,
        },
      },

      bubble: {
        distance: 250,
        size: 6,
        duration: 2,
        opacity: 0.8,
        speed: 2,
      },

      repulse: {
        distance: 120,
        duration: 0.3,
      },

      push: {
        particles_nb: 2,
      },

      remove: {
        particles_nb: 2,
      },
    },
  },

  retina_detect: true,
};

export default particlesConfig;