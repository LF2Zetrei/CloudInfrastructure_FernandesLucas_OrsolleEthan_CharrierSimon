import React, { useState } from "react";
import PokeCard from "./components/PokeCard";
import Header from "./components/Header";
import { normalizeString } from "./utils/StringUtils";
import LetterCard from "./components/LetterCard";

function App() {
  // Données test

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

  const F = {
    id: 959,
    name: "Forgelina",
    type1: "Fée",
    type2: "Acier",
    imageUrl:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/959.png",
    description:
      "Ce Pokémon très intelligent et hardi jette des rochers dans les airs puis les frappe avec son marteau en visant les Corvaillus qui volent.",
  };
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

  const listStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const dex = [E, A, V, P, M, N, Ph, G, Ny, F];
  const [activeFilter, setActiveFilter] = useState("id");
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const sortById = (list) => {
    const filteredList = list.filter((card) => card.id);
    return [...filteredList].sort((a, b) => a.id - b.id);
  };

  const sortByName = (list) => {
    return [...list].sort((a, b) => {
      const nameA = normalizeString(a.name || "");
      const nameB = normalizeString(b.name || "");
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  };

  const buildGroupedList = (list) => {
    const sortedList = sortByName(list);
    const groupedList = [];
    let lastInitial = "";

    sortedList.forEach((pokemon) => {
      const initial = normalizeString(pokemon.name[0]);
      if (initial !== lastInitial) {
        groupedList.push({
          letter: initial.toUpperCase(),
          type: "letter",
          key: `letter-${initial}`,
        });
        lastInitial = initial;
      }
      groupedList.push({ ...pokemon, type: "pokemon" });
    });
    return groupedList;
  };

  const handleLetterFilter = (letter) => {
    if (selectedLetter === letter) {
      setSelectedLetter(null);
    } else {
      setSelectedLetter(letter);
    }
    setActiveFilter("name");
  };

  const handleTypeFilter = (type) => {
    if (selectedType === type) {
      setSelectedType(null);
    } else {
      setSelectedType(type);
    }
    setActiveFilter("type");
    setSelectedLetter(null);
  };

  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    setActiveFilter(sortBy);
    setSelectedLetter(null);
    setSelectedType(null);
  };

  let currentList = [];

  if (activeFilter === "id") {
    currentList = sortById(dex);
  } else if (activeFilter === "name") {
    currentList = buildGroupedList(dex);
    if (selectedLetter) {
      currentList = currentList.filter(
        (card) =>
          card.type === "letter" ||
          normalizeString(card.name[0]).toUpperCase() === selectedLetter
      );
    } else {
      currentList = currentList.filter((card) => card.type === "letter");
    }
  } else if (activeFilter === "type") {
    const allTypes = [
      ...new Set(dex.flatMap((p) => [p.type1, p.type2]).filter(Boolean)),
    ].sort();

    let allTypeCards = allTypes.map((type) => ({
      type: "typeCard",
      typeName: type,
      key: `type-${type}`,
    }));

    if (!selectedType) {
      currentList = allTypeCards;
    } else {
      const filteredPokemon = dex
        .filter((p) => p.type1 === selectedType || p.type2 === selectedType)
        .map((p) => ({
          ...p,
          type: "pokemon",
        }));
      const selectedIndex = allTypeCards.findIndex(
        (card) => card.typeName === selectedType
      );

      let listWithPokemon = [...allTypeCards];
      listWithPokemon.splice(selectedIndex + 1, 0, ...filteredPokemon);
      currentList = listWithPokemon;
    }
  }

  const renderDex = currentList.map((card, index) => {
    const key = card.key || card.id || `item-${index}`;

    if (card.type === "letter") {
      return (
        <LetterCard
          key={key}
          letter={card.letter}
          onClick={handleLetterFilter}
          isActive={selectedLetter === card.letter}
        />
      );
    }
    if (card.type === "typeCard") {
      return (
        <LetterCard
          key={key}
          letter={card.typeName}
          onClick={handleTypeFilter}
          isActive={selectedType === card.typeName}
          isTypeCard={true}
        />
      );
    }
    return <PokeCard key={key} pokemon={card} />;
  });

  return (
    <div className="App">
      <Header onSortChange={handleSortChange}></Header>
      <div style={listStyle}>{renderDex}</div>
    </div>
  );
}

export default App;
