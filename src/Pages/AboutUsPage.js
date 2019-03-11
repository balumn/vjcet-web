import React, { Component } from "react";
import "./HomePage.css";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import DepartmentSection from "../HomePageContainers/DepartmentSection";
import FacilitiesSection from "../HomePageContainers/FacilitiesSection";
import VisionSection from "../HomePageContainers/VisionSection";

class AboutUsPage extends Component {
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

  HomePageDepartmentSection = {
    instanceID: "HomePageDepartmentSection"
  };

  HomePageFacilitiesSection = {
    instanceID: "HomePageFacilitiesSection"
  };

  HomePageVisionSection = {
    instanceID: "HomePageVisionSection"
  };

  render() {
    return (
      <div className="AboutPage">
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <VisionSection data={this.HomePageFacilitiesSection} />
        <DepartmentSection data={this.HomePageDepartmentSection} />
        <FacilitiesSection data={this.HomePageFacilitiesSection} />
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

export default AboutUsPage;
