import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class ITStaff extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "itfac004.jpg",
    width: "50%",
    name: "Mrs. Preethy Joseph",
    content: "Computer Programmer"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "194.jpg",
    width: "50%",
    name: "Mr. Shaji A Varghese",
    content: "Trade Instructor"
  };

  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cestaff1} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty2} />
          </div>
        </div>
      </div>
    );
  }
}

export default ITStaff;
