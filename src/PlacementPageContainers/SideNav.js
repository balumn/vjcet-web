import React, { Component } from "react";
import Profile from "./profile";
import Vision from "./vision";
import CEFaculty from "./PlacementTeam";

class SideNav extends Component {
  state = {
    showProfile: false,
    showVision: true,
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

        <div className="Placecontent">
          <div class="Psidenav">
            <input
              value="Vision & Mission"
              class="button"
              onClick={this.onClickV}
            />
            <input
              value="About"
              class="button"
              onClick={this.onClickP}
            />
            <input
              value="Our Team"
              class="button"
              onClick={this.onClickFac}
            />
          </div>
          <div className="Placecontent">
            {this.state.showProfile ? <Profile /> : null}
            {this.state.showVision ? <Vision /> : null}
            {this.state.showfac ? <CEFaculty /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
