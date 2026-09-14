import { FaStar } from "react-icons/fa";
import type { ITechnology } from "../../types/TechnologyType";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface TechnologyCardProps {
  tech: ITechnology;
  selectedTechnology: ITechnology[];
  setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>;
}

export default function TechnologyCard({
  tech,
  selectedTechnology,
  setSelectedTechnology,
}: TechnologyCardProps) {
  const handleSelectedTechnology = () => {
    const newTechnology = [...selectedTechnology, tech];
    setSelectedTechnology(newTechnology);
    setAddedToStack(true);
    toast.success(`${tech.name} Added Successfully`);
  };
  const [addedToStack, setAddedToStack] = useState(false);
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <img src={tech.icon} className="w-10" alt="" />
            <div className="badge badge-secondary rounded-2xl">
              {tech.badge}
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">{tech.name}</h2>
          </div>
          <p>{tech.description}</p>
          <div className="flex justify-between items-center">
            <button className="btn">{tech.category}</button>
            <p className="flex justify-center">{tech.difficulty}</p>
            <p className="flex justify-end gap-2 items-center">
              <FaStar className="text-yellow-400" />
              {tech.rating}
            </p>
          </div>
          <div className="mt-6">
            <button
              disabled={addedToStack === true}
              onClick={handleSelectedTechnology}
              className={`btn btn-primary btn-block bg-black ${addedToStack === true ? "bg-gray-300" : ""}`}
            >
              Add to Stack
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
