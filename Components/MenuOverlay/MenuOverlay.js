import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuOverlay.css";
class MenuOverlay extends Component {
  render() {
    return (
      <div
        className="MenuOverlay"
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px"
        }}
      >
        <p>
          <Link to={"/"}>Home</Link>
        </p>
        <p>
          <Link to={"/about"}>About us </Link>
        </p>
        <p>ContactUs</p>
        <p>
          <a href="https://portal.vjcet.ac.in/">Login</a>
        </p>
        <p>
          <a href="http://admission.vjcet.ac.in/">Admission </a>
        </p>
        <p>
          <Link to={"/departments"}>Departments</Link>
        </p>
        <p>
          <Link to={"/campus-life"}>Campus Life</Link>
        </p>
        <p>
          <Link to={"/facilities"}>Facilities</Link>
        </p>
        <p>Academics</p>
        <p>Placements</p>
        <p>R&D</p>
        <p
          onClick={e => {
            this.props.closeMenuFunction();
          }}
        >
          Close
        </p>
      </div>
    );
  }
}
export default MenuOverlay;
