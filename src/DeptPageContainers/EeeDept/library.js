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
      "The Department of Electrical & Electronics maintains a library where its primary  aim  is to improve the knowledge of the  users  by effectively  utilizing the timely updated resources  and  to  facilitate student satisfaction through high quality services.The library has a collection of more than 600 books. Moreover the Library possesses B.Tech projects, seminar reports, Lab Manuals and Question paper. The departmental library serves the academic disciplines bearing their names. "
  };
  DeptLibDescriptionTwo = {
    instanceID: "DeptLibDescriptionTwo",
    title:
      " The library has a collection of more than 600 books. Moreover the Library possesses B.Tech projects, seminar reports, Lab Manuals and Question paper. The departmental library serves the academic disciplines bearing their names.The collection is strong in all aspects with special strengths in Electrical Machines, Power System Engineering, Electronic Circuits, Digital Circuits, Control Engineering, Electro magnetic Theory, Network Theory, Communication Engineering, programming, Computer Architecture and Organization, Microprocessors and Micro Controllers, Power Electronics, Linear System Analysis."
  };
  DeptLibDescriptionThree = {
    instanceID: "DeptLibDescriptionThree",
    title:
      "The Department Library can be used by the students any time during the working hours of the department. Students are allowed to take two books at a time. Faculty members are entitled to get 3 books at a time."
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
