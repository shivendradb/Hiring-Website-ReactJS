import React from "react";
import "./Footer.css";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <h1>
        <span>© {year}</span> Coursify
      </h1>
      <div className="shortcuts">
        <span>About</span>
        <span>Team</span>
        <span>Contact</span>
      </div>
    </div>
  );
}

export default Footer;
