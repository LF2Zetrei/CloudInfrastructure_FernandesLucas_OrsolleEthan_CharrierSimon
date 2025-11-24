import React from "react";

function Selector(props) {
  const selectorStyle = {
    padding: "20px",
    borderRadius: "10px",
    margin: "10px",
    cursor: "pointer",
  };

  return (
    <select
      name="filter"
      onChange={props.onSortChange}
      defaultValue="id"
      style={selectorStyle}
    >
      <option value="id">Par numéro de pokédex</option>
      <option value="name">Par nom</option>
      <option value="type">par type</option>
    </select>
  );
}

export default Selector;
