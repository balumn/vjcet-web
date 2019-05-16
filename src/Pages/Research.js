import React, { Component } from "react";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "./Research.css"
import ButtonTwo from "../Components/Buttons/ButtonTwo";

class Reserch extends Component {
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
    // ResearchImg = {
    //     instanceID: "ResearchImg",
    //     image: "cover2-1.jpg",
    //     width: "93%"
    // }
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Research and Development"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "The Centre for Research & Development was established in 2010 with Prof. Dr. K Babu Joseph formerly Vice Chancellor Cochin University of Science And Technology (CUSAT) as it’s Dean. He has initiated new ideas to kindle the research interest of the staff and students. Dr. K.T. Mathew, Emeritus Professor and former Principal of the college had taken the charge of the Centre in 2014.Presently it’s headed by Dr. Anishin Raj M. M, Associate Professor, CSEDept along with a dedicated and hard working team."
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Some major initiatives taken by CRD are :"
    }
    ReserchWork1 = {
        instanceID: "ReserchWork1",
        title: "A research project on “Development  of Level Sensor  For  Lead Lithium Loop System” was obtained from  Board  of Research in Nuclear Sciences(BRNS), Department of Atomic  Energy, Government  of India for the year 2017 to 2019. This Research project  worth   Rs 33.08 lakhs  is  sanctioned   under Dr. K.K.Rajan , Dean IIC as  Principal  Investigator. Research Project Work is in progress in collaboration with  Institute for  Plasma Research,  Ahmadabad."
    }
    ReserchWork2 = {
        instanceID: "ReserchWork2",
        title: "Research project   titled  “Development of Lead - Lithium to Helium Heat Exchanger and Circulation Type Electrical heater for Heat exchanger Test Facility  (Phase-1)”  was formulated,  got    clearance  from Institute for  Plasma Research,  Ahemdabad  and  accepted by  BRNS   of Rs.29.48 lakhs for the year 2018-2020.Dr. B Aruna is the Principal  Investigator,  Mr.Vinoj  and Dr. K K RAJAN are the Co Investigators."
    }
    ReserchWork3 = {
        instanceID: "ReserchWork3",
        title: "R&D will arrange Summer Internship programme for the interested students (S5-S6) at IITG during the month of April/May, so that they are capable of writing excellent project proposals in the coming year- which is a part of their curriculum under the initiative of Dr. Lovely Mathew."
    }
    ReserchWork4 = {
        instanceID: "ReserchWork4",
        title: "A National Conference on Security, Parallel Processing , Image Processing &Networking(SPIN2K17) has been conducted by R&D cell of VJCET , in association with  Department of CSE, ISTE & CSI student chapter on 8th December 2018."
    }
    ReserchWork5 = {
        instanceID: "ReserchWork5",
        title: "2 week ISTE-STTP on Control systems from 15th -19th, September, 2014 conducted by IIT Kharagpur."
    }
    MoreInfo = {
        instanceID: "MoreInfo",
        title: "For more information:"
    }
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
                <p>
                    <BodyThree data={this.ReserchBody2} />
                </p>
                <div className="inner-para">
                    <ul>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork1} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork2} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork3} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork4} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchWork5} />
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="https://vjcetwebadmin.github.io/downloads/research.pdf" target="_blank" rel="noopener noreferrer" ><BodyThree data={this.MoreInfo} /><ButtonTwo /></a>
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

export default Reserch;