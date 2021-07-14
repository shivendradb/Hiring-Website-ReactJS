import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="leftIntro">
        <h1>We are hiring new people for out team. Want to join?</h1>
        <h3>
          Keeping the hiring process smoth and slick, from the initial
          interview, to the sigining of the employment contract. Providing online services to you so you can work from anywhere in the world and don't have to come to the company's office for work.
        </h3>
        <button className="btn-1">Read More</button>
        <button className="btn-2">▶</button>
      </div>
      <div className="rightIntro">
        <img src="./img-1.png" alt="img-1" />
      </div>
    </div>
  );
}

export default Intro;
