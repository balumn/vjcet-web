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
      "The Mechanical Department Library was started from the inception of the department. The Department Library occupies a unique place in academic and research activities of the Department; it also serves as a central organ of academic activity in the Department. The Department has a rich & vast collection of books, periodicals and reports. It has a total of 220 titles in main mechanical streams areas like production , thermal, design, industrial, machine drawing and engineering graphics .  It also has one copy each of all B.Tech. projects, M.Tech. and Ph.D. dissertations carried out in the department in recent years."
  };

  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLibHeading} />
        <Bodythree data={this.DeptLibDescriptionOne} />
      </div>
    );
  }
}

export default Library;
