import "./contact.css";
import React from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import BodyThree from "../Components/Texts/BodyThree"
import ButtonTwo from "../Components/Buttons/ButtonTwo"

class ContactUs extends React.Component {
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

  ReachUsHeading = {
    instanceID: "ReachUsHeading",
    title: "Reach Us"
  };
  EnquiryHeading = {
    instanceID: "EnquiryHeading",
    title: "Admissions Enquiry"
  };
  MoreInfo = {
    instanceID: "MoreInfo",
    title: "For more information: Click Here!"
}


  render() {
    return (
      <React.Fragment>
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <div classNameName="bgg" id="contactUsListing">
          <div className="root">
            <div>
              <div className="child">
                {/* <h1 className="Heading"> Reach Us</h1> */}
                <HeadingOne data={this.ReachUsHeading} />
                <h3 className="add"> Our Address</h3>
                <h3 className="Reach1">
                  Viswajyothi College of Engineering & Technology Vazhakulam,
                  <br />
                  Muvattupuzha,
                  <br />
                  Ernakulam,Kerala,
                  <br />
                  India-686670
                </h3>
                <h3 className="add"> E-mail</h3>
                <h3 className="Reach1">
                  {" "}
                  vjcvklm@gmail.com
                  <br />
                  vjcet@vjcet.org
                </h3>
              </div>
              <div className="child">
                <h3 className="add">
                  {" "}
                  Our Phone
                  <br />
                </h3>
                <h3 className="Reach1">
                  0485-2262211
                  <br />
                  0485-2262311
                  <br />
                  0485-2262244
                  <br />
                  0485-2262255
                  <br />
                  0485-2262977
                  <br />
                </h3>
              </div>
              <div className="child">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125752.05890978406!2d76.5889803!3d9.9545934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dd2f387bbce7%3A0x33c9780276b797b6!2sViswajyothi+College+of+Engineering+and+Technology!5e0!3m2!1sen!2sin!4v1555349832912!5m2!1sen!2sin"
                  width="450"
                  height="450"
                  frameborder="0"
                  title="google-map"
                />
              </div>
            </div>
            <div className="child">
              <HeadingOne data={this.EnquiryHeading} />
              <div className="child">
                <h3 className="add">B.Tech Admissions</h3>
                <div className="Reach1">
                  Mr. Manu Jose<br />
                  Phone : 9605760293 <br /><br />
                </div>
                <div className="Reach1">
                  Mr. Sivadas T Nair<br />
                  Phone : 9447349948<br /><br />
                </div>
                <div className="Reach1">
                  Mr. Frenosh K Francis<br />
                  Phone : 9447837325  <br /><br />
                </div>
                <div className="Reach1">
                  Mr. Jomu M George<br />
                  Phone : 9495654321
                </div>
                <div className="Reach1">
                <a href="http://admission.vjcet.ac.in/" target="_blank" rel="noopener noreferrer" ><BodyThree data={this.MoreInfo}/></a>
                </div>
                <div>
                </div>
              </div>
              <div className="child">
                <h3 className="add">
                  {" "}
                  M.Tech Admissions
                  <br />
                </h3>
                <div>
                    <a href="http://admission.vjcet.ac.in/" target="_blank" rel="noopener noreferrer" ><BodyThree data={this.MoreInfo}/></a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <Footer data={this.HomePageFooter} />
        {this.state.showMenu ? (
          <MenuOverlay closeMenuFunction={this.closeMenu} />
        ) : (
            ""
          )}
      </React.Fragment>
    );
  }
}

export default ContactUs;
