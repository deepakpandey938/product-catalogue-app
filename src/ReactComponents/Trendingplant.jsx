import React from "react";
import "./Trendingplant.css";
import trednigndata from "./trendingdataplant.json";

function Trendingplant() {
  return (
    <div className="Trending-plant-section">
      <h1 className="corner-title">Our Trendy plants</h1>

      <div className="highlight-plant-card">
        <img src={trednigndata[0].plantimges} alt="plant" />
        <div className="cart-info">
          <h2>{trednigndata[0].title}</h2>
          <p>{trednigndata[0].content}</p>
          <h2>{trednigndata[0].price}</h2>

          <div className="explore-plants">
            <button className="effect-btn">Explore</button>
            <div className="icon-card-btn effect-btn">
              <div className="icon-card-btn-logo"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="highlight-plant-card row-reverse">
        <img src={trednigndata[1].plantimges} alt="plant" />
        <div className="cart-info" style={{ margin: "25px" }}>
          <h2>{trednigndata[1].title}</h2>
          <p>{trednigndata[1].content}</p>
          <h2>{trednigndata[1].price}</h2>

          <div className="explore-plants" >
            <button className="effect-btn">Explore</button>
            <div className="icon-card-btn effect-btn">
              <div className="icon-card-btn-logo"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Trendingplant;
