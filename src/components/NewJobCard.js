import React from "react";
import "./NewJobCard.css";

function NewJobCard({ id, title, img }) {
  return (
    <div className="NewJob_Card" id={id}>
      <div className="NewJob_Card_leftContent">
        <h1>{title}</h1>
        <h3>
          Apply Now <span>{">>"}</span>
        </h3>
      </div>
      <div className="NewJob_Card_rightContent">
        <img src={img} alt={id} />
      </div>
    </div>
  );
}

export default NewJobCard;
