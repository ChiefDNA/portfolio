import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";   // 👈 lightweight engine preset

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    // loads the default shapes/movers/interactivity needed to draw anything
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}                     // 👈 tell the wrapper to initialize the engine
      options={{
        background: { color: { value: "#faf9ff" } },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#C6B4FF" },
          links: {
            enable: true,
            color: "#C6B4FF",
            opacity: 0.3,
            distance: 150,
          },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 100 } },
        },
        detectRetina: true,
      }}
      className="particles-bg"
    />
  );
}
