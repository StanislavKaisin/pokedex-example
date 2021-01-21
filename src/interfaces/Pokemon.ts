export interface IPokemon {
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
export interface Slot {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}
