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
              className = "adropStyle"
            >
              Computing Technology
            </Link>
          </p>

          <p>
            {" "}
            <Link
              to="/facilities/library"
              className = "adropStyle"
            >
              Centeral Library
            </Link>{" "}
          </p>

          <p>
            {" "}
            <Link
              to="/facilities/auditorium"
              className = "adropStyle"
            >
              Core Facilities
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/facilities/hostels"
              className = "adropStyle"
            >
              {" "}
              Hostels
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/facilities/sports"
              className = "adropStyle"
            >
              {" "}
              Sports
            </Link>{" "}
          </p>

          <p>
            <Link
              to="/facilities/transportation"
              className = "adropStyle"
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
