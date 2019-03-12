import React, { Component } from "react";
import "../HomePageContainers/dropdown.css";

class DropDown extends Component {
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
          <p> Computer Science and Enginnering</p>
          <p> Information Technology</p>
          <p> Mechanical Enginnering </p>
          <p> Civil Enginnering </p>
          <p> Electrical & Electronics Enginnering </p>
          <p> Electronics & Communication Enginnering </p>
        </div>
      </div>
    );
  }
}
export default DropDown;
