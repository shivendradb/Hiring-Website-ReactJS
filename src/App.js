import React from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Bounce from 'react-reveal/Bounce';

function App() {
  return (
    <div className="app">
      <div className="components">
        <Bounce right duration={3000}>
          <Header />
        </Bounce>
        <Body />
      </div>
    </div>
  );
}

export default App;
