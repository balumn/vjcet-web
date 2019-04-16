import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuOverlay.css";
class MenuOverlay extends Component {
  render() {
    return (
      <div
        className="MenuOverlay"
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px"
        }}
      >
        <div className="dropdownMenu">
          <button class="dropbtn">About Vjcet</button>
          <div className="dropdownMenu-content">
            <p>
              <Link to="/about" className="patch1">
                About College
              </Link>
            </p>
            <p>
              <Link to="/about/accreditation" className="patch1">
                Accreditation
              </Link>
            </p>
            <p>
              <Link to="/about/keyfunctionaries" className="patch1">
                KeyFunctionaries
              </Link>
            </p>
          </div>
        </div>
        <p>ContactUs</p>
        <div class="dropdownMenu">
          <button class="dropbtn">Login</button>
          <div class="dropdownMenu-content">
            <p>
              <a href="https://portal.vjcet.ac.in" className="patch1">
                {" "}
                Staff & Parents login{" "}
              </a>{" "}
            </p>

            <p>
              <a href="https://moodle.vjcet.ac.in" className="patch1">
                {" "}
                Moodle
              </a>{" "}
            </p>
          </div>
        </div>
        <p>
          <a href="http://admission.vjcet.ac.in/">Admission </a>
        </p>
        <div class="dropdownMenu">
          <button class="dropbtn">Departments</button>
          <div class="dropdownMenu-content">
            <p>
              <Link to="/departments/ce" className="patch1">
                Civil Enginnering
              </Link>
            </p>
            <p>
              <Link to="/departments/cse" className="patch1">
                Computer Science and Enginnering
              </Link>
            </p>
            <p>
              <Link to="/departments/ece" className="patch1">
                Electronics & Communication Enginnering
              </Link>
            </p>
            <p>
              <Link to="/departments/eee" className="patch1">
                Electrical & Electronics Enginnering
              </Link>
            </p>

            <p>
              <Link to="/departments/it" className="patch1">
                Information Technology
              </Link>
            </p>
            <p>
              <Link to="/departments/me" className="patch1">
                Mechanical Enginnering
              </Link>
            </p>
            <p>
              <Link to="/departments/s&h" className="patch1">
                Science & Humanities
              </Link>
            </p>
            <p>
              <a href="http://www.vjcetmba.in" className="patch1">
                MBA
              </a>
            </p>
          </div>
        </div>
        <div class="dropdownMenu">
          <button class="dropbtn">Campus Life</button>
          <div class="dropdownMenu-content">
            <p>
              <Link to="/campus-life" className="patch1">
                Campus
              </Link>
            </p>
            <p>
              <Link to="/campus-life/campus-map" className="patch1">
                Campus-Map
              </Link>
            </p>
          </div>
        </div>
        <div class="dropdownMenu">
          <button class="dropbtn">Facilities</button>
          <div class="dropdownMenu-content">
            <p>
              <Link to="/facilities/computing-technology" className="patch1">
                Common Computer Center
              </Link>
            </p>

            <p>
              <Link to="/facilities/library" className="patch1">
                Centeral Library
              </Link>
            </p>

            <p>
              <Link to="/facilities/auditorium" className="patch1">
                Core Facilities
              </Link>
            </p>
            <p>
              <Link to="/facilities/hostel" className="patch1">
                Hostel
              </Link>
            </p>
            <p>
              <Link to="/facilities/sport" className="patch1">
                Sports
              </Link>
            </p>

            <p>
              <Link to="/facilities/transportation" className="patch1">
                Transportation
              </Link>
            </p>
          </div>
        </div>
        <div class="dropdownMenu">
          <button class="dropbtn">Academics</button>
          <div class="dropdownMenu-content">
            <p>
              <Link to="/academics" className="patch1">
                Academics
              </Link>
            </p>
            <p>
              <Link to="/academics/calendar" className="patch1">
                {" "}
                Calendar
              </Link>
            </p>
            <p>
              <Link to="/academics/curriculum" className="patch1">
                Curriculum
              </Link>
            </p>
            <p>
              <Link to="/academics/honors" className="patch1">
                Honors
              </Link>
            </p>
          </div>
        </div>

        <p>
          <Link to="/placements">Placements</Link>
        </p>
        <p>R&D</p>
        <p
          onClick={e => {
            this.props.closeMenuFunction();
          }}
        >
          X
        </p>
      </div>
    );
  }
}
export default MenuOverlay;
