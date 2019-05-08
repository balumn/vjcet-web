import React, { Component } from "react";
import "./vision.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import Bodythree from "../Components/Texts/BodyThree";
import BodyOne from "../Components/Texts/BodyOne";
class Vision extends Component {
  state = {};
  VisionHeading = {
    instanceID: "VisionHeading",
    title: "Vision"
  };
  VisionDescription = {
    instanceID: "VisionDescription",
    title:
      "Training and preparing engineers globally competent and employable."
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1. To provide the best training opportunity as to enhance technical skills, soft skills and thereby employability"
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2. To create awareness among students about the industrial/corporate scenario through invited talks/workshops by experts and alumni."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3. Arrange and organize placement opportunities, participate /conduct campus drives and pool drives."
  };
  ContactHeading = {
    instanceID: "ContactHeading",
    title: "Contact"
  };
  ContactListOne = {
    instanceID: "ContactListOne",
    title: "Mr.C.Mavin "
  };
  ContactListTwo = {
    instanceID: "ContactListTwo",
    title: "Asst. Professor & Placement Officer "
  };
  ContactListThree = {
    instanceID: "ContactListThree",
    title: "Cell:+919446437330 "
  };
  ContactListFour = {
    instanceID: "ContactListFour",
    title: "Phone:0485 2262551 "
  };
  ContactListFive = {
    instanceID: "ContactListFive",
    title: "Email:placement@vjcet.org"
  };
  render() {
    return (
      <div className="Front">
        <div className="Vision" id="vision">
          <HeadingOne data={this.VisionHeading} />
          <BodyOne data={this.VisionDescription} />
        </div>
        <div className="Mission" id="mission">
          <HeadingOne data={this.MissionHeading} />
          <Bodythree data={this.MissionListOne} />
          <Bodythree data={this.MissionListTwo} />
          <Bodythree data={this.MissionListThree} />
        </div>
        <div className="Contact" id="contact">
          <HeadingOne data={this.ContactHeading} />
          <BodyOne data={this.ContactListOne} />
          <BodyOne data={this.ContactListTwo} />
          <BodyOne data={this.ContactListThree} />
          <BodyOne data={this.ContactListFour} />
          <BodyOne data={this.ContactListFive} />
        </div>
      </div>
    );
  }
}

export default Vision;
