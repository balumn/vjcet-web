import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownL extends Component {
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
        <span>Login</span>
        <div class="dropdown-content">
          <p>
            <Link
              to="/login/student"
              className = "adropStyle"
            >
              {" "}
              Student Login
            </Link>{" "}
          </p>

          <p>
            <Link
              to="/login/faculty"
              className = "adropStyle"
            >
              {" "}
              Faculty Login
            </Link>{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownL;
