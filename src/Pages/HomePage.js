import React, { Component } from "react";
import "./HomePage.css";
import DepartmentSection from "../HomePageContainers/DepartmentSection";
import FacilitiesSection from "../HomePageContainers/FacilitiesSection";
import VisionSection from "../HomePageContainers/VisionSection";
import CarouselOne from "../HomePageContainers/CarouselOne";
import CarouselTwo from "../HomePageContainers/CarouselTwo";
import CarouselThree from "../HomePageContainers/CarouselThree";
import CarouselFour from "../HomePageContainers/CarouselFour";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";

class HomePage extends Component {
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

  HomePageCarouselOne = {
    instanceID: "HomePageCarouselOne"
  };

  HomePageCarouselTwo = {
    instanceID: "HomePageCarouselTwo"
  };

  HomePageCarouselThree = {
    instanceID: "HomePageCarouselThree"
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

  HomePageCarouselFour = {
    instanceID: "HomePageCarouselFour"
  };

  HomePageFooter = {
    instanceID: "HomePageFooter"
  };

  render() {
    return (
      <div className="HomePage">
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <CarouselOne data={this.HomePageCarouselOne} />
        <CarouselTwo data={this.HomePageCarouselTwo} />
        <CarouselThree data={this.HomePageCarouselThree} />
        <DepartmentSection data={this.HomePageDepartmentSection} />
        <FacilitiesSection data={this.HomePageFacilitiesSection} />
        <VisionSection data={this.HomePageFacilitiesSection} />
        <CarouselFour data={this.HomePageCarouselFour} />
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

export default HomePage;

/*
  <DepartmentSection />
        <FacilitiesSection />
        <VisionSection />
        <CarouselOne/>
        <CarouselTwo/>
        <CarouselThree/>
        <CarouselFour/>
        <Footer />
*/
