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
      "The Civil Engineers are in a privileged and hugely influential position to innovate, design and build a sustainable future. Hence the mission of the Department is to mould engineers par excellence. In keeping with our mission to develop the institution into a Center of Excellence of International Standards, the department strives to offer best- rated undergraduate education, research contributions, high-end professional consultancy, outreach and manpower training and academic leadership."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "It is our determination to create an excellent work culture and campus atmosphere which inculcates academic integrity and accountability among our faculty as well as students. Comprehensive training is imparted to students for the attainment of intellectual and professional competence. We strive to cultivate a sense of civic and social responsibility among our students by way of our various Forums and Clubs and Annual Renewal & Refresher programmes. We also encourage growth and develop human potential to its fullest, such that intellectually capable and creatively talented Civil Engineers who have concern for the environment and   the society can emerge. The Civil Engineering Department continues the process of building strong links with the building and construction industry."
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
