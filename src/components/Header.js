import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="leftContent">
        {/* <img src="./logo.png" alt="logo" /> */}
        <h1>HRtech {"&"} Insurancetech</h1>
      </div>
      <div className="centerContent">
        <h1>Services</h1>
        <h1 className="team">Team</h1>
        <h1>Contact</h1>
        <h1>Login</h1>
      </div>
      <div className="rightContent">
        <button>Apply Now</button>
        <img src="./Hamburger_icon.png" alt="" />
      </div>
    </div>
  );
}

export default Header;
