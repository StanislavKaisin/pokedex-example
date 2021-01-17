import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface PokemonProps extends RouteComponentProps<any> {
  // pokemonId: string;
}

export const Pokemon = (props: PokemonProps) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;

  return (
    <div>
      <p>Pokemon with id={pokemonId}</p>
    </div>
  );
};
