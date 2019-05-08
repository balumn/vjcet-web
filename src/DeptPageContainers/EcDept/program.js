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
      "Department is in process of establishment of Center of Excellence in the fields like Electronics & Communication Engineering, VLSI and Embedded Systems."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "Dept. offers both undergraduate (B. Tech.) and postgraduate (M. Tech.) programs. "
  };
  ProgramDescriptionThree = {
    instanceID: "ProgramDescriptionThree",
    title:
      "The annual intake of the B. Tech. program is 120 students and that of the M. Tech. is 24."
  };
  ProgramDescriptionFour = {
    instanceID: "ProgramDescriptionFour",
    title:
      "The department has around 420 students and about 32 teaching staff and 8 non teaching staffs. "
  };
  ProgramDescriptionFive = {
    instanceID: "ProgramDescriptionFive",
    title:
      " With technology becoming all pervasive in everyday life, opportunities for electronic engineers are endless. The ECE department at VJCET prepares students for careers in this constantly evolving discipline."
  };
  render() {
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.ProgramHeading} />
        <Bodythree data={this.ProgramDescriptionOne} />
        <Bodythree data={this.ProgramDescriptionTwo} />
        <Bodythree data={this.ProgramDescriptionThree} />
        <Bodythree data={this.ProgramDescriptionFour} />
        <Bodythree data={this.ProgramDescriptionFive} />
      </div>
    );
  }
}

export default Program;
