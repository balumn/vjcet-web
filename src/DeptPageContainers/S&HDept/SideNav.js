import React, { Component } from "react";
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
      <React.Fragment>

        <div className="Deptcontent">
          <div class="sidenav">
            <input
              value="Profile"
              className="button"
              onClick={this.onClickP}
            />
            <input
              value="Vision & Mission"
              className="button"
              onClick={this.onClickV}
            />
            <input
              value="Faculty"
              className="button"
              onClick={this.onClickFac}
            />
          </div>
          <div className="content">
            {this.state.showProfile ? <Profile /> : null}
            {this.state.showVision ? <Vision /> : null}
            {this.state.showfac ? <FacultyNav /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
