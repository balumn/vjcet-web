import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownA extends Component {
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
        <span>Academics</span>
        <div class="dropdown-content">
          <p>
            <Link
              to="/academics"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Academics
            </Link>
          </p>
          <p>
            <Link
              to="/academics/calendar"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Calendar
            </Link>
          </p>
          <p>
            <Link
              to="/academics/curriculum"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Curriculum{" "}
            </Link>
          </p>
          <p>
            {" "}
            <Link
              to="/academics/courses-offered"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Courses Offered
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              to="/academics/honors"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Honors{" "}
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/academics/convocation"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              {" "}
              Convocation
            </Link>{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownA;
