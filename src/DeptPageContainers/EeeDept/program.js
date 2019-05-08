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
      "The Department of Electrical and Electronics Engineering of VJCET was established in the year 2004, with eminent and well qualified faculty and excellent infra structure. The department is recognized for excellence in teaching and service to the profession and it offers Undergraduate Programme with an intake of 60 students. In a very short spell the department could emerge with five University ranks. The academic strength of the faculty is reflected by the alumni, many of whom are in the top echelons of industry and academicia both in India and abroad. The Department has been granted accreditation for 3 years(upto 30th June 2021)."
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
