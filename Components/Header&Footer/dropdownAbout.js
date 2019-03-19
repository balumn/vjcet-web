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
              About College
            </Link>
          </p>
          <p>
            <Link
              to="/about/vision"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Vision & Mission{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/mou"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              MOU{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/manager"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Manager{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/director"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Director{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/principal"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Principal{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/mandatory"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Mandatory Disclosure{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/accreditation"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Accreditation{" "}
            </Link>
          </p>
          <p>
            {" "}
            <Link
              to="/about/keyfunctionaries"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              KeyFunctionaries
            </Link>{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownAb;
