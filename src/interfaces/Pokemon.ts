export interface Pokemon {
  name: string;
  id: number;
  species: Species;
  height: number;
  types: Slot[];
  weight: number;
  sprites: Sprites;
}

interface Species {
  name: string;
  url: string;
}
interface Slot {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

/*
 name: "squirtle",
    id: 7,
    species: {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon-species/7/",
    },
    height: 5,
    types: [
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    weight: 90,
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",

      back_female: null,
      
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png",

      back_shiny_female: null,

      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",

      front_female: null,

      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",

      front_shiny_female: null,
    },
  },
  */

// npm install react-router-dom --save @types/react-router-dom
