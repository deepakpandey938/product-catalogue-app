import React, { useState } from "react";
import "./Herosection.css";
import subtextreview from "./subtextreview.json";
import datafile from "./recods.json";
const datainfolength = datafile.length;
function Herosection({ starcounter = 5 }) {
  const [count, setCOunter] = useState(0);
  const [starValue, setStarValue] = useState();
  const handleclicknext = () => {
    if (count == datainfolength - 1) {
      setCOunter(0);
    } else {
      setCOunter(count + 1);
    }
  };
  return (
    <div className="Hero-section">
      <div className="Main-heading-section">
        <div className="heading-section">
          <h1 className="headline-header">Earth’s Exhale</h1>
          <p>
            <p>environment and its essential role in sustaining life.</p>
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural
          </p>
          <div className="main-heading-buttons">
            <button className="buy-btn-of-main" >Buy Now</button>
            <div className="radio-button effect-btn">
              <din className="play-btn effect-btn"></din>
            </div>
            <p>Live Demo...</p>
          </div>
        </div>

        {subtextreview.map((subtextreview) => {
          return (
            <div className="review-heading-section">
              <div className="image-info">
                <img src={subtextreview.images} alt="image of person" />
                <div className="info-about-person">
                  <h2>{subtextreview.Name}</h2>
                  <div className="start">
                    {new Array(starcounter).fill(0).map((value, index) => {
                      return (
                        <span
                          key={index}
                          className={index < starValue ? "gold" : ""}
                          value={setStarValue(4)}
                        >
                          &#9733;
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="description">
                <p>{subtextreview.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="banner-image">
        <div className="cart-banner-image">
          <img
            src={datafile[count].plantimges}
            alt="Rose Gold Feminine Calligraphy Monogram Logo"
            loading="lazy"
          ></img>
          <div className="plant-card">
            <h4>Indoor Plant </h4>
            <div className="wraper-next-btn">
              <h2>{datafile[count].title}</h2>
              <div className="next-cart" onClick={handleclicknext}></div>
            </div>
            <button className="effect-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
