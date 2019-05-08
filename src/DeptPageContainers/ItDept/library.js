import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class Library extends Component {
  state = {};
  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Library"
  };
  DeptLibDescriptionOne = {
    instanceID: "DeptLibDescriptionOne",
    title:
      "•	In addition to central library IT department is supported with a department library."
  };
  DeptLibDescriptionTwo = {
    instanceID: "DeptLibDescriptionTwo",
    title:
      "•	Various resources in the library are CDs, books, project reports, seminar reports etc."
  };
  DeptLibDescriptionThree = {
    instanceID: "DeptLibDescriptionThree",
    title:
      "•	It  has a collection of more than 300 books, CDs etc. with respect to the academic syllabus. "
  };
  DeptLibDescriptionFour = {
    instanceID: "DeptLibDescriptionFour",
    title:
      "•	All the students and staff members of IT Department can avail this facility"
  };
  DeptLibDescriptionFive = {
    instanceID: "DeptLibDescriptionFive",
    title:
      "•	The library opens on all working days."
  };
  DeptLibDescriptionSix = {
    instanceID: "DeptLibDescriptionSix",
    title:
      "•	Library In-charge: Mrs. Juliet A Murali , Asst Professor, Department of IT"
  };
  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLibHeading} />
        <Bodythree data={this.DeptLibDescriptionOne} />
        <Bodythree data={this.DeptLibDescriptionTwo} />
        <Bodythree data={this.DeptLibDescriptionThree} />
        <Bodythree data={this.DeptLibDescriptionFour} />
        <Bodythree data={this.DeptLibDescriptionFive} />
        <Bodythree data={this.DeptLibDescriptionSix} />
      </div>
    );
  }
}

export default Library;
