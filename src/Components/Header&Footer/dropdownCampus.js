import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownC extends Component {
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
        <span>Campus Life</span>
        <div class="dropdown-content">
          <p>
            <Link
              to="/campus-life"
              className="patch1"
            >
              Campus
            </Link>
          </p>
          <p>
            <Link
              to="/campus-life/campus-map"
              className="patch1"
            >
              Campus-Map
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownC;
