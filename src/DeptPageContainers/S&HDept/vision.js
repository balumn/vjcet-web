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
      "To disseminate human values and enable professional development giving new meaning to Science and Engineering education."
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1	To inspire, attract and help students love natural science, mathematics and humanities."
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2	To advance Science, Engineering and innovation for the benefit of all, adeptly facing the challenges of our society."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3	To promote soft skills, specially to enhance communication skills among Engineering Undergraduates at our college."
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
