import { use } from "react";
import type { ITechnology } from "../../types/TechnologyType";
import TechnologyCard from "./TechnologyCard";

export interface TechnologiesProps {
  technologyPromise: Promise<ITechnology[]>;
}

export default function Technologies({ technologyPromise }: TechnologiesProps) {
  const technologies = use(technologyPromise);
  return (
    <>
      <div className="container mx-auto">
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
        <div className="grid grid-cols-3 gap-5">
          {technologies.map((tech) => (
            <TechnologyCard tech={tech}></TechnologyCard>
          ))}
        </div>
      </div>
    </>
  );
}
