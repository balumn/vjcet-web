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
              to="/facilities/computing-technology"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Common Computer Center
            </Link>
          </p>

          <p>
            {" "}
            <Link
              to="/facilities/library"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Centeral Library
            </Link>{" "}
          </p>

          <p>
            {" "}
            <Link
              to="/facilities/auditorium"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Core Facilities
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/facilities/hostels"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Hostels
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/facilities/sports"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Sports
            </Link>{" "}
          </p>

          <p>
            <Link
              to="/facilities/transportation"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Transportation
            </Link>{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownF;
