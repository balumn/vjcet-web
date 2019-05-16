import React, { Component } from "react";
import "./HomePage.css";
import "./AboutPage.css";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import ResourcesGroup from "../AboutPageContainers/ResourcesGroup/ResourcesGroup";

class SyllabusPage extends Component {
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
    SyllabusImg = {
        instanceID: "SyllabusImage",
        image: "cover2-1.jpg",
        width: "93%"
    }
    Syllabusheading = {
        instanceID: "Syllabusheading",
        title: "Syllabus and Plan"
    }
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                {/* <HeadingOne data={this.Syllabusheading}></HeadingOne> */}
                {/* <ImageOne data={this.SyllabusImg}></ImageOne> */}
                <ResourcesGroup></ResourcesGroup>
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

export default SyllabusPage;