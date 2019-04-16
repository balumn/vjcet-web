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
              className="patch1"
            >
              Academics
            </Link>
          </p>
          {/* <p>
            <Link
              to="/academics/calendar"
              className="patch1"              
            >
              {" "}
              Calendar
            </Link>
          </p>
          <p>
            <Link
              to="/academics/curriculum"
              className="patch1"
            >
              
              Curriculum
            </Link>
          </p> */}
          <p>

            <Link
              to="/academics/honors"
              className="patch1"
            >
              Honors
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownA;
