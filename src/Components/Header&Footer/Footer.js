import React, { Component } from "react";
import "./Footer.css";
import "../Images/ImageOne";
import ImageOne from "../Images/ImageOne";
import Line from "../Lines/Line";
import HeadingFive from "../Texts/HeadingFive";
import AnchorLink from "../Texts/AnchorLink";
import CustomOne from "../Texts/CustomOne";
import HeadingFour from "../Texts/HeadingFour";
import ExternalLink from "../Texts/ExternalLink"

class Footer extends Component {
  VJCLogo = {
    instanceID: "FooterVJCLogo",
    image: "Logo.jpg",
    width: "300px"
  };

  NBALogo = {
    instanceID: "FooterNBALogo",
    image: "nbaac.png",
    width: "50px"
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
    link: "/departments"
  };

  Link4 = {
    instanceID: "Link4",
    title: "Campus Life",
    link: "/campus-Life"
  };

  Link5 = {
    instanceID: "Link5",
    title: "Facilities",
    link: "/facilities"
  };

  Link6 = {
    instanceID: "Link6",
    title: "Academics",
    link: "/academics/courses-offered"
  };

  Link7 = {
    instanceID: "Link7",
    title: "Placements",
    link: "/placement"
  };

  Link8 = {
    instanceID: "Link8",
    title: "R&D",
    link: "/r&d"
  };

  Link9 = {
    instanceID: "Link9",
    title: "Alumni",
    link: "https://alumni.vjcet.ac.in/"
  };

  Link10 = {
    instanceID: "Link10",
    title: "Administration",
    link: "/about/keyfunctionaries"
  };

  Link11 = {
    instanceID: "Link11",
    title: "About Us",
    link: "about"
  };

  Link12 = {
    instanceID: "Link12",
    title: "Contact Us",
    link: "/contact"
  };

  // Link13 = {
  //   instanceID: "Link13",
  //   title: "News",
  //   link: ""
  // };

  // Link14 = {
  //   instanceID: "Link14",
  //   title: "Events",
  //   link: ""
  // };

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

  Link18 = {
    instanceID: "Link18",
    title: "Parent's Login",
    link: "https://portal.vjcet.ac.in/"
  };
  Link19 = {
    instanceID: "Link19",
    title: "Alumni's Login",
    link: "https://alumni.vjcet.ac.in/"
  };
  Link20 = {
    instanceID: "Link20",
    title: "Moodle",
    link: "https://moodle.vjcet.ac.in/"
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
          <HeadingFour data={this.FooterLinksTitleOne} />
          <AnchorLink data={this.Link1} />
          <ExternalLink data={this.Link2} />
          <AnchorLink data={this.Link3} />
          <AnchorLink data={this.Link4} />
          <AnchorLink data={this.Link5} />
          <AnchorLink data={this.Link6} />
          <AnchorLink data={this.Link7} />
          <AnchorLink data={this.Link8} />
        </div>

        <div className="FooterLinksTwo" id="FooterLinksTwo">
          <HeadingFive data={this.FooterLinksTitleTwo} />
          <ExternalLink data={this.Link9} />
          <AnchorLink data={this.Link10} />
          <AnchorLink data={this.Link11} />
          <AnchorLink data={this.Link12} />
          {/* <AnchorLink data={this.Link13} />
          <AnchorLink data={this.Link14} /> */}
        </div>

        <div className="FooterLinksThree" id="FooterLinksThree">
          <HeadingFive data={this.FooterLinksTitleThree} />
          <ExternalLink data={this.Link15} />
          <ExternalLink data={this.Link16} />
          <ExternalLink data={this.Link18} />
          <ExternalLink data={this.Link19} />
          <ExternalLink data={this.Link20} />
        </div>

        <div className="FooterLinksFour" id="FooterLinksFour">
          <HeadingFive data={this.FooterLinksTitleFour} />
          <a href="https://www.facebook.com/principal.vjcet" target="_blank" rel="noopener noreferrer"><ImageOne data={this.fb} /></a>
          <a href="https://www.youtube.com/channel/UCYlW0xiYPFl3R_wiownjQRw" target="_blank" rel="noopener noreferrer"><ImageOne data={this.youtube} /></a>
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
