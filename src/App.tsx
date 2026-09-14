import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Technologies from "./components/Technologies/Technologies";
import type { ITechnology } from "./types/TechnologyType";

const technologyPromise = async (): Promise<ITechnology[]> => {
  const res = await fetch("../public/technologyData.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
        <Technologies technologyPromise={technologyPromise()}></Technologies>
      </Suspense>
    </>
  );
}

export default App;
