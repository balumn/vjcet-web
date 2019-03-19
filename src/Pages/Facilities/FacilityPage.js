import React, { Component } from "react";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";

class FacilityPage extends Component {
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
    HomePageVisionSection = {
      instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
      instanceID: "HomePageFacilitiesSection"
    };
  
    render() {
      return (
        <div>
          <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
          
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
  
  export default FacilityPage;