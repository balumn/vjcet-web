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
      "To be a centre of excellence in IT learning and provide value based training to mould students as successful IT professionals."
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1.  To provide an intellectually stimulating and academically vibrant learning environment for students and train them in the basic as well as advanced concepts, knowledge, technology and skills of IT."
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2.  To promote a nurturing and caring environment and prepare students to achieve their academic and career goals in a globally competitive marketplace."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3.  To mould students into ethical and competent professionals who will contribute to the betterment of the community"
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
        </div>
      </div>
    );
  }
}

export default Vision;
