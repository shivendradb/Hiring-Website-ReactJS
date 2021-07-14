import React from "react";
import "./Advantages.css";
import AdvantagesCard from "./AdvantagesCard";

function Advantages() {
  return (
    <div className="advantages">
      <h1>Benefits and Advantages</h1>
      <p>
        We provide the best services for you so you can be comfortable with us
      </p>
      <div className="advantages_cards">
        <AdvantagesCard
          id="1"
          title="Easy to use"
          paragraph="Working with the platform is designed to be user-friendly"
          img="./img-5.png"
        />
        <AdvantagesCard
          id="2"
          title="Collaboration"
          paragraph="Work with Your Peers & Reach Consensus"
          img="./img-6.png"
        />
        <AdvantagesCard
          id="3"
          title="Free Tools"
          paragraph="Don't waste time, trying to do everything yourself"
          img="./img-7.png"
        />
        <AdvantagesCard
          id="4"
          title="Full at Home"
          paragraph="The freedom to work the way you want to"
          img="./img-8.png"
        />
      </div>
    </div>
  );
}

export default Advantages;
