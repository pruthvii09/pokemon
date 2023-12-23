import React, { useContext, useEffect, useState } from "react";
import { FilterBar, PokemonList } from "../components";
import { PokemonContext } from "../context/PokemonContext";
import Dropdown from "../components/Dropdown";

export const HomePage = () => {
  return (
    <div className="dark:bg-[#111827]">
      <div className="flex  sm:justify-end max-w-[1200px] mx-auto justify-center">
        <Dropdown />
      </div>
      <PokemonList />
      <FilterBar />
      <div className="flex justify-center my-5 text-white  max-w-[1200px] mx-auto">
        Loading...
      </div>
    </div>
  );
};
