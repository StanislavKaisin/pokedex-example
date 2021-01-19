import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";
import { toFirstCharUpperCase } from "../heplers/toFirstCharUpperCase";
import { Pokemon } from "../interfaces/Pokemon";

interface PokemonCardProps extends Pokemon {}

const useStyles = makeStyles({
  card: {
    cursor: "pointer",
  },
  cardMedia: {
    margin: "auto",
    width: "130px",
    height: "130px",
  },
  cardContent: {
    textAlign: "center",
  },
});

export const PokemonCard = (props: PokemonCardProps) => {
  const history = useHistory();
  const classes = useStyles();
  const { id, name } = props;
  const sprite = props.sprites.front_default ? props.sprites.front_default : "";
  return (
    <Grid item xs={12} sm={4} key={id}>
      <Card
        className={classes.card}
        onClick={(): void => {
          history.push(`/${id}`);
        }}
      >
        <CardMedia image={sprite} className={classes.cardMedia} />
        <CardContent className={classes.cardContent}>
          <Typography>{`${id}. ${toFirstCharUpperCase(name)}`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
