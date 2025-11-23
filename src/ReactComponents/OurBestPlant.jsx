import React, { useState } from "react";
import "./OurBestPlant.css";
import Ourbestplant from "./OurBestPlant.json";
const Datalength = Ourbestplant.length;
function OurBestPlant() {
  const [index, setIndex] = useState(0);
  const handleclick = () => {
    if (index == Datalength - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handleclickprev = () => {
    if (index == 0) {
      setIndex(Datalength - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div className="our-best-plant">
      <h1 className="corner-title">Our Best o2</h1>
      <div className="Featured-plant-card">
        <div className="section-plant-image">
          <img src={Ourbestplant[0].images} alt="image of best plant" />
        </div>
        <div className="plant-details">
          <h2>{Ourbestplant[index].title}</h2>
          <p>{Ourbestplant[index].descriptionone}</p>
          <p>{Ourbestplant[index].descriptiontow}</p>
          <div className="plant-details-explorer">
            <button className="effect-btn">Explore</button>
            <div className="next-btn">
              <div
                className="backward-btn  effect-btn"
                onClick={handleclickprev}
              ></div>
              <div className="counter  effect-btn">{index + 1}/04</div>
              <div
                className="forward-btn  effect-btn"
                onClick={handleclick}
              ></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default OurBestPlant;
