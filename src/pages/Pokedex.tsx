import { AppBar, CircularProgress, Grid, Toolbar } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { PokemonCard, PokemonCardProps } from "../components/PokemonCard";
import axios from "axios";

const useStyles = makeStyles({
  pocedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

export const Pokedex: React.FC = (props) => {
  const classes = useStyles();
  // const [pokemonData, setpokemonData] = useState(mockData);
  const [pokemonData, setpokemonData] = useState<{
    [index: string]: PokemonCardProps;
  }>({});
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then((response) => {
        const { data } = response;
        const { results } = data;
        const newPokemonData: { [index: string]: any } = {};
        results.forEach((pokemon: PokemonCardProps, index: number) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setpokemonData(newPokemonData);
      });
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pocedexContainer}>
          {Object.keys(pokemonData).map((pokemonId: string) => {
            const pokemon = pokemonData[`${pokemonId}`];
            return (
              <div key={pokemonId}>
                <PokemonCard {...pokemon} />
              </div>
            );
          })}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};
