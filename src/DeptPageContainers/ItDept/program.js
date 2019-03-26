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
      "The Department of Information Technology of VJCET was established in the year 2001 with an annual intake of 45 students at first. Later in 2002 the intake was amplified to 60 students.The department provides the students an environment, that stimulates their intellectual growth and personality development. Infrastructure facilities are excellent with well-equipped computer labs and classrooms, which enables students to develop an interactive attitude among themselves."
  };

  render() {
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.ProgramHeading} />
        <Bodythree data={this.ProgramDescriptionOne} />
      </div>
    );
  }
}

export default Program;
