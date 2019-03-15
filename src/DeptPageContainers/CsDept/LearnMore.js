import React, { Component } from "react";
import "./FacilitiesSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyOne from "../Components/Texts/BodyOne";
import FacilitiesList from "./LocalContainers/FacilitiesList";

class FacilitiesSection extends Component {
  LearnMoreTitle = {
    instanceID: "LearnMoreSectionTitle",
    title: "Enjoy all these Facilities"
  };

  LearnMoreSectionDescription = {
    instanceID: "LearnMoreSectionDescription",
    title: "Students are welcome to use these facilities on their own time"
  };

  LearnMoreListOne = {
    instanceID: "LearnMoreListOne",
    image: "FacilitiesOne.png",
    title: "Hostels"
  };

  LearnMoreListTwo = {
    instanceID: "LearnMoreListTwo",
    image: "FacilitiesTwo.png",
    title: "Fitness Center"
  };

  LearnMoreListThree = {
    instanceID: "LearnMoreListThree",
    image: "FacilitiesThree.svg",
    title: "Networking and Internet facilities. 1001 Mbps Wi-Fi Speeds."
  };

  LearnMoreListFour = {
    instanceID: "LearnMoreListFour",
    image: "FacilitiesFour.png",
    title: "On Campus Canteens, Cafeteria, ATMs, Store and Hospital"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="LearnMoreSection" id={instanceID}>
        <div className="LearnMoreSectionCard">
          <HeadingOne data={this.LearnMoreSectionTitle} />
          <BodyOne data={this.LearnMoreSectionDescription} />
          <FacilitiesList data={this.LearnMoreListOne} />
          <FacilitiesList data={this.LearnMoreListTwo} />
          <FacilitiesList data={this.LearnMoreListThree} />
        </div>
      </div>
    );
  }
}

export default FacilitiesSection;
