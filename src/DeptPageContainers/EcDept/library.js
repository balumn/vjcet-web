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
      "Department Library is one of the Departmental support services of Viswajyothi College of Engg. And Tech in addition to the Central Library. The library provides access to various full texts, journals and magazines. The Department library is well equipped with modern facilities and resources in the form of CD-ROM, books, journals, project reports, seminar reports etc. The mission of the Central library is to provide information services and access to academic resources to support the scholarly and informational needs of the Department's user community.   "
  };
  DeptLibDescriptionTwo = {
    instanceID: "DeptLibDescriptionTwo",
    title:
      "The library has a collection of more than 900 books, 60 CDs and other magazines. The collection of books is strong in all the aspects of Electronics and Communication Engineering with respect to the academic syllabus. All the students and staffs of ECE Department can avail this facility."
  };
  DeptLibDescriptionThree = {
    instanceID: "DeptLibDescriptionThree",
    title:
      "The library opens on all working days. The book issue days to students are TUESDAY and FRIDAY (12.35 PM to 1.25 PM and 4.15 PM to 4.45 PM)."
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
