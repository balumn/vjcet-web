import React, { Component } from "react";
import "./HomePage.css";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import AcademicPara from "./AcademicsContainers/AcademicsPara"
import AcademicList from "./AcademicsContainers/AcademicsList"

class Academics extends Component {
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
    ManagmentTitle = {
        instanceID: "ManagmentTitle",
        title: "Management"
    };
    ManagmentText1 = {
        instanceID: "ManagmentText1",
        title:
            "Viswajyothi College of Engineering and Technology (VJCET) is a private self financing Engineering College, established in 2001 and run by the Catholic Diocese of Kothamangalam. 'Service of GOD through service of Humanity' is the driving motto of the Kothamangalam Diocese. The core edge of the management is to establish a college which is unique in identity where education and values are conveyed in an bonafide Christian environment conducive to nurturing Christian ethics such as faith in God, love for their fellow beings and fidelity to the motherland."
    };
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <AcademicList />
                <AcademicPara />
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

export default Academics;
