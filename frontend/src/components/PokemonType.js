import React from "react";
import { darkenHexColor } from "../utils/ColorUtils";

function PokemonType(props) {
  const darkenedColor = darkenHexColor(props.Color, 50);

  const typeStyle = {
    width: "100%",
    color: `${props.Color}`,
    backgroundColor: `${darkenedColor}`,
    display: "flex",
    justifyContent: "center",
    borderRadius: "8px",
    marginLeft: "2px",
    marginRight: "2px",
  };

  return (
    <div style={typeStyle}>
      <p>{props.Type}</p>
    </div>
  );
}

export default PokemonType;
