import React, { Component } from "react";
import "./faculty.css";
import FacultyData from "../Components/FacultyData";
class Faculty extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "223.jpg",
    width: "30%",
    name: "Mr. Shajan P J",
    content: "Technical Officer"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "224.jpg",
    width: "30%",
    name: "Mr. Benny Sebastian",
    content: "Instructor-Grade I"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "226.jpg",
    width: "30%",
    name: "Mr. Akhilraj P R",
    content: "Instructor-Grade I"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "227.jpg",
    width: "30%",
    name: "Mr. Nixon George",
    content: "CAD Instructor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "228.jpg",
    width: "30%",
    name: "Mr. Biju Varghese",
    content: "Instructor-Grade II"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "229.jpg",
    width: "30%",
    name: "Mr. Roji Mathew",
    content: "Trade Instructor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "230.JPG",
    width: "30%",
    name: "Mr. P.M. Saju",
    content: "Trade Instructor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "232.jpg",
    width: "30%",
    name: "Mr. Binu Paul",
    content: "Trade Instructor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty9",
    image: "233.jpg",
    width: "30%",
    name: "Mr. Manoj K P",
    content: "Trade Instructor"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "235.jpg",
    width: "30%",
    name: "Mr. Shaiju E G",
    content: "Trade Instructor"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "239.jpg",
    width: "30%",
    name: "Mr. Ullas K Mathew",
    content: "Instructor-Grade II"
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
          <div>
            <FacultyData data={this.Cefaculty3} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty4} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty5} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty6} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty7} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty8} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty9} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty10} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty11} />
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty;
