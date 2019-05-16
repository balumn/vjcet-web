import React, { Component } from "react";
import EEFaculty from "./Eefaculty";
import EEStaff from "./Eestaff";
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
          {this.state.showfaculty ? <EEFaculty /> : null}
          {this.state.showstaff ? <EEStaff /> : null}
        </div>
      </div>
    );
  }
}

export default FacultyNav;
