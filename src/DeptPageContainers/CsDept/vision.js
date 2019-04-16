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
      "Moulding socially responsible and professionally competent Computer Engineers to adapt to the dynamic technological landscape"
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1.	Foster the principles and practices of computer science to empower life-long learning and   build careers in software and hardware development."
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2.  Impart value education to elevate students to be successful, ethical and effective problem-solvers to serve the needs of the industry, government, society and the scientific community."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3.  Promote industry interaction to pursue new technologies in Computer Science and provide excellent infrastructure to engage faculty and students in scholarly research activities."
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
