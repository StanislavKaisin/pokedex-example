import {
  AppBar,
  CircularProgress,
  Grid,
  TextField,
  Toolbar,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { fade, makeStyles } from "@material-ui/core/styles";

import { PokemonCard, PokemonCardProps } from "../components/PokemonCard";
import axios from "axios";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  pocedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
    width: "100%",
    margin: 0,
  },
  searchContainer: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBotoom: "5px",
  },
}));

export const Pokedex: React.FC = (props) => {
  const classes = useStyles();
  const [pokemonData, setpokemonData] = useState<{
    [index: string]: PokemonCardProps;
  }>({});
  const [filter, setfilter] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfilter(e.target.value);
  };
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
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="baseline"
          >
            <Search className={classes.searchIcon} />
            <TextField
              label="Pokemon"
              onChange={handleSearchChange}
              className={classes.searchContainer}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={1} className={classes.pocedexContainer}>
          {Object.keys(pokemonData).map((pokemonId: string) => {
            if (pokemonData[pokemonId].name.includes(filter)) {
              const pokemon = pokemonData[`${pokemonId}`];
              return (
                <React.Fragment key={pokemonId}>
                  <PokemonCard {...pokemon} />
                </React.Fragment>
              );
            }
          })}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};
