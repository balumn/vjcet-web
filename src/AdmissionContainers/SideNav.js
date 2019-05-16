import React, { Component } from "react";
import "../Components/SideNav.css";
import OnlineApply from "./onlineapply";
import Home from "./MtechHome";
import Eligibility from "./eligibility";
import GuideLines from "./guidelines";
import Seats from "./Seats";
import Fees from "./Fees";
import Dates from "./Dates";
import Application from "./application"
class SideNav extends Component {
  state = {
    showOnline: true,
    showHome: false,
    showEligibility: false,
    showGuidelines: false,
    showSeats: false,
    showFees: false,
    showDates: false,
    showappl: false
  };
  onClickOnline = () => {
    this.setState({
      showOnline: true,
      showHome: false,
      showEligibility: false,
      showGuidelines: false,
      showSeats: false,
      showFees: false,
      showDates: false,
      showappl: false
    });
  };
  onClickHome = () => {
    this.setState({
      showOnline: false,
      showHome: true,
      showEligibility: false,
      showGuidelines: false,
      showSeats: false,
      showFees: false,
      showDates: false,
      showappl: false
    });
  };
  onClickEligiblity = () => {
    this.setState({
      showOnline: false,
      showHome: false,
      showEligibility: true,
      showGuidelines: false,
      showSeats: false,
      showFees: false,
      showDates: false,
      showappl: false
    });
  };
  onClickGuidlines = () => {
    this.setState({
      showOnline: false,
      showHome: false,
      showEligibility: false,
      showGuidelines: true,
      showSeats: false,
      showFees: false,
      showDates: false,
      showappl: false
    });
  };
  onClickSeats = () => {
    this.setState({
      showOnline: false,
      showHome: false,
      showEligibility: false,
      showGuidelines: false,
      showSeats: true,
      showFees: false,
      showDates: false,
      showappl: false
    });
  };
  onClickFees = () => {
    this.setState({
      showOnline: false,
      showHome: false,
      showEligibility: false,
      showGuidelines: false,
      showSeats: false,
      showFees: true,
      showDates: false,
      showappl: false
    });
  };
  onClickDate = () => {
    this.setState({
      showOnline: false,
      showHome: false,
      showEligibility: false,
      showGuidelines: false,
      showSeats: false,
      showFees: false,
      showDates: true,
      showappl: false
    });
  };
  onClickApplication = () => {
    this.setState({
      showOnline: false,
      showHome: false,
      showEligibility: false,
      showGuidelines: false,
      showSeats: false,
      showFees: false,
      showDates: false,
      showappl: true
    });
  };

  render() {
    return (
      <React.Fragment>

        <div class="Deptcontent">
          <div class="sidenav">
            <input

              value="Apply Online"
              class="button"
              onClick={this.onClickOnline}
            />
            <input

              value="Home"
              class="button"
              onClick={this.onClickHome}
            />
            <input

              value="Eligibility"
              class="button"
              onClick={this.onClickEligiblity}
            />
            <input

              value="Guidelines"
              class="button"
              onClick={this.onClickGuidlines}
            />
            {/* <input
              value="Seat Division"
              class="button"
              onClick={this.onClickSeats}
            /> */}
            <input

              value="Fee Structure"
              class="button"
              onClick={this.onClickFees}
            />
            <input

              value="Important Dates"
              class="button"
              onClick={this.onClickDate}
            />
            <input

              value="Application Form"
              class="button"
              onClick={this.onClickApplication}
            />
          </div>
          <div class="dropdownD">
            <button class="button">Menu</button>
            <div class="dropdownD-content">
              <input

                value="Profile"
                class="button"
                onClick={this.onClickP}
              />
              <input

                value="Vision"
                class="button"
                onClick={this.onClickV}
              />
              <input
                value="PEO & PSO"
                class="button"
                onClick={this.onClickPeo}
              />
              <input
                value="Program"
                class="button"
                onClick={this.onClickProg}
              />
              <input
                value="Faculty"
                class="button"
                onClick={this.onClickFac}
              />
              <input
                value="Library"
                class="button"
                onClick={this.onClickLib}
              />
              <input
                value="Association"
                class="button"
                onClick={this.onClickAss}
              />
              <input
                value="Result"
                class="button"
                onClick={this.onClickRes}
              />
            </div>
          </div>
          <div class="content">
            {this.state.showOnline ? <OnlineApply /> : null}
            {this.state.showHome ? <Home /> : null}
            {this.state.showEligibility ? <Eligibility /> : null}
            {this.state.showGuidelines ? <GuideLines /> : null}
            {this.state.showSeats ? <Seats /> : null}
            {this.state.showFees ? <Fees /> : null}
            {this.state.showDates ? <Dates /> : null}
            {this.state.showappl ? <Application /> : null}

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
