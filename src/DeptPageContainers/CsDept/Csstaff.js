import React, { Component } from "react";
import "./faculty.css";
import FacultyData from "../../Components/FacultyData";
class Faculty extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "93.jpg",
    width: "30%",
    name: "Mr. James R Alex",
    content: "System Engineer"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "94.jpg",
    width: "30%",
    name: "Mr. Lijo Mathew",
    content: "Computer Programmer"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "95.jpg",
    width: "30%",
    name: "Mr. Sijo Jose",
    content: "Computer Programmer"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "96.jpg",
    width: "30%",
    name: "Mr. Manoj Francis",
    content: "Computer Programmer"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "97.PNG",
    width: "30%",
    name: "Mrs. Neethu Joseph",
    content: "Computer Programmer"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "98.jpg",
    width: "30%",
    name: "Mr. George Sebastian",
    content: "Computer Programmer"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "99.jpg",
    width: "30%",
    name: "Mrs. K G Sindhu",
    content: "Instructor Grade II"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "100.jpg",
    width: "30%",
    name: "Mrs. Sheepa Cyriac",
    content: "Instructor Grade II"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty9",
    image: "101.jpg",
    width: "30%",
    name: "Mr. Sijo Mathew",
    content: "Network Technician"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "102.jpg",
    width: "30%",
    name: "Mrs. Joicy K Jose",
    content: "Instructor Grade II"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "103.jpg",
    width: "30%",
    name: "Mr. Jose Thomas",
    content: "Hardware Technician"
  };
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "104.JPG",
    width: "30%",
    name: "Mr. Justin Peter",
    content: "Hardware Technician"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "CSSTF113.jpg",
    width: "30%",
    name: "Mr. Eldhose Paul K",
    content: "Hardware Technician"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "106.jpg",
    width: "30%",
    name: "Mr. Anoop C",
    content: "Hardware Technician"
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
          <div>
            <FacultyData data={this.Cefaculty12} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty13} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty14} />
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty;
