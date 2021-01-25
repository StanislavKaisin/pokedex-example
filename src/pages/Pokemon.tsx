/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  CircularProgress,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { ReactElement, useEffect, useState } from "react";
import { toFirstCharUpperCase } from "../heplers/toFirstCharUpperCase";
import { Slot } from "../interfaces/Pokemon";
import { IPokemon } from "../interfaces/Pokemon";

import * as H from "history";

import { useHistory } from "react-router-dom";
import axios from "axios";

const mockData: { [index: string]: any } = require("../mockData").default;

const useStyles = makeStyles({
  name: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  mainImage: {
    // display: "block",
    width: "98%",
    maxWidth: "max-content",
    height: "auto",
  },
  container: {},
});

interface MatchParams {
  pokemonId: string;
}

interface PokemonProps extends RouteComponentProps<MatchParams> {}

export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

export const Pokemon = (props: PokemonProps) => {
  const history = useHistory();
  const classes = useStyles();
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setpokemon] = useState<any>(undefined);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        const { data } = response;
        setpokemon(data);
      })
      .catch((err) => setpokemon(false));
  }, [pokemonId]);

  const generatePokemonJSX = (): ReactElement => {
    if (pokemon === undefined && pokemon === false) return <></>;

    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemon?.id}.png`;
    const { front_default } = pokemon?.sprites;

    return (
      <>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Typography variant="h1" className={classes.name}>
            {`${pokemon?.id}. ${toFirstCharUpperCase(pokemon?.name)}`}
          </Typography>
          <img src={front_default} alt={pokemon?.name} />
          <img
            src={fullImageUrl}
            alt={pokemon?.name}
            className={classes.mainImage}
          />
          <Typography variant="h4">Pokemon info</Typography>
          <Typography>
            {"Species: "}
            {pokemon?.species.name}
          </Typography>
          <Typography>Height: {pokemon?.height}</Typography>
          <Typography>Weight: {pokemon?.weight}</Typography>
          <Typography variant="h6">Types: </Typography>
          {pokemon?.types.map((typeInfo: Slot) => {
            const { type } = typeInfo;
            const { name } = type;
            return <Typography key={name}>{`${name}`}</Typography>;
          })}
        </Grid>
      </>
    );
  };
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        {pokemon === undefined && <CircularProgress />}
        {pokemon !== undefined && pokemon && generatePokemonJSX()}
        {pokemon === false && <Typography>Pokemon not found</Typography>}

        <Button
          onClick={() => {
            history.push("/");
          }}
        >
          Back to Pokedex
        </Button>
      </Grid>
    </>
  );
};
