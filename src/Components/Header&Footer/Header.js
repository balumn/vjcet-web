import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../Images/ImageOne";
import ImageOne from "../Images/ImageOne";
import Line from "../Lines/Line";
import HeadingFive from "../Texts/HeadingFive";
import AnchorLink from "../Texts/AnchorLink";
import DropDownD from "./dropdownDepartment";
import DropDownC from "./dropdownCampus";
import DropDownA from "./dropdownAcademics";
import DropDownAb from "./dropdownAbout";
import DropDownL from "./dropdownLogin";
import DropDownF from "./dropdownfacilities";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  VJCLogo = {
    instanceID: "HeaderVJCLogo",
    image: "VJCLogo.png",
    width: "180px"
  };

  Hamburger = {
    instanceID: "HeaderHamburger",
    image: "hamburger.png",
    width: "20px"
  };

  NBALogo = {
    instanceID: "HeaderNBALogo",
    image: "nba.png",
    width: "30px"
  };

  HeaderLineOne = {
    instanceID: "HeaderLineOne"
  };

  HeaderLineTwo = {
    instanceID: "HeaderLineTwo"
  };

  HeaderLineThree = {
    instanceID: "HeaderLineThree"
  };

  HeaderVJCCode = {
    instanceID: "HeaderVJCCode",
    title: "College Code : VJC"
  };

  AdmissionsOpen = {
    instanceID: "AdmissionsOpen",
    image: "OPEN.svg",
    width: "40px"
  };

  Link1 = {
    instanceID: "HeaderLink1",
    title: "About Us",
    link: "About"
  };

  Link2 = {
    instanceID: "HeaderLink2",
    title: "Contact Us",
    link: "/contact"
  };

  Link3 = {
    instanceID: "HeaderLink3",
    title: "Login",
    link: "https://portal.vjcet.ac.in/"
  };

  Link4 = {
    instanceID: "HeaderLink4",
    title: "Admissions",
    link: "http://admission.vjcet.ac.in/"
  };

  Link5 = {
    instanceID: "HeaderLink5",
    title: "Departments",
    link: "departments"
  };

  Link6 = {
    instanceID: "HeaderLink6",
    title: "Campus Life",
    link: "campus-life"
  };

  Link7 = {
    instanceID: "HeaderLink7",
    title: "Facilities",
    link: "facilities"
  };

  Link8 = {
    instanceID: "HeaderLink8",
    title: "Academics",
    link: ""
  };

  Link9 = {
    instanceID: "HeaderLink9",
    title: "Placements",
    link: "/placement"
  };

  Link10 = {
    instanceID: "HeaderLink10",
    title: "R&D",
    link: ""
  };
  LineHeading = {
    instanceID: "LineHeading"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="Header" id={instanceID}>
        <Link to={"/"}>
          <ImageOne data={this.VJCLogo} />
        </Link>
        <ImageOne
          data={this.Hamburger}
          onClickAction={this.props.openMenuFunction}
        />
        <ImageOne data={this.NBALogo} />
        <Line data={this.HeaderLineOne} />
        <Line data={this.HeaderLineTwo} />
        <HeadingFive data={this.HeaderVJCCode} />

        <div className="HeaderLinkTabOne" id="HeaderLinkTabOne">
          <div className="HeaderLinkTabOne" id="HeaderLinkOne">
            <DropDownL />
            <AnchorLink data={this.Link2} />
          </div>
        </div>

        <div className="HeaderLinkTabTwo" id="HeaderLinkTabTwo">
          <div className="HeaderLinkTabAdmissionsOpen">
            <ImageOne data={this.AdmissionsOpen} />
            <AnchorLink data={this.Link4} />
          </div>
          <div className="HeaderLinkTabTwoGrouped">
            <DropDownAb />
            <DropDownD />
            <DropDownC />
            <DropDownA />
            <DropDownF />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
