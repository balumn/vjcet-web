import React, { Component } from "react";
import "./VisionSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import HeadingThree from "../Components/Texts/HeadingThree";
import BodyOne from "../Components/Texts/BodyOne";

class VisionSection extends Component {
  VisionSectionATitle = {
    instanceID: "VisionSectionTitle",
    title: "Vision and Mission"
  };

  VisionSectionABody = {
    instanceID: "VisionSectionBody",
    title:
      'Viswajyothi is the lamp of God which brings light to the whole world. It aims to convey glow for the whole world and to bring all to radiance from darkness. "Service of GOD through service of Humanity" is the driving motto of the Kothamangalam Diocese. Viswajyothi College of Engineering & Technology is yet another hallmark of the commitment and experience of the Kothamangalam Diocese in the field of education.'
  };

  VisionSectionBTitle = {
    instanceID: "VisionSectionTitle",
    title: "Vision"
  };

  VisionSectionBDescription = {
    instanceID: "VisionSectionDescription",
    title:
      '"Moulding Engineers par Excellence with Integrity, Fairness and Human Values"'
  };

  VisionSectionBBody = {
    instanceID: "VisionSectionBody",
    title:
      "Vision of Viswajyothi College of Engineering and Technology is to mould Engineers for tomorrow for the welfare of mankind and society. We aim to give quality education for students with value added thoughts. Our academic motto includes quality education, Ethical Values and Spiritual deeds and conducts of all in Viswajyothi Family."
  };

  MissionSectionTitle = {
    instanceID: "MissionSectionTitle",
    title: "Missions"
  };

  MissionSectionOne = {
    instanceID: "MissionSectionOne",
    title:
      "We commit to develop the institution into a Center of Excellence   of International Standards."
  };

  MissionSectionTwo = {
    instanceID: "MissionSectionTwo",
    title:
      "We guide and mould our students in the attainment of intellectual and professional competence for successfully coping with the rapid and challenging advancements in technologies and the ever changing world of business, industry and services."
  };

  MissionSectionThree = {
    instanceID: "MissionSectionThree",
    title:
      "We help and support our students in their personal growth shaping them into mature and responsible individuals."
  };

  MissionSectionFour = {
    instanceID: "MissionSectionFour",
    title:
      "We strive to cultivate a sense of social and civic responsibility in our students, empowering them to serve the humanity."
  };

  MissionSectionFive = {
    instanceID: "MissionSectionFive",
    title:
      "We promise to ensure a free environment where quest for the truth is encouraged."
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="VisionSection" id={instanceID}>
        <div className="VisionSectionA">
          <HeadingOne data={this.VisionSectionATitle} />
          <BodyOne data={this.VisionSectionABody} />
        </div>
        <div className="VisionSectionB">
          <HeadingOne data={this.VisionSectionBTitle} />
          <HeadingThree data={this.VisionSectionBDescription} />
          <BodyOne data={this.VisionSectionBBody} />
        </div>

        <div className="VisionSectionC">
          <HeadingOne data={this.MissionSectionTitle} />
          <BodyOne data={this.MissionSectionOne} />
          <BodyOne data={this.MissionSectionTwo} />
          <BodyOne data={this.MissionSectionThree} />
          <BodyOne data={this.MissionSectionFour} />
          <BodyOne data={this.MissionSectionFive} />
        </div>
      </div>
    );
  }
}

export default VisionSection;
