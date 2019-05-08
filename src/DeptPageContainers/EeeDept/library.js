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
      "The Department of Electrical and Electronics Engineering maintains a library where its primary aim is to improve the knowledge of the users by effectively utilizing the timely updated resources and to facilitate student satisfaction through high quality services. The Library possesses Text books, Reference Books, B.Tech Projects, Seminar Reports, Lab Manuals and Question paper. The departmental library serves the academic disciplines bearing their names."
  };
  DeptLibDescriptionTwo = {
    instanceID: "DeptLibDescriptionTwo",
    title:
      " The collection is strong in all aspects with special strengths in Electrical Machines, Power System Engineering, Electronic Circuits, Digital Circuits, Control Engineering, Electromagnetic Theory, Network Theory, Communication Engineering, Computer Programming, Microprocessors and Micro Controllers and Power Electronics. The Department Library can be used by the students during working days."
  };
  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLibHeading} />
        <Bodythree data={this.DeptLibDescriptionOne} />
        <Bodythree data={this.DeptLibDescriptionTwo} />
      </div>
    );
  }
}

export default Library;
