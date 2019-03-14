import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownAb extends Component {
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
        <span>About VJCET</span>
        <div class="dropdown-content">
          <p>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              The Institute
            </Link>
          </p>
          <p>
            <Link
              to="/about/cert"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Cerrtification{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/factfile"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Fact File{" "}
            </Link>
          </p>
          <p>
            {" "}
            <Link
              to="/about/achievements"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Achievements
            </Link>{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownAb;
