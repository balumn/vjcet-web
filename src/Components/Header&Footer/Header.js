import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../Images/ImageOne";
import ImageOne from "../Images/ImageOne";
import Line from "../Lines/Line";
// import ExternalLink from "../Texts/ExternalLink"
import AnchorLink from "../Texts/AnchorLink";
import DropDownD from "./dropdownDepartment";
import DropDownC from "./dropdownCampus";
import DropDownA from "./dropdownAcademics";
import DropDownAb from "./dropdownAbout";
import DropDownL from "./dropdownLogin";
import DropDownF from "./dropdownfacilities";
import ContactLink from "../Texts/Contactlink"
import DropDownAdm from "./dropdownAdmission";

class Header extends Component {
  VJCLogo = {
    instanceID: "HeaderVJCLogo",
    image: "Logo.jpg",
    width: "280px"
  };

  Hamburger = {
    instanceID: "HeaderHamburger",
    image: "hamburger.png",
    width: "20px"
  };

  NBALogo = {
    instanceID: "HeaderNBALogo",
    image: "nbaac.png",
    width: "50px"
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
    link: "/r&d"
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
        {/* <ImageOne data={this.NBALogo} /> */}
        <Line data={this.HeaderLineOne} />
        <Line data={this.HeaderLineTwo} />
        {/* <HeadingFour data={this.HeaderVJCCode} /> */}

        <div className="HeaderLinkTabOne" id="HeaderLinkTabOne">
          <div className="HeaderLinkTabOne" id="HeaderLinkOne">
            <DropDownL />
            <ContactLink data={this.Link2} />
          </div>
        </div>

        <div className="HeaderLinkTabTwo" id="HeaderLinkTabTwo">
          <div className="HeaderLinkTabAdmissionsOpen">
            <ImageOne data={this.AdmissionsOpen} />
            {/* <ExternalLink data={this.Link4} /> */}
            <DropDownAdm />
          </div>
          <div className="HeaderLinkTabTwoGrouped">
            <DropDownAb />
            <DropDownD />
            <DropDownA />
            <DropDownC />
            <AnchorLink data={this.Link9} />
            <DropDownF />
            {/* <AnchorLink data={this.Link7} /> */}
            <AnchorLink data={this.Link10} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
