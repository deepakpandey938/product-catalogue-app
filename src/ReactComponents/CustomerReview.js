import React, { useState } from "react";
import "./CustomerReview.css";
import Review from "./customerReview.json";
function CustomerReview({ starcounter = 5 }) {
  const [starValue, setStarValue] = useState();

  return (
    <div className="CustomerReview">
      <h1 className="corner-title">CustomerReview</h1>

      <div className="Customer-Review-container">
        {Review.map((Review) => {
          return (
            <div className="custmor-review-card">
              <div className="customer-details">
                <img src={Review.images} alt="user image" />
                <div className="rating-ratio">
                  <h2 className="custmor-name">{Review.title}</h2>
                  <div className="customer-rating">
                    {new Array(starcounter).fill(0).map((value, index) => {
                      return (
                        <span
                          key={index}
                          className={index < starValue ? "gold" : ""}
                          value={setStarValue(Review.Rating)}
                        >
                          &#9733;
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="customer-description">
                <p>{Review.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomerReview;
