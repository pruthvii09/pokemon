import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { PokemonContext } from "../context/PokemonContext";
import { primerMayuscula } from "../helper/helper";
import { Line } from "rc-progress";
export const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <main className="px-10 py-5 min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="max-w-[1200px]">
            <div className="flex justify-around sm:flex-row flex-col-reverse">
              <div>
                <span className="sm:text-9xl dark:text-white text-4xl">
                  #{pokemon.id}
                </span>
                <h1 className="sm:text-8xl text-4xl dark:text-white">
                  {primerMayuscula(pokemon.name)}
                </h1>
                <div className="mt-3 flex gap-1">
                  {pokemon.types.map((type) => (
                    <span
                      key={type.type.name}
                      className={`${"px-4 py-2 rounded-lg text-white"} ${
                        type.type.name
                      }`}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col mt-4 text-xl dark:text-white">
                  <span>
                    Height : <b>{pokemon.height}</b>
                  </span>
                  <span>
                    Weight : <b>{pokemon.weight}</b>
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="sm:w-[300px] w-[200px]"
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={`Pokemon ${pokemon?.name}`}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center flex-col dark:text-white">
            <h1 className="text-3xl mb-3">Statistics</h1>
            <div className="sm:w-[60%] w-[100%] flex gap-3 flex-col">
              <div>
                <span>HP {pokemon.stats[0].base_stat}</span>
                <Line
                  percent={pokemon.stats[0].base_stat}
                  strokeWidth={1}
                  strokeColor="#1c64f2"
                />
              </div>
              <div>
                <span>Attack {pokemon.stats[1].base_stat}</span>
                <Line
                  percent={pokemon.stats[1].base_stat}
                  strokeWidth={1}
                  strokeColor="#1c64f2"
                />
              </div>
              <div>
                <span>Defence {pokemon.stats[2].base_stat}</span>
                <Line
                  percent={pokemon.stats[2].base_stat}
                  strokeWidth={1}
                  strokeColor="#1c64f2"
                />
              </div>
              <div>
                <span>Special Attack {pokemon.stats[3].base_stat}</span>
                <Line
                  percent={pokemon.stats[3].base_stat}
                  strokeWidth={1}
                  strokeColor="#1c64f2"
                />
              </div>
              <div>
                <span>Special Defence {pokemon.stats[4].base_stat}</span>
                <Line
                  percent={pokemon.stats[4].base_stat}
                  strokeWidth={1}
                  strokeColor="#1c64f2"
                />
              </div>
              <div>
                <span>Speed {pokemon.stats[5].base_stat}</span>
                <Line
                  percent={pokemon.stats[5].base_stat}
                  strokeWidth={1}
                  strokeColor="#1c64f2"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
