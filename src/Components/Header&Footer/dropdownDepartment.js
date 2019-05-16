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
            <Link to="/departments/ce" className="patch1" >
              Civil Engineering
            </Link>
          </p>
          <p>
            <Link to="/departments/cse" className="patch1">
              Computer Science and Engineering
            </Link>
          </p>
          <p>
            <Link to="/departments/ece" className="patch1" >
              Electronics & Communication Engineering
            </Link>
          </p>
          <p>
            <Link to="/departments/eee" className="patch1" >
              Electrical & Electronics Engineering
            </Link>
          </p>

          <p>
            <Link to="/departments/it" className="patch1" >
              Information Technology
            </Link>
          </p>
          <p>
            <Link to="/departments/me" className="patch1" >
              Mechanical Engineering
            </Link>
          </p>
          <p>
            <Link to="/departments/s&h" className="patch1">
              Science & Humanities
            </Link>
          </p>
          <p>
            <a href="http://www.vjcetmba.in" target="_blank" className="patch1" rel="noopener noreferrer" >
              MBA
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownD;
