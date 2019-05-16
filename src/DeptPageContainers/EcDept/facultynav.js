import React, { Component } from "react";
import ECFaculty from "./Ecfaculty";
import ECStaff from "./Ecstaff";
class FacultyNav extends Component {
  state = {
    showfaculty: true,
    showstaff: false
  };
  OnClickFac = () => {
    this.setState({
      showfaculty: true,
      showstaff: false
    });
  };
  OnClickStaff = () => {
    this.setState({
      showfaculty: false,
      showstaff: true
    });
  };
  render() {
    return (
      <div class="facultyNav">
        <input
          type="button"
          value="Faculty"
          class="buttongraph"
          onClick={this.OnClickFac}
        />
        <input
          type="button"
          value="Technical Staff"
          class="buttongraph"
          onClick={this.OnClickStaff}
        />
        <div class="FacultyNavContent">
          {this.state.showfaculty ? <ECFaculty /> : null}
          {this.state.showstaff ? <ECStaff /> : null}
        </div>
      </div>
    );
  }
}

export default FacultyNav;
