import React, { Component } from "react";
import "./Footer.css";
import "../Images/ImageOne";
import ImageOne from "../Images/ImageOne";
import Line from "../Lines/Line";
import HeadingFive from "../Texts/HeadingFive";
import AnchorLink from "../Texts/AnchorLink";
import CustomOne from "../Texts/CustomOne";

class Footer extends Component {
  VJCLogo = {
    instanceID: "FooterVJCLogo",
    image: "VJCLogo.png",
    width: "250px"
  };

  NBALogo = {
    instanceID: "FooterNBALogo",
    image: "nba.png",
    width: "60px"
  };

  fb = {
    instanceID: "FooterFBLogo",
    image: "fb.svg",
    width: "46px"
  };

  insta = {
    instanceID: "FooterInstaLogo",
    image: "insta.svg",
    width: "46px"
  };

  twitter = {
    instanceID: "FooterTwitterLogo",
    image: "twitter.svg",
    width: "46px"
  };

  youtube = {
    instanceID: "FooterYoutubeLogo",
    image: "youtube.svg",
    width: "46px"
  };

  FooterLineOne = {
    instanceID: "FooterLineOne"
  };

  FooterLineTwo = {
    instanceID: "FooterLineTwo"
  };

  FooterVJCCode = {
    instanceID: "FooterVJCCode",
    title: "College Code : VJC"
  };

  Copyright = {
    instanceID: "Copyright",
    title:
      "© 2019 Viswajyothi College Of Engineering and Technology. All rights reserved."
  };

  LmntrxTech = {
    instanceID: "LmntrxTech",
    title: "Developed By Evolve"
  };

  Link1 = {
    instanceID: "Link1",
    title: "Home",
    link: "/"
  };

  Link2 = {
    instanceID: "Link2",
    title: "Admissions",
    link: "http://admission.vjcet.ac.in/"
  };

  Link3 = {
    instanceID: "Link3",
    title: "Departments",
    link: "Departments"
  };

  Link4 = {
    instanceID: "Link4",
    title: "Campus Life",
    link: "Campus-Life"
  };

  Link5 = {
    instanceID: "Link5",
    title: "Facilities",
    link: "Facilities"
  };

  Link6 = {
    instanceID: "Link6",
    title: "Academics",
    link: ""
  };

  Link7 = {
    instanceID: "Link7",
    title: "Placements",
    link: ""
  };

  Link8 = {
    instanceID: "Link8",
    title: "R&D",
    link: ""
  };

  Link9 = {
    instanceID: "Link9",
    title: "Alumni",
    link: ""
  };

  Link10 = {
    instanceID: "Link10",
    title: "Administration",
    link: ""
  };

  Link11 = {
    instanceID: "Link11",
    title: "About Us",
    link: "About"
  };

  Link12 = {
    instanceID: "Link12",
    title: "Contact Us",
    link: ""
  };

  Link13 = {
    instanceID: "Link13",
    title: "News",
    link: ""
  };

  Link14 = {
    instanceID: "Link14",
    title: "Events",
    link: ""
  };

  Link15 = {
    instanceID: "Link15",
    title: "Student Login",
    link: "https://portal.vjcet.ac.in/"
  };

  Link16 = {
    instanceID: "Link16",
    title: "Faculty Login",
    link: "https://portal.vjcet.ac.in/"
  };

  FooterLinksTitleOne = {
    instanceID: "FooterLinksTitleOne",
    title: "Quick Links"
  };

  FooterLinksTitleTwo = {
    instanceID: "FooterLinksTitleTwo",
    title: "Know More"
  };

  FooterLinksTitleThree = {
    instanceID: "FooterLinksTitleThree",
    title: "Login"
  };

  FooterLinksTitleFour = {
    instanceID: "FooterLinksTitleFour",
    title: "Follow Us"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="Footer" id={instanceID}>
        <div className="FooterLinksOne" id="FooterLinksOne">
          <HeadingFive data={this.FooterLinksTitleOne} />
          <AnchorLink data={this.Link1} />
          <AnchorLink data={this.Link2} />
          <AnchorLink data={this.Link3} />
          <AnchorLink data={this.Link4} />
          <AnchorLink data={this.Link5} />
          <AnchorLink data={this.Link6} />
          <AnchorLink data={this.Link7} />
          <AnchorLink data={this.Link8} />
        </div>

        <div className="FooterLinksTwo" id="FooterLinksTwo">
          <HeadingFive data={this.FooterLinksTitleTwo} />
          <AnchorLink data={this.Link9} />
          <AnchorLink data={this.Link10} />
          <AnchorLink data={this.Link11} />
          <AnchorLink data={this.Link12} />
          <AnchorLink data={this.Link13} />
          <AnchorLink data={this.Link14} />
        </div>

        <div className="FooterLinksThree" id="FooterLinksThree">
          <HeadingFive data={this.FooterLinksTitleThree} />
          <AnchorLink data={this.Link15} />
          <AnchorLink data={this.Link16} />
        </div>

        <div className="FooterLinksFour" id="FooterLinksFour">
          <HeadingFive data={this.FooterLinksTitleFour} />
          <ImageOne data={this.fb} />
          <ImageOne data={this.insta} />
          <ImageOne data={this.twitter} />
          <ImageOne data={this.youtube} />
        </div>

        <Line data={this.FooterLineOne} />

        <ImageOne data={this.VJCLogo} />
        <ImageOne data={this.NBALogo} />

        <HeadingFive data={this.FooterVJCCode} />

        <Line data={this.FooterLineTwo} />
        <CustomOne data={this.Copyright} />
        <CustomOne data={this.LmntrxTech} />
      </div>
    );
  }
}

export default Footer;
