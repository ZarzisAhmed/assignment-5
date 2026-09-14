import { use, useState } from "react";
import type { ITechnology } from "../../types/TechnologyType";
import TechnologyCard from "./TechnologyCard";
import StackCard from "./StackCard";

export interface TechnologiesProps {
  technologyPromise: Promise<ITechnology[]>;
}

export default function Technologies({ technologyPromise }: TechnologiesProps) {
  const technologies = use(technologyPromise);
  const [selectedTechnology, setSelectedTechnology] = useState<ITechnology[]>(
    [],
  );

  return (
    <>
      <div className="container mx-auto mb-20">
        <h1 className="text-3xl font-bold">
          Explore the{" "}
          <span className="bg-linear-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#64748B] my-3">
          Pick one technology per category to build your ideal stack.
        </p>
        <br />
        <br />
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-3">
              {technologies.map((tech) => (
                <TechnologyCard
                  selectedTechnology={selectedTechnology}
                  setSelectedTechnology={setSelectedTechnology}
                  tech={tech}
                ></TechnologyCard>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <StackCard
              selectedTechnology={selectedTechnology}
              setSelectedTechnology={setSelectedTechnology}
            ></StackCard>
          </div>
        </div>
      </div>
    </>
  );
}
