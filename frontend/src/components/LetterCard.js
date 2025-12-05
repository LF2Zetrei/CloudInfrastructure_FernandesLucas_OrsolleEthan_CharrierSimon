import React from "react";
import Acier from "../images/acier.png";
import Combat from "../images/combat.png";
import Dragon from "../images/dragon.png";
import Eau from "../images/eau.png";
import Électrik from "../images/électrik.png";
import Fée from "../images/fée.png";
import Feu from "../images/feu.png";
import Glace from "../images/glace.png";
import Insecte from "../images/insecte.png";
import Normal from "../images/normal.png";
import Plante from "../images/plante.png";
import Poison from "../images/poison.png";
import Psy from "../images/psy.png";
import Roche from "../images/roche.png";
import Sol from "../images/sol.png";
import Spectre from "../images/spectre.png";
import Ténèbres from "../images/ténèbres.png";
import Vol from "../images/vol.png";

function LetterCard(props) {
  const typeImageMap = {
    Acier: Acier,
    Combat: Combat,
    Dragon: Dragon,
    Eau: Eau,
    Électrik: Électrik,
    Fée: Fée,
    Feu: Feu,
    Glace: Glace,
    Insecte: Insecte,
    Normal: Normal,
    Plante: Plante,
    Poison: Poison,
    Psy: Psy,
    Roche: Roche,
    Sol: Sol,
    Spectre: Spectre,
    Ténèbres: Ténèbres,
    Vol: Vol,
  };

  const image = props.isTypeCard ? typeImageMap[props.letter] : null;

  const cardStyle = {
    width: "250px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    borderRadius: "15px",
    paddingTop: "15px",

    backgroundColor: props.isActive ? "#666" : "#e1e1e1", // Style si actif
    cursor: "pointer", // Indiquer que c'est cliquable
  };

  const textStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    color: props.isActive ? "#e1e1e1" : "#666",
  };

  const imgStyle = {
    width: "150px",
  };

  const handleClick = () => {
    props.onClick(props.letter);
  };
  return (
    <div style={cardStyle} onClick={handleClick}>
      {image ? (
        <img src={image} alt={`Type ${props.letter}`} style={imgStyle} />
      ) : (
        <p style={textStyle}>{props.letter}</p>
      )}
    </div>
  );
}

export default LetterCard;
