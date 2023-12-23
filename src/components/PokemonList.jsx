import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loader } from "./Loader";

export const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

  return (
    <div className="min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-4 grid-cols-1 place-items-center gap-20 max-w-[1200px] mx-auto px-4">
          {filteredPokemons.length ? (
            <>
              {filteredPokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};
