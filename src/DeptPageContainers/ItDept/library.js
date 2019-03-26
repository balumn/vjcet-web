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
      "Department Library is one of the Departmental support services of Viswajyothi College of Engineering And Technology in addition to the Central Library. The Department library is equipped with resources in the form of CD-ROM, books, project reports, seminar reports etc."
  };
  DeptLibDescriptionTwo = {
    instanceID: "DeptLibDescriptionTwo",
    title:
      " The library has a collection of more than 300 books, CDs etc. The collection of books is with respect to the academic syllabus. All the students and staffs of IT Department can avail this facility. The library opens on all working days."
  };
  DeptLibDescriptionThree = {
    instanceID: "DeptLibDescriptionThree",
    title:
      "Library In-charge: Mrs. Juliet A Murali , Asst Professor, Department of IT"
  };
  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLibHeading} />
        <Bodythree data={this.DeptLibDescriptionOne} />
        <Bodythree data={this.DeptLibDescriptionTwo} />
        <Bodythree data={this.DeptLibDescriptionThree} />
      </div>
    );
  }
}

export default Library;
