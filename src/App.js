import React from "react";
import PokeCard from "./components/PokeCard";
import { mockPokemonData } from "./mock/pokeData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PokeCard
        name={mockPokemonData.name}
        sprites={mockPokemonData.sprites}
        video={mockPokemonData.video}
      />
    </div>
  );
}
