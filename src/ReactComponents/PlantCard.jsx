import React from "react";
import "./PlantCard.css";
import Record from "./recods.json";
function PlantCard() {
  return (
    <div className="PlantCard">
      <h1 className="corner-title">Our Top Selling Plants</h1>

      <div className="cart-section">
        {Record.map((Record) => {
          return (
            <div className="Product-grid">
              <div className="swaper">
                <img src={Record.plantimges} alt="image" />
                <h2>{Record.title}</h2>
                <p>{Record.content}</p>
                <div className="buy-info">
                  <h2>Rs.300/-</h2>
                  <div className="shophing-card effect-btn">
                    <div className="shoping-icon"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlantCard;
