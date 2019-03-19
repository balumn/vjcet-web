import React, { Component } from "react";
// import "../../node_modules/video-react/dist/video-react.css";
import "./promo.css";
import promovid from "./vjcet.mp4";
class Promo extends Component {
  state = {};
  render() {
    return (
      <div className="background-video">
        <video id="background-video" loop autoPlay muted poster="./poster.png">
          <source src={promovid} type="video/mp4" />
          <source src={promovid} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Promo;
