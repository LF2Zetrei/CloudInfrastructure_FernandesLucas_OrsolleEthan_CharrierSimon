import React, { useState } from "react";
import PokemonCard from "../components/PokemonCard";

function PokemonList() {
  // Données test
  const E = {
    id: 133,
    name: "Évoli",
    type1: "Normal",
    type2: null,
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png",
    description:
      "Ses multiples évolutions lui permettent de s’adapter à tout type de milieu naturel.",
  };
  const A = {
    id: 134,
    name: "Aquali",
    type1: "Eau",
    type2: null,
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/134.png",
    description:
      "Il vit au bord de l’eau. Sa queue semblable à celle d’un poisson lui donne l’apparence d’une sirène.",
  };
  const V = {
    id: 135,
    name: "Voltali",
    type1: "Électrik",
    type2: null,
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/135.png",
    description:
      "Il concentre la faible charge électrique générée par chacune de ses cellules pour projeter de puissants éclairs.",
  };
  const P = {
    id: 136,
    name: "Pyroli",
    type1: "Feu",
    type2: null,
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/136.png",
    description:
      "Sa glande enflammée chauffe l’air qu’il inspire. Il l’exhale ensuite sous forme de flamme atteignant les 1 700 °C.",
  };
  const M = {
    id: 196,
    name: "Mentali",
    type1: "Psy",
    type2: null,
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/196.png",
    description:
      "Quand il prédit la prochaine attaque de son adversaire, l’extrémité fourchue de sa queue frémit.",
  };
  const N = {
    id: 197,
    name: "Noctali",
    type1: "Ténèbres",
    type2: null,
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/197.png",
    description:
      "Quand il s’expose aux ondes lunaires, ses anneaux brillent légèrement et il acquiert un mystérieux pouvoir.",
  };
  const Ph = {
    id: 470,
    name: "Phyllali",
    type1: "Plante",
    type2: null,
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/470.png",
    description:
      "Un Phyllali qui dort par beau temps produit un air frais et pur par photosynthèse.",
  };
  const G = {
    id: 471,
    name: "Givrali",
    type1: "Glace",
    type2: null,
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/471.png",
    description:
      "Il peut contrôler la température de son corps à volonté et créer des cristaux de glace en gelant l’humidité de l’air.",
  };
  const Ny = {
    id: 700,
    name: "Nymphali",
    type1: "Fée",
    type2: null,
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/700.png",
    description:
      "Ses antennes en forme de ruban émettent des ondes apaisantes en direction de ses adversaires et neutralisent toute hostilité.",
  };

  const dex = [Ny, E, A, V, P, M, N, Ph, G];

  const [sortKey, setSortKey] = useState("id");

  // Fonction de tri
  const sortPkmn = (a, b) => {
    if (sortKey === "id") {
      return a.id - b.id;
    }
    if (sortKey === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  };

  const sortedList = dex.sort(sortPkmn);

  const renderDex = sortedList.map((pokemon) => (
    <PokemonCard
      key={pokemon.id}
      id={pokemon.id}
      name={pokemon.name}
      type1={pokemon.type1}
      type2={pokemon.type2}
      imageUrl={pokemon.imageUrl}
    />
  ));

  const listStyle = {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={pageStyle}>
      <div>
        <span>Trier par :</span>
        <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
          <option value="id">ID</option>
          <option value="name">Nom</option>
        </select>
      </div>

      <h1>Liste des Pokémons :</h1>

      <div style={listStyle}>{renderDex}</div>
    </div>
  );
}

export default PokemonList;
