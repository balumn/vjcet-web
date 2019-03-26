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
      "Electronics and Communication Engineering (ECE) is a swiftly advancing field, with new ideas emerging every other second. There are a lot of exciting avenues to explore and create even better ideas. With technology becoming all pervasive in everyday life, opportunities for electronic engineers are endless. The ECE department at VJCET prepares students for careers in this constantly evolving discipline."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "The department of Electronics & Communication Engineering was established in the year 2001. B.Tech Electronics & Communication Engineering program was accredited by NBA in 2010 and again renewed in June 2018 for another three years. The Department is managed by devoted and diligent staff members and well equipped with all modern facilities. The first batch of ECE students from Viswajyothi passed out in 2005. Dept. offers both undergraduate (B. Tech.) and postgraduate (M. Tech.) programs. The annual intake of the B. Tech. program is 120 students and that of the M. Tech. is 24."
  };
  ProgramDescriptionThree = {
    instanceID: "ProgramDescriptionThree",
    title:
      "Our goal is to develop the department as a Center of Excellence in the field Electronics & Communication Engineering. For personality development, more emphasis is laid on the development of general, intellectual, human and social qualities which are necessary for the successful practice of the profession. The laboratory facilities were constantly upgraded to take care of the technological developments in the areas of Electronics and Telecommunications."
  };

  render() {
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.ProgramHeading} />
        <Bodythree data={this.ProgramDescriptionOne} />
        <Bodythree data={this.ProgramDescriptionTwo} />
        <Bodythree data={this.ProgramDescriptionThree} />
      </div>
    );
  }
}

export default Program;
