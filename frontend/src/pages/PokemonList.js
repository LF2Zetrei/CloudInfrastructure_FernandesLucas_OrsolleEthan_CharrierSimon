import React, { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import filterIcon from "../img/filter.png";

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
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

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

  // Fonction de filtre
  const filteredList = dex.filter((pokemon) => {
    if (!selectedLetter) {
      return true;
    } else {
      return pokemon.name.toUpperCase().startsWith(selectedLetter);
    }
  });

  const sortedList = [...filteredList].sort(sortPkmn);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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

  const letterBarStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "10px 0",
    maxWidth: "800px",
    margin: "0 auto 20px",
    borderBottom: "1px solid #ccc",
  };

  // Style pour chaque bouton de lettre
  const letterButtonStyle = (letter) => ({
    padding: "5px 8px",
    margin: "3px",
    cursor: "pointer",
    backgroundColor: selectedLetter === letter ? "#007bff" : "transparent",
    color: selectedLetter === letter ? "white" : "black",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontWeight: "bold",
    minWidth: "30px",
    textAlign: "center",
  });

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

  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const sortButtonStyle = {
    padding: "5px",
  };

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <h1>Pokedex</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              role="img"
              aria-label="Trier par"
              style={{
                fontSize: "2em",
                marginRight: "10px",
                cursor: "default",
              }}
            >
              ⇅
            </span>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
              style={sortButtonStyle}
            >
              <option value="id">Num. Pokédex</option>
              <option value="name">Nom</option>
            </select>
          </div>

          <button onClick={() => setShowFilters(!showFilters)}>
            <img src={filterIcon} style={{ width: "50px" }}></img>
          </button>
        </div>
      </div>
      {showFilters && (
        <div style={letterBarStyle}>
          <div
            onClick={() => setSelectedLetter(null)}
            style={letterButtonStyle(null)}
          >
            TOUS
          </div>
          {alphabet.map((letter) => {
            const isLetterUsed = dex.some((p) =>
              p.name.toUpperCase().startsWith(letter)
            );
            return (
              <div
                key={letter}
                onClick={() => isLetterUsed && setSelectedLetter(letter)}
                style={{
                  ...letterButtonStyle(letter),
                  opacity: isLetterUsed ? 1 : 0.4, // Griser les lettres non utilisées
                  cursor: isLetterUsed ? "pointer" : "default",
                }}
              >
                {letter}
              </div>
            );
          })}
        </div>
      )}

      <div style={listStyle}>{renderDex}</div>
    </div>
  );
}

export default PokemonList;
