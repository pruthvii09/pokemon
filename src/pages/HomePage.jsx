import React, { useContext } from "react";
import { FilterBar, PokemonList } from "../components";
import { PokemonContext } from "../context/PokemonContext";
import Dropdown from "../components/Dropdown";

export const HomePage = () => {
  const { onClickLoadMore, active, setActive } = useContext(PokemonContext);
  console.log(active);
  return (
    <div className="dark:bg-[#111827]">
      <div className="flex  sm:justify-end max-w-[1200px] mx-auto justify-center">
        <Dropdown />
      </div>
      <PokemonList />
      <FilterBar />
      <div className="flex justify-center my-5  max-w-[1200px] mx-auto">
        <button
          className="border-none py-4 px-8 bg-emerald-500 text-white cursor-pointer rounded-xl"
          onClick={onClickLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
