import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/TechnologyType";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

export interface StackCardProps {
  selectedTechnology: ITechnology[];
  setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>;
}

export default function StackCard({
  selectedTechnology,
  setSelectedTechnology,
}: StackCardProps) {
  const handleSelectedTechnology = (selectedTech: ITechnology) => {
    const newSelectedTechnology = selectedTechnology.filter(
      (tech) => tech.id !== selectedTech.id,
    );
    setSelectedTechnology(newSelectedTechnology);
    toast.warning(`${selectedTech.name} is removed!`);
  };
  const handleRemoveAll = () => {
    setSelectedTechnology([]);
    toast.error("Everything has been removed!");
  };
  if (selectedTechnology.length === 0) {
    return (
      <>
        {" "}
        {}
        <div className="card w-96 bg-base-100 shadow-sm mx-5">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Your Stack</h2>
            </div>
            <p className="text-gray-400">No technologies selected yet.</p>
            <div className="border border-dotted border-gray-400 ali rounded-2xl">
              <p className="text-center py-7 text-gray-400">
                Your stack is empty.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {" "}
        {}
        <div className="card w-96 bg-base-100 shadow-sm mx-5">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Your Stack</h2>
            </div>
            <p className="text-gray-400">
              {selectedTechnology.length} technology selected
            </p>
            <div className="">
              {selectedTechnology.map((selectedTech) => (
                <>
                  <div>
                    <div className="card bg-base-100 card-xs shadow-sm">
                      <div className="card-body">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-5">
                            <img
                              src={selectedTech.icon}
                              alt=""
                              className="w-8"
                            />
                            <div>
                              <h3 className="font-bold text-md">
                                {selectedTech.name}
                              </h3>
                              <p className="text-gray-400">
                                {selectedTech.category}
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <button
                              onClick={() =>
                                handleSelectedTechnology(selectedTech)
                              }
                            >
                              <RxCross2 className="text-xl" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <button
              onClick={handleRemoveAll}
              className="btn btn-outline btn-error"
            >
              Remove All
            </button>
          </div>
        </div>
      </>
    );
  }
}
