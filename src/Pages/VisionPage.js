import React, { Component } from "react";
import "./HomePage.css";
import "./AboutPage.css";
import VisionSection from "../HomePageContainers/VisionSection";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";

class VisionPage extends Component {
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
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                {/* <ImageOne data={this.VisionImg}></ImageOne> */}
                <VisionSection data={this.HomePageFacilitiesSection} />
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

export default VisionPage;