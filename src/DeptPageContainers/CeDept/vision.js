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
      "Building Professionally Competent and Motivated Engineers in the Arena of Civil Engineering with High Professional Ethics"
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1.	To promote a better teaching learning process through academically proficient faculty, full fledged laboratories and excellent infrastructure facilities. "
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2.	To equip the graduates with knowledge, research and practical skills in modern construction practices and techniques."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3.	To inculcate knowledge of sustainability in various domains of Civil Engineering."
  };
  MissionListFour = {
    instanceID: "MissionListFour",
    title:
      "4.	To nurture Civil Engineers into ethically strong and responsible leaders to address global challenges through quality education."
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
