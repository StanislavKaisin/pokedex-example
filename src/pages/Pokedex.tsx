import {
  AppBar,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { PokemonCard } from "../components/PokemonCard";
const mockData: { [index: string]: any } = require("../mockData").default;

const useStyles = makeStyles({
  pocedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

export const Pokedex = (props: RouteComponentProps) => {
  const classes = useStyles();
  const [pokemonData, setpokemonData] = useState(mockData);
  const getPockemonCard = (pokemonId: string) => {
    return (
      <Grid item xs={12} sm={4} key={pokemonId}>
        <Card>
          <CardContent>{pokemonId}</CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pocedexContainer}>
          {Object.keys(pokemonData).map((pokemonId: string) => {
            const pokemon = pokemonData[`${pokemonId}`];
            return <PokemonCard {...pokemon} key={pokemon.id} />;
          })}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};
