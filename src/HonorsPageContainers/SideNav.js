import React, { Component } from "react";
import "./Nav.css";
import CeHonors from "../DeptPageContainers/CeDept/LocalContainers/cehonors";
import CsHonors from "../DeptPageContainers/CsDept/LocalContainers/cshonors";
import EcHonors from "../DeptPageContainers/EcDept/LocalContainers/echonors";
import EeHonors from "../DeptPageContainers/EeeDept/LocalContainers/eehonors";
import ItHonors from "../DeptPageContainers/ItDept/LocalContainers/ithonors";
import MeHonors from "../DeptPageContainers/MeDept/LocalContainers/mehonors";
import HeadingOne from "../Components/Texts/HeadingOne";
class SideNav extends Component {
  state = {
    showcs: true,
    showec: false,
    showee: false,
    showit: false,
    showme: false
  };
  onClickcs = () => {
    this.setState({
      showcs: true,
      showec: false,
      showee: false,
      showit: false,
      showme: false
    });
  };
  onClickec = () => {
    this.setState({
      showcs: false,
      showec: true,
      showee: false,
      showit: false,
      showme: false
    });
  };

  onClickee = () => {
    this.setState({
      showcs: false,
      showec: false,
      showee: true,
      showit: false,
      showme: false
    });
  };
  onClickit = () => {
    this.setState({
      showcs: false,
      showec: false,
      showee: false,
      showit: true,
      showme: false
    });
  };
  onClickme = () => {
    this.setState({
      showcs: false,
      showec: false,
      showee: false,
      showit: false,
      showme: true
    });
  };
  Heading = {
    instanceID: "Heading",
    title: "Roll of HONORS"
  };
  render() {
    return (
      <div >
        <HeadingOne data={this.Heading} />
        <div >
          <CeHonors />
        </div>
        <div >
          <CsHonors />
        </div>
        <div id="ec">
          <EcHonors />
        </div>
        <div id="ee">
          <EeHonors />
        </div>
        <div id="it">
          <ItHonors />
        </div>
        <div id="me">
          <MeHonors />
        </div>
      </div>
    );
  }
}

export default SideNav;
