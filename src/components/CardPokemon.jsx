import React from "react";
import { Link } from "react-router-dom";
import { primerMayuscula } from "../helper/helper";

export const CardPokemon = ({ pokemon }) => {
  return (
    <div className="max-w-sm w-full dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg py-2">
      <img
        className="rounded-t-lg mx-auto sm:h-40 sm:w-52 object-cover"
        src={pokemon.sprites.other.dream_world.front_default}
        loading="lazy"
        alt=""
      />

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {primerMayuscula(pokemon.name)}
          </h5>
        </a>
        <div className="flex gap-2">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`${"text-xs py-1 px-3 rounded-md text-white"} ${
                type.type.name
              }`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
        <Link
          to={`/pokemon/${pokemon.id}`}
          className="mt-2 flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
        >
          Know more
        </Link>
      </div>
    </div>
  );
};
