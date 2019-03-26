import React, { Component } from "react";
import "./SideNav.css";
import Profile from "./profile";
import Vision from "./vision";
import PEO from "./peo";
import Program from "./program";
import Library from "./library";
import Association from "./association";
class SideNav extends Component {
  state = {
    showProfile: true,
    showVision: false,
    showPeo: false,
    showProgram: false,
    showLib: false,
    showAss: false
  };
  onClickP = () => {
    this.setState({
      showProfile: true,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false
    });
  };
  onClickV = () => {
    this.setState({
      showProfile: false,
      showVision: true,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false
    });
  };
  onClickPeo = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: true,
      showProgram: false,
      showLib: false,
      showAss: false
    });
  };
  onClickProg = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: true,
      showLib: false,
      showAss: false
    });
  };
  onClickLib = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: true,
      showAss: false
    });
  };
  onClickAss = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: true
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
            value="PEO & PSO"
            class="button"
            onClick={this.onClickPeo}
          />
          <input
            type="button"
            value="Program"
            class="button"
            onClick={this.onClickProg}
          />
          <input
            type="button"
            value="Department Library"
            class="button"
            onClick={this.onClickLib}
          />
          <input
            type="button"
            value="Department Association"
            class="button"
            onClick={this.onClickAss}
          />
        </div>
        {this.state.showProfile ? <Profile /> : null}
        {this.state.showVision ? <Vision /> : null}
        {this.state.showPeo ? <PEO /> : null}
        {this.state.showProgram ? <Program /> : null}
        {this.state.showLib ? <Library /> : null}
        {this.state.showAss ? <Association /> : null}
      </div>
    );
  }
}

export default SideNav;
