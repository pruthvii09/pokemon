import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CardPokemon } from "../components";
import { PokemonContext } from "../context/PokemonContext";

export const SearchPage = () => {
  const location = useLocation();

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen">
      <p className="text-base py-1 px-4 dark:text-white">
        Found <span>{filteredPokemons.length}</span> Results:
      </p>
      <div className="grid sm:grid-cols-4 grid-cols-1 place-items-center gap-20 max-w-[1200px] mx-auto px-4">
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
