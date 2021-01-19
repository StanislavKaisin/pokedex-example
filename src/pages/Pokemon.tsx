import { Grid, Link, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { ReactElement, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { toFirstCharUpperCase } from "../heplers/toFirstCharUpperCase";
import { Slot } from "../interfaces/Pokemon";
const mockData: { [index: string]: any } = require("../mockData").default;

interface PokemonProps extends RouteComponentProps<any> {
  // pokemonId: string;
}

const useStyles = makeStyles({
  name: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  mainImage: {
    // width: "30rem",
    // height: "30rem",
    display: "block",
    width: "100%",
  },
});

export const Pokemon = (props: PokemonProps) => {
  const classes = useStyles();
  const { match } = props;

  const { params } = match;
  const { pokemonId } = params;
  // const [pokemon, setpokemon] = useState(mockData[`${pokemonId}`]);
  const [pokemon, setpokemon] = useState({});

  const generatePokemonJSX = (): ReactElement => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrle = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <>
        <Grid container direction="column">
          <Typography variant="h1" className={classes.name}>
            {`${id}. ${toFirstCharUpperCase(name)}`}
            <img src={front_default} />
          </Typography>
          <Grid item>
            <img src={fullImageUrle} className={classes.mainImage} />
          </Grid>
          <Typography variant="h4">Pokemon info</Typography>
          <Typography>
            {"Species: "}
            <Link href={species.url}>{species.name}</Link>
          </Typography>
          <Typography>Height: {height}</Typography>
          <Typography>Weight: {weight}</Typography>
          <Typography variant="h6">Types: </Typography>
          {types.map((typeInfo: Slot) => {
            const { type } = typeInfo;
            const { name } = type;
            return <Typography key={name}>{`${name}`}</Typography>;
          })}
        </Grid>
      </>
    );
  };
  return (
    <div>
      {/* <p>Pokemon with id={pokemonId}</p> */}
      {generatePokemonJSX()}
    </div>
  );
};
