const particlesConfig = {
  particles: {
    number: {
      value: 50, // Cantidad moderada (ni vacío ni saturado)
      density: {
        enable: true,
        value_area: 900,
      },
    },
    color: {
      value: "#4A90E2", // Azul profesional confiable
    },
    shape: {
      type: "circle", // Más elegante que "square"
      stroke: {
        width: 0,
        color: "#ffffff",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#4A90E2", // 🔹 Antes rojo, ahora azul elegante
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.2, // Movimiento suave
      direction: "none",
      random: false,
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
        mode: "grab", // Más elegante que "repulse"
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
          opacity: 0.5, // 🔹 Sutil pero visible en azul
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
        particles_nb: 3,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default particlesConfig;
