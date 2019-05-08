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
      "Department of Computer Science and Engineering is offering both Under graduate and Post graduate courses in Computer Science and Engineering. The total intake in Undergraduate course is 120 per batch and for Post graduation 18 per batch."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "The Under Graduate program started in the year 2001 with an intake of 60 students per batch. Later in July 2007 the intake is amplified to 120 students per batch. In the year 2010 Postgraduate program in Computer Science and Engineering with an intake of 18 students per batch has started. The Department is accredited by National Board of Accreditation (NBA) of AICTE in June 2010. Also the Department applied for NBA accreditation in 2017 and is accredited by NBA on July 2018 for three years."
  };

  render() {
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.ProgramHeading} />
        <Bodythree data={this.ProgramDescriptionOne} />
        <Bodythree data={this.ProgramDescriptionTwo} />
      </div>
    );
  }
}

export default Program;
