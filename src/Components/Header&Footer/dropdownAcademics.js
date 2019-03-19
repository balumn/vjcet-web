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
            <Link className = "adropStyle"
              to="/academics"
            >
              Academics
            </Link>
          </p>
          <p>
            <Link
              to="/academics/calendar"
              className = "adropStyle"
            >
              {" "}
              Calendar
            </Link>
          </p>
          <p>
            <Link
              to="/academics/curriculum"
              className = "adropStyle"
            >
              {" "}
              Curriculum{" "}
            </Link>
          </p>
          <p>
            {" "}
            <Link
              to="/academics/courses-offered"
              className = "adropStyle"
            >
              Courses Offered
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              to="/academics/honors"
              className = "adropStyle"
            >
              Honors{" "}
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/academics/convocation"
              className = "adropStyle"
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
