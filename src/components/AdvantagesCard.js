import React from "react";
import "./AdvantagesCard.css";

function AdvantagesCard({ id, title, paragraph, img }) {
  return (
    <div className="advantages_card">
      <img src={img} alt={id} />
      <div className="text">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default AdvantagesCard;
