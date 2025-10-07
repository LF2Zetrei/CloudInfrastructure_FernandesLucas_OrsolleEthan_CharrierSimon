import React from "react";
import PokemonCard from "../components/PokemonCard";

function PokemonList() {
  // Données test
  const testPokemon = {
    id: 700,
    name: "Nymphali",
    type1: "Fée",
    type2: null,
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/700.png",
    description:
      "Ses antennes en forme de ruban émettent des ondes apaisantes en direction de ses adversaires et neutralisent toute hostilité. ",
  };

  const listStyle = {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    flexWrap: "wrap",
  };

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={pageStyle}>
      <h1>Liste des Pokémons :</h1>

      <div style={listStyle}>
        <PokemonCard
          id={testPokemon.id}
          name={testPokemon.name}
          type1={testPokemon.type1}
          type2={testPokemon.type2}
          imageUrl={testPokemon.imageUrl}
          description={testPokemon.description}
        />
        <PokemonCard
          id={testPokemon.id}
          name={testPokemon.name}
          type1={testPokemon.type1}
          type2={testPokemon.type2}
          imageUrl={testPokemon.imageUrl}
          description={testPokemon.description}
        />
        <PokemonCard
          id={testPokemon.id}
          name={testPokemon.name}
          type1={testPokemon.type1}
          type2={testPokemon.type2}
          imageUrl={testPokemon.imageUrl}
          description={testPokemon.description}
        />
        <PokemonCard
          id={testPokemon.id}
          name={testPokemon.name}
          type1={testPokemon.type1}
          type2={testPokemon.type2}
          imageUrl={testPokemon.imageUrl}
          description={testPokemon.description}
        />
        <PokemonCard
          id={testPokemon.id}
          name={testPokemon.name}
          type1={testPokemon.type1}
          type2={testPokemon.type2}
          imageUrl={testPokemon.imageUrl}
          description={testPokemon.description}
        />
        <PokemonCard
          id={testPokemon.id}
          name={testPokemon.name}
          type1={testPokemon.type1}
          type2={testPokemon.type2}
          imageUrl={testPokemon.imageUrl}
          description={testPokemon.description}
        />
      </div>
    </div>
  );
}

export default PokemonList;
