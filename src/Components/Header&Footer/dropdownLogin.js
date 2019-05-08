import React, { Component } from "react";
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
        <span style={{ color: 'black' }}>Login</span>
        <div class="dropdown-content">
          <p>
            <a href="https://portal.vjcet.ac.in" target="_blank" className="patch1" rel="noopener noreferrer">
              Student's login
            </a>
          </p>
          <p>
            <a href="https://portal.vjcet.ac.in" target="_blank" className="patch1" rel="noopener noreferrer">
              Parent's login
            </a>
          </p>
          <p>
            <a href="https://alumni.vjcet.ac.in/" target="_blank" className="patch1" rel="noopener noreferrer">
              Alumini's login
            </a>
          </p>
          <p>
            <a href="https://portal.vjcet.ac.in" target="_blank" className="patch1" rel="noopener noreferrer">
              Staff login
            </a>
          </p>
          <p>
            <a href="https://moodle.vjcet.ac.in" className="patch1">
              Moodle
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownL;
