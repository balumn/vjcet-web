import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class Program extends Component {
  state = {};
  ProgramHeading = {
    instanceID: "ProgramHeading",
    title: "Program"
  };
  ProgramDescriptionOne = {
    instanceID: "ProgramDescriptionOne",
    title:
      "•	IT Department of VJCET was established in the year 2001 with an intake of 45 students."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "•	In 2002 the intake is amplified to 60 students."
  };
  ProgramDescriptionThree = {
    instanceID: "ProgramDescriptionThree",
    title:
      "•	The department provides its students an environment that stimulates their intellectual growth and personality development. "
  };
  ProgramDescriptionFour = {
    instanceID: "ProgramDescriptionFour",
    title:
      "•	Infrastructure facilities are excellent with well-equipped computer labs and classrooms."
  };
  render() {
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.ProgramHeading} />
        <Bodythree data={this.ProgramDescriptionOne} />
        <Bodythree data={this.ProgramDescriptionTwo} />
        <Bodythree data={this.ProgramDescriptionThree} />
        <Bodythree data={this.ProgramDescriptionFour} />
      </div>
    );
  }
}

export default Program;
