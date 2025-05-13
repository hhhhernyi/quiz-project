import { Routes, Route } from "react-router";
import LandingPage from "./Components/LandingPage/LandingPage";
import InstructionsPage from "./Components/InstructionsPage/InstructionsPage";
import StartGame from "./Components/StartGame/StartGame";
// import Iridescence from "./Components/Components/Iridescence/Iridescence";
import Particles from "../Reactbits/Particles/Particles";

export default function App() {
  return (
    <>
      <div style={{ width: "100%", height: "500px", position: "relative" }}>
        <Particles
          particleColors={["#c61dc9", "#c61dc9"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.4}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div style={{ width: "100%", height: "400px", position: "relative" }}>
        <Particles
          particleColors={["#c61dc9", "#c61dc9"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.4}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        <Route path="/startgame" element={<StartGame />} />
      </Routes>
    </>
  );
}
