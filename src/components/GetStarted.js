import React from "react";
import "./GetStarted.css";

function GetStarted() {
  return (
    <div className="getStarted">
      <h1>Want to know about the new job opening?</h1>
      <p>Subscribe to our newsletter and get started with us</p>
      <div className="inputField">
        <input type="email" placeholder="Type your email address" />
        <p>
          Subscribe Now <span>{">>"}</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
