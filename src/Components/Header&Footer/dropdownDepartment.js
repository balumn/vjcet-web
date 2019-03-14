import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownD extends Component {
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
        <span>Departments</span>
        <div class="dropdown-content">
          <p>
            <Link
              to="/departments/cse"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Computer Science and Enginnering
            </Link>
          </p>
          <p>
            <Link
              to="/departments/it"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Information Technology
            </Link>
          </p>
          <p>
            <Link
              to="/departments/me"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Mechanical Enginnering{" "}
            </Link>
          </p>
          <p>
            {" "}
            <Link
              to="/departments/ce"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Civil Enginnering
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              to="/departments/eee"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Electrical & Electronics Enginnering
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/departments/ece"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Electronics & Communication Enginnering
            </Link>{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownD;
