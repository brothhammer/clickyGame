import React from "react";
import "./MemoryCard.css";

const MemoryCard = props => (
  <div className="card">
    <div className="img-container">
      <img class= "img-thumbnail" onClick={() => props.clickCard(props.id)} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default MemoryCard;