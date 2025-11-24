import React from "react";
import PokemonType from "./PokemonType";

function PokeCard(props) {
  // Stockage des couleurs et des types :
  const TYPE_COLORS = {
    NORMAL: "#909aa1",
    INSECTE: "#91c12f",
    ÉLECTRIK: "#f3d13a",
    COMBAT: "#ce416b",
    SPECTRE: "#5269ad",
    PSY: "#f97178",
    VOL: "#8da7dc",
    ACIER: "#5a8ea2",
    GLACE: "#72cdbf",
    POISON: "#aa6ac7",
    FEU: "#ff9c54",
    DRAGON: "#0b6dc3",
    SOL: "#d97845",
    EAU: "#4e8fd6",
    TÉNÈBRES: "#5a5364",
    ROCHE: "#c5b68c",
    PLANTE: "#63bb5a",
    FÉE: "#eb8ee5",
  };

  const primaryType = props.pokemon.type1
    ? props.pokemon.type1.toUpperCase()
    : "NORMAL";
  const secondaryType = props.pokemon.type2
    ? props.pokemon.type2.toUpperCase()
    : null;
  const mainColor = TYPE_COLORS[primaryType] || TYPE_COLORS["NORMAL"];
  const secondaryColor = TYPE_COLORS[secondaryType] || null;

  let id = props.pokemon.id.toString().padStart(3, "0");

  const cardStyle = {
    width: "250px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    backgroundColor: `${mainColor}`,
    borderRadius: "15px",
    paddingTop: "15px",
  };

  const imgStyle = {
    width: "175px",
  };

  const avatarStyle = {
    backgroundColor: "#e1e1e1",
    borderRadius: "10px",
    position: "relative",
  };

  const idStyle = {
    backgroundColor: `${mainColor}`,
    margin: "0",
    borderRadius: "0 0 8px 0",
    display: "inline-block",
    padding: "0 5px 0 0",
    position: "absolute",
    top: "0",
    left: "0",
  };

  const typeStyle = {
    width: "85%",
    display: "flex",
    justifyContent: "center",
    margin: "10px",
  };

  return (
    <div style={cardStyle}>
      <div style={avatarStyle}>
        <p style={idStyle}>#{id}</p>
        <img
          src={props.pokemon.imageUrl}
          alt={props.pokemon.name}
          style={imgStyle}
        ></img>
      </div>

      <p>{props.pokemon.name}</p>
      <div style={typeStyle}>
        <PokemonType Type={props.pokemon.type1} Color={mainColor}></PokemonType>
        {props.pokemon.type2 && (
          <PokemonType
            Type={props.pokemon.type2}
            Color={secondaryColor}
          ></PokemonType>
        )}
      </div>
    </div>
  );
}

export default PokeCard;
