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
              className = "adropStyle"
            >
              About College
            </Link>
          </p>
          <p>
            <Link
              to="/about/vision"
              className = "adropStyle"
            >
              {" "}
              Vision & Mission{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/mou"
              className = "adropStyle"
            >
              {" "}
              MOU{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/manager"
              className = "adropStyle"
            >
              {" "}
              Manager{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/director"
              className = "adropStyle"
            >
              {" "}
              Director{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/principal"
              className = "adropStyle"
            >
              {" "}
              Principal{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/mandatory"
              className = "adropStyle"
            >
              {" "}
              Mandatory Disclosure{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/about/accreditation"
              className = "adropStyle"
            >
              {" "}
              Accreditation{" "}
            </Link>
          </p>
          <p>
            {" "}
            <Link
              to="/about/keyfunctionaries"
              className = "adropStyle"
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
