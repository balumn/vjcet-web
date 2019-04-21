import React, { Component } from "react";
import "./HomePage.css";
import "./AboutPage.css";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import HeadingOne from "../Components/Texts/HeadingOne";
import HeadingFour from "../Components/Texts/HeadingFour";

class KeyFunc extends Component {
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

  KeyTitle = {
    instanceID: "KeyTitle",
    title: "Key Functionaries"
  };

  PrincipalTitle = {
    instanceID: "PrincipalTitle",
    title: "PRINCIPAL"
  };
  PrincipalName = {
    instanceID: "PrincipalName",
    title: "Dr. Josephkunju Paul C."
  };
  PrincipalText = {
    instanceID: "PrincipalText",
    title:
      "Viswajyothi College of Engineering & Technology, Vazhakulam can boast of producing competent engineers capable of facing the challenges in the technical field with zeal to social commitment and ethical values. Started only eighteen years back, our institution commands a formidable position amongst the various engineering colleges. This is achieved by excellent infrastructural facilities combined with the team work of enthusiastic management, dedicated faculty members, committed laboratory & workshop staff members, sincere administrative staff members,motivating alumni and dynamic students. Excellent track records in the University examinations and the considerable number of placements reveal the effective co-ordination of all these resources. This is not an end in itself. We are striving hard to make the vision of the institution “Moulding Engineers par Excellence with integrity, fairness and human values” a reality."
  };
  DirectorTitle = {
    instanceID: "DirectorTitle",
    title: "DIRECTOR"
  };
  DirectorName = {
    instanceID: "DirectorName",
    title: "Rev. Dr. George Thanathuparambil"
  };
  DirectorText = {
    instanceID: "DirectorText",
    title:
      "The  biggest challenge in front of a student is to choose the best.  We endeavour to provide the best and to bring out what is best in our students.  We strive to combine judiciously use of technology and moral values, employability and equity in the transformation of young minds. Already into the eighteenth year of excellence and continuing its pursuit of betterment Viswajyothi College of Engineering and Technology has earned a niche for itself in the engineering educational sector in the country. An amazing response of students from the very inception, consistent result with university ranks, state of the art infrastructure, quality faculty members, impetus given to research and development, campus recruitment and placement record, mentoring for students,  sprawling campus and various student services  ensure our credibility over the years."
  };
  ManagerTitle = {
    instanceID: "ManagerTitle",
    title: "MANAGER"
  };
  ManagerName = {
    instanceID: "ManagerName",
    title: "Msgr. Dr. Cherian Kanjirakombil"
  };
  ManagerText = {
    instanceID: "ManagerText",
    title:
      "Viswajyothi was established with the aim of imparting quality professional education to aspiring students. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis. Our Alumni who have been placed at respectable posts in MNCs around the world has done us proud. We have been able to maintain the ties with a number of respectable MNCs which aids our placement.VJCET essentially has excellent infrastructure, ambiance conducive to learning, well equipped laboratories and workshops, comfortable hostels for gents and ladies,state-of-art-library and loads of other facilities.We have been serving the society for the past ten years and with steady steps, we continue our march forward. We look forward to meeting you at VJCET."
  };
  render() {
    return (
      <div className="HomePage">
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <div id="KeyFunctionariesList">
          <HeadingOne data={this.KeyTitle} />
          {/* Pricipal */}
          <HeadingTwo data={this.PrincipalTitle} />
          <HeadingFour data={this.PrincipalName} />
          <div className="inner-para">
            <BodyOneJustified data={this.PrincipalText} />
          </div>
          {/* Director */}
          <HeadingTwo data={this.DirectorTitle} />
          <HeadingFour data={this.DirectorName} />
          <div className="inner-para">
            <BodyOneJustified data={this.DirectorText} />
          </div>
          {/* Manager */}
          <HeadingTwo data={this.ManagerTitle} />
          <HeadingFour data={this.ManagerName} />
          <div className="inner-para">
            <BodyOneJustified data={this.ManagerText} />
          </div>
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
export default KeyFunc;
