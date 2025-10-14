import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#faf9ff" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#C6B4FF" },
          links: { enable: true, color: "#C6B4FF", opacity: 0.4 },
          move: { enable: true, speed: 1 },
          number: { value: 50 },
          opacity: { value: 0.5 },
          size: { value: 2 },
        },
        detectRetina: true,
      }}
      className="particles-bg"
    />
  );
}
