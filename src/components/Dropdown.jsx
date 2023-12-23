import React, { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import pokemonTypes from "../constants/pokemonTypes";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleCheckbox } = useContext(PokemonContext);
  return (
    <div className="relative inline-block text-left py-4">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900"
        >
          Filter
        </button>
      </div>
      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {isOpen && (
          <div className="py-1 overflow-y-auto ">
            {pokemonTypes.map((type) => (
              <div key={type.id} className="flex gap-1 ml-4">
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  name={type.name}
                />
                <label htmlFor={type.name}>{type.name}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
