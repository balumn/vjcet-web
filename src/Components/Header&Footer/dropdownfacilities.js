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
    );
  }
}
export default DropDownF;
