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
      "The Department of Computer Science and Engineering maintains a books enriched library where its primary aim is to support the student of the institution for education.  The Library was established in 2006.  The library has a collection of more than 600 books. Besides books the Library possesses B.Tech project and seminar reports, Monographs, Lab Manuals, Question papers, CD-ROMs, Internet facility. The departmental library serve the academic disciplines bearing their names. "
  };
  DeptLibDescriptionTwo = {
    instanceID: "DeptLibDescriptionTwo",
    title:
      "The collection is strong in all aspects with special strengths in C programming, Software Engineering, Automata Theory, System Programming, Computer Architecture and Organization, Data Structures, Microprocessors, Database Management System and also books on  Digital Electronics, Humanities, Management."
  };
  DeptLibDescriptionThree = {
    instanceID: "DeptLibDescriptionThree",
    title:
      "It has a carpet area of about 500 square feet. The library opens from 8.45 a.m. to 4.30 p.m. except Saturdays and Sundays. The library collection is arranged subject-wise. The library is maintaining records of all Purchased/Donated books, CDS, Seminar Reports/Project Reports/Magazines/Monographs/Lab Manual/Previous Year Question Papers. Members can search and view the status (Available/Not Available) of each searched item through the software.  The library is also maintaining all Issue/Deposit/Fine reports and it will be periodically updates at the end of each semesters."
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
