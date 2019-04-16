import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import BodyOne from "../../Components/Texts/BodyOne";
class Vision extends Component {
  state = {};
  VisionHeading = {
    instanceID: "VisionHeading",
    title: "Vision"
  };
  VisionDescription = {
    instanceID: "VisionDescription",
    title:
      "Moulding Electronics Engineers with Professional Competence and Global outlook"
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1.  To create a vibrant academic ambience conducive for progressive learning"
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2.  Build up excellent infrastructure and lab facilities to train the students in the current & emerging technology."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3.  Maintain well qualified faculty who are willing to upgrade their knowledge continuously."
  };
  MissionListFour = {
    instanceID: "MissionListFour",
    title:
      "4.  Groom students towards successful careers by facilitating industry-institute relationships and value addition through regular skill-development programmes"
  };
  render() {
    return (
      <div>
        <div className="Vision&Mission" id="vision&mission">
          <HeadingOne data={this.VisionHeading} />
          <BodyOne data={this.VisionDescription} />
        </div>
        <div className="Mission" id="mission">
          <HeadingOne data={this.MissionHeading} />
          <Bodythree data={this.MissionListOne} />
          <Bodythree data={this.MissionListTwo} />
          <Bodythree data={this.MissionListThree} />
          <Bodythree data={this.MissionListFour} />
        </div>
      </div>
    );
  }
}

export default Vision;
