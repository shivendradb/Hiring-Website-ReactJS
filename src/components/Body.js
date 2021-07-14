import React from "react";
import Advantages from "./Advantages";
import "./Body.css";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Intro from "./Intro";
import NewJob from "./NewJob";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Body() {
  return (
    <div className="body">
      <Fade bottom duration={3000}>
        <Intro />
      </Fade>
      <Fade right>
        <NewJob />
      </Fade>
      {/* <Fade left> */}
      <Advantages />
      {/* </Fade> */}
      <Zoom clear duration={3000}>
        <GetStarted />
      </Zoom>
      <Fade clear duration={3000}>
        <Footer />
      </Fade>
    </div>
  );
}

export default Body;
