import React from "react";
import { Route, Switch } from "react-router-dom";
import { Pokedex } from "./pages/Pokedex";
import { Pokemon } from "./pages/Pokemon";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Pokedex />} />
        <Route
          exact
          path="/:pokemonId"
          render={(props) => <Pokemon {...props} />}
        />
      </Switch>
    </>
  );
}

export default App;
