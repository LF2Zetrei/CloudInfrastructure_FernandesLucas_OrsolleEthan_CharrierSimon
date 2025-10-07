import React from "react";

function PokemonCard({ id, name, type1, type2, imageUrl, description }) {
  const cardStyle = {
    width: "25%",
    minWidth: "300px",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
    borderLeft: "8px solid #FF000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
  };

  const displayTypes = (
    <div style={{ fontSize: "0.9em", color: "#666" }}>
      Type(s): <span style={{ fontWeight: "bold" }}>{type1}</span>
      {type2 && (
        <>
          {" / "}
          <span style={{ fontWeight: "bold" }}>{type2}</span>
        </>
      )}
    </div>
  );

  return (
    <div className="pokemon-card" style={cardStyle}>
      <div
        className="card-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>{name}</h3>
        <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>#{id}</span>
      </div>
      <div
        className="card-body"
        style={{ textAlign: "center", margin: "10px 0" }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{ width: "100px", height: "100px", objectFit: "contain" }}
        />
        <p style={{ margin: "5px 0" }}>{displayTypes}</p>
      </div>
      <div className="card-footer">
        <p style={{ fontSize: "0.85em", color: "#333" }}>{description}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
