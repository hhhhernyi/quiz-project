import { Routes, Route } from "react-router";
import LandingPage from "./Components/LandingPage/LandingPage";
import InstructionsPage from "./Components/InstructionsPage/InstructionsPage";
import StartGame from "./Components/StartGame/StartGame";
import Iridescence from "./Components/Components/Iridescence/Iridescence";

export default function App() {
  return (
    <>
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        <Route path="/startgame" element={<StartGame />} />
        <Route path='test' element={<Iridescence color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}/>} />
      </Routes>
    </>
  );
}
