import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          opacity: {
            value: 0.8,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }     
          },
          line_linked: {
            enable: true
          },
          size: {
            value: 2,
          },
          repulse: {
            enable: true,
            distance: 200
          },
          push: {
            enable: true,
            particles_nb: 4
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          remove: {
            particles_nb: 2
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
