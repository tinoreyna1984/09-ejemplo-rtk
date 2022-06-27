import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./slices/pokemon/pokemonSlice";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const state = useSelector((state) => state || {});
  const { pokemons } = state;
  const { page, list, isLoading } = pokemons;

  return (
    <>
      <h1>PokemonApp</h1>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          <ul style={{ listStyle: "none" }}>
            {list.map((pokemon) => (
              <li key={pokemon.url}>{pokemon.name}</li>
            ))}
          </ul>
          <p>Page: {page}</p>
        </>
      )}

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
