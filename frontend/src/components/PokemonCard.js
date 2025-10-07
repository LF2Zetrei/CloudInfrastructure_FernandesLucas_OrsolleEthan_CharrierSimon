import React from "react";

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

function PokemonCard({ id, name, type1, type2, imageUrl }) {
  const primaryType = type1 ? type1.toUpperCase() : "NORMAL";
  const cardColor = TYPE_COLORS[primaryType] || TYPE_COLORS["NORMAL"];

  const cardStyle = {
    width: "22%",
    minWidth: "300px",
    padding: "15px",
    margin: "10px",
    borderRadius: "0 10px 0 10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    backgroundColor: `${cardColor}`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "start",
    color: "white",
  };

  const imgStyle = {
    width: "150px",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "50%",
  };

  const idStyle = {
    display: "flex",
    alignItems: "start",
    fontWeight: "bold",
    fontSize: "1.3em",
    color: "rgba(255,255,255,0.7)",
  };

  const displayTypes = (
    <div>
      <span>{type1}</span>
      {type2 && (
        <>
          <br></br>
          <span>{type2}</span>
        </>
      )}
    </div>
  );

  return (
    <div className="pokemon-card" style={cardStyle}>
      <div>
        <span style={{ fontWeight: "bold", fontSize: "1.5em" }}>{name}</span>
        <span>{displayTypes}</span>
      </div>
      <img src={imageUrl} style={imgStyle}></img>
      <span style={idStyle}>#{id}</span>
    </div>
  );
}

export default PokemonCard;
