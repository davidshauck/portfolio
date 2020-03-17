import React, { Component } from "react";
import "./homecard.css";

class HomeCard extends Component {

  render() {
    return (
      <div>
          <div className="main-title col-6">
            <div>hello.</div>
          </div>
          <div className="main-subhead col-6">
            <div>the name is dave.</div>
            <div>i do things.</div>
            <div>things that will help your organization.</div>
          </div>
      </div>
    );
  }
}

export default HomeCard;
