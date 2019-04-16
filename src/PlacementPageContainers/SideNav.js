import React, { Component } from "react";
import "./SideNav.css";
import Profile from "./profile";
import Vision from "./vision";
import FacultyNav from "./facultynav";

class SideNav extends Component {
  state = {
    showProfile: true,
    showVision: false,
    showfac: false
  };
  onClickP = () => {
    this.setState({
      showProfile: true,
      showVision: false,
      showfac: false
    });
  };
  onClickV = () => {
    this.setState({
      showProfile: false,
      showVision: true,
      showfac: false
    });
  };
  onClickFac = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showfac: true
    });
  };
  render() {
    return (
      <div>
        <div class="nav">
          <input
            type="button"
            value="Profile"
            class="button"
            onClick={this.onClickP}
          />
          <input
            type="button"
            value="Vision & Mission"
            class="button"
            onClick={this.onClickV}
          />
          <input
            type="button"
            value="Faculty"
            class="button"
            onClick={this.onClickFac}
          />
        </div>
        <div>
          {this.state.showProfile ? <Profile /> : null}
          {this.state.showVision ? <Vision /> : null}
          {this.state.showfac ? <FacultyNav /> : null}
        </div>
      </div>
    );
  }
}

export default SideNav;
