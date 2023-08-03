import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import uiDisplay from "../assets/hero-ui-display.png";

import "./styles/global.css";

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);
  return (
    <div className="hero-container">
      <div className={`d-flex justify-content-between hero-inner ${screenWidth < 1200 ? "flex-column-reverse" : "flex-row"}`}>
        <div className={`d-flex flex-column justify-content-center ${screenWidth < 1200 ? "align-items-center" : ""}`}>
          <h1 className="hero-title text-white">
            Breaking <span className="text-regular">the silence.</span>
            <br />
            Bridging <span className="text-regular">the gap.</span>
          </h1>
          <p className="text-white mt-2">
            Learn Filipino sign language the fun and interactive way.
          </p>
          <div className="container flex-column">
            <Button className="mt-5 main-btn">Get Started</Button>
            <Button className="mt-3 sub-btn">About us</Button>
          </div>
        </div>
        <div className={`d-flex flex-column justify-content-center ${screenWidth < 1200 ? "align-items-center" : ""}`}>
          <img src={uiDisplay} width={550} />

        </div>
      </div>
    </div>
  );
};

export default Hero;
