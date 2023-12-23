import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loader } from "./Loader";

export const PokemonList = () => {
  const { loading, filteredPokemons } = useContext(PokemonContext);
  const [offset, setOffset] = useState(0);
  const [allPokemons, setAllPokemons] = useState([]);
  const getAllPokemons = async (limit = 25) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    console.log(allPokemons);
    setAllPokemons([...allPokemons, ...results]);
    console.log(allPokemons);

    // setLoading(false);
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.scrollHeight
    ) {
      setOffset((prev) => prev + 50);
    }
  };
  useEffect(() => {
    getAllPokemons();
  }, [offset]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

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
