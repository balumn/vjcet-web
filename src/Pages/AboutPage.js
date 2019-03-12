import React, { Component } from "react";
import "./AboutPage.css";
import "./HomePage.css";
import VisionSection from "../HomePageContainers/VisionSection";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import AboutVJC from "../AboutPageContainers/AboutVJC"


// import Header from "../Components/Header&Footer/Header";
// import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
// import VisionSection from "../HomePageContainers/VisionSection";

class AboutPage extends Component {
  state = { showMenu: true };

      HomePageHeader = {
        instanceID: "HomePageHeader"
      };
      HomePageFooter = {
        instanceID: "HomePageFooter"
      };
      HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
      };
      HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
      };
    
    
    render () {
        return(
        <div className="HomePage">
          <Header data={this.HomePageHeader} />
          <AboutVJC />
          <VisionSection data={this.HomePageFacilitiesSection} />
          <Footer data={this.HomePageFooter} />
        {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ( "" )}          
        </div>
        )
    }
}

export default AboutPage;