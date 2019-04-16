import React, { Component } from "react";
import "./HomePage.css";
import "./AboutPage.css"
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import HeadingOne from "../Components/Texts/HeadingOne";

class NBA extends Component {
    state = { showMenu: false };
  
    openMenu = () => {
      console.log("opening Menu");
      this.setState({ showMenu: true });
    };
    closeMenu = () => {
      this.setState({ showMenu: false });
    };
    HomePageHeader = {
      instanceID: "HomePageHeader"
    };
    HomePageFooter = {
      instanceID: "HomePageFooter"
    };
  
    CertificationTitle = {
        instanceID: "CertificationTitle",
        title: "CERTIFICATIONS OF VJCET"
      };
    AccreditationTitle = {
        instanceID: "AccreditationTitle",
        title: "NBA Accreditation"
      };
    AccreditationText1 = {
        instanceID: "AccreditationText1",
      title: "All B-Tech programs were accredited by NBA in 2018. The team has inspected the above four departments and the entire college in detail. Later, based on the performance and commitment to education, these  departments were given NBA accreditation."
    };

    WhyNBATitle = {
      instanceID: "WhyNBATitle",
       title: "WHY NBA?"
    };
    WhyNBAText1 = {
        instanceID: "WhyNBAText1",
      title: "The purpose of the accreditation by NBA is to promote and recognize excellence in technical education in colleges and universities, at both the undergraduate and postgraduate levels. Institutions, students, employers, and the public at large all benefit from the external verification of quality provided through the NBA accreditation process. Through accreditation, the following main purposes may be served: "
    };

    NBAPoint1 = {
        instanceID: "NBAPoint1",
        title: "Support and advice to technical Institutions in the maintenance and enhancement of their quality of provision."
    }
    NBAPoint2 = {
        instanceID: "NBAPoint2",
        title: "Confidence and assurance on quality to various stakeholders including students."
    }
    NBAPoint3 = {
      instanceID: "NBAPoint3",
      title: "Assurance of the good standing of an Institution to government departments and other interested bodies."
    }
    NBAPoint4 = {
      instanceID: "NBAPoint4",
      title: "Enabling an Institution to state publicly that it has voluntarily accepted independent inspection and has satisfied all the requirements for satisfactory operation and maintenance of quality in education. "
    }
  
    ISOTitle = {
        instanceID: "ISOTitle",
         title: "ISO 9001"
      };
    ISOText = {
    instanceID: "ISOText",
        title: "Viswajyothi College of Engineering and Technology is an ISO 9001:2008 certified educational Institution. The College became ISO certified in Dec 2010."
    };
    render() {
      return (
        <div className="HomePage">
          <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
          <div className="AboutPage">
            <HeadingOne data={this.CertificationTitle} /><br/>
            <HeadingTwo data={this.AccreditationTitle} />
            <BodyOneJustified data={this.AccreditationText1} />
            <div className="inner-para">
                <HeadingTwo data={this.WhyNBATitle} />
                <BodyOneJustified data={this.WhyNBAText1} />
                <div className="inner-para">
                <ul>
                <li><p><BodyOneJustified data={this.NBAPoint1} /></p></li>
                <li><p><BodyOneJustified data={this.NBAPoint2} /></p></li>
                <li><p><BodyOneJustified data={this.NBAPoint3} /></p></li>
                <li><p><BodyOneJustified data={this.NBAPoint4} /></p></li>
                </ul>
                </div>
            </div>
            <HeadingTwo data={this.ISOTitle} />
            <BodyOneJustified data={this.ISOText} />
         </div>
          <Footer data={this.HomePageFooter} />
          {this.state.showMenu ? (
            <MenuOverlay closeMenuFunction={this.closeMenu} />
          ) : (
            ""
          )}
        </div>
      );
    }
  }
  export default NBA;