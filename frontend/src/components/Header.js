import React from "react";
import Selector from "./Selector";

function Header(props) {
  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  };

  return (
    <header style={headerStyle}>
      <p>Trier par :</p>
      <Selector onSortChange={props.onSortChange}></Selector>
    </header>
  );
}

export default Header;
