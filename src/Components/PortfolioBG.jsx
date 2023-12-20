import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function PraticlesBG() {
  async function loadParticles(main) {
    await loadFull(main);
  }

  return (
    <div className="App">
      <Particles id="tsparticules">init ={loadParticles}</Particles>
    </div>
  );
}
