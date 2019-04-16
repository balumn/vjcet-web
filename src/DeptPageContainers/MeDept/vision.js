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
      "Moulding socially committed engineers capable to meet the global challenges in the mechanical engineering stream"
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1	To provide ample facilities to foster excellent ambiance for teaching learning process in the department. "
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2	To enhance the creative ideas, analytical talents and soft skills in the students to cope up with the emerging trend in technical field. "
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3	To enable the students to meet real life problems in mechanical engineering with a zeal to human and ethical values."
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
