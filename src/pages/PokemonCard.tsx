import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Pokemon } from "../interfaces/Pokemon";

interface PokemonCardProps extends Pokemon {}

const useStyles = makeStyles({
  cardMedia: {
    margin: "auto",
    width: "130px",
    height: "130px",
  },
  cardContent: {
    textAlign: "center",
  },
});

const toFirstCharUpperCase = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export const PokemonCard = (props: PokemonCardProps) => {
  const classes = useStyles();
  // console.log("props=", props);
  const { id, name } = props;
  const sprite = props.sprites.front_default ? props.sprites.front_default : "";
  return (
    <Grid item xs={12} sm={4} key={id}>
      <Card>
        <CardMedia image={sprite} className={classes.cardMedia} />
        <CardContent className={classes.cardContent}>
          <Typography>{`${id}. ${toFirstCharUpperCase(name)}`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
