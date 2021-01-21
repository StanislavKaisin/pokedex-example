import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Pokedex } from "./pages/Pokedex";
import { Pokemon } from "./pages/Pokemon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/:pokemonId" component={Pokemon} />
      </BrowserRouter>
    </>
  );
}

export default App;
