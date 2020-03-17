import React from "react";
// import "./studentCard.css";

function PortfolioCard(props) {
  return (
    <div>
      <div className="results-box">
          <div className="col-3 image">
          <img src={props.image} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-7 text">
              <div className="title">{props.title}</div>
              <div className="description"><b>Description:</b> {props.description}</div>     
          </div>
      </div>
      <hr />
    </div>
  );
}

export default PortfolioCard;
