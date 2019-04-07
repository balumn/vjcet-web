import React, { Component } from "react";
import "./csdepartment.css";
import DepartmentSection from "../../HomePageContainers/DepartmentSection";
import FacilitiesSection from "../../HomePageContainers/FacilitiesSection";
import VisionSection from "../../HomePageContainers/VisionSection";
import CarouselOne from "../../HomePageContainers/CarouselOne";
import CarouselTwo from "../../HomePageContainers/CarouselTwo";
import CarouselThree from "../../HomePageContainers/CarouselThree";
import CarouselFour from "../../HomePageContainers/CarouselFour";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyOne from "../../Components/Texts/BodyOne";
import ImageOne from "../../Components/Images/ImageOne";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import BodyThree from "../../Components/Texts/BodyThree";
import SideNav from "../../DeptPageContainers/S&HDept/SideNav";

class SHDepartment extends Component {
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
  HeadingSectionTitle = {
    instanceID: "Headingtext",
    title: "Science & Humanities"
  };

  HeadingSectionDescription = {
    instanceID: "HeadingSectionDescription",
    title: "Tell you why that you may know how!"
  };
  CseImg = {
    instanceID: "CseImg",
    image: "CseImg.jpg",
    width: "100%"
  };

  render() {
    return (
      <div className="HomePage">
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <HeadingOne data={this.HeadingSectionTitle} />
        <BodyOne data={this.HeadingSectionDescription} />
        <ImageOne data={this.CseImg} />
        <SideNav />
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

export default SHDepartment;
