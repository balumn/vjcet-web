import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownF extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div class="dropdown">
        <span>Facilities</span>
        <div class="dropdown-content">
          <p>
            <Link
              to="/infrastructure/computing-technology"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Computing Technology
            </Link>
          </p>
          <p>
            <Link
              to="/infrastructure/nif"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Networking & Internet Facility
            </Link>
          </p>
          <p>
            <Link
              to="/infrastructure/cms"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Campus Management System{" "}
            </Link>
          </p>
          <p>
            {" "}
            <Link
              to="/infrastructure/building-area"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Building Area
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              to="/infrastructure/library"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Centeral Library
            </Link>{" "}
          </p>

          <p>
            {" "}
            <Link
              to="/infrastructure/auditorium"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Auditorium & Seminar Hall
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/infrastructure/hostels"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Hostels
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/infrastructure/sports"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Sports
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/infrastructure/power-backup"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Power and Back up
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/infrastructure/transportation"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Transportation
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/infrastructure/campus-amenities"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Campus Amenities
            </Link>{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownF;
