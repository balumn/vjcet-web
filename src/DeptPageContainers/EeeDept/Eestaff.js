import React, { Component } from "react";
import "./faculty.css";
import FacultyData from "../../Components/FacultyData";
class Faculty extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "EESTF101.jpg",
    width: "30%",
    name: "Mr. Sabu Valiamattom",
    content: "Instructor Grade I"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "129.jpg",
    width: "30%",
    name: "Mr. Dhinu Paul",
    content: "Instructor Grade II"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "130.jpg",
    width: "30%",
    name: "Mrs. Binumol George",
    content: "Computer Programmer"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "131.jpg",
    width: "30%",
    name: "Mr. Biju Joseph",
    content: "Trade Instructor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "132.jpg",
    width: "30%",
    name: "Mr. Bijo Joseph",
    content: "Trade Instructor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "133.jpg",
    width: "30%",
    name: "Mr. Dayas M Edassery",
    content: "Trade Instructor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "134.jpg",
    width: "30%",
    name: "Mr. Gince Kurian",
    content: "Tradesman"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "135.jpg",
    width: "30%",
    name: "Mr. Shiju P Mathew",
    content: "Tradesman"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty9",
    image: "136.jpg",
    width: "30%",
    name: "Mr. Bijo Jose",
    content: "Tradesman"
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
        </div>
      </div>
    );
  }
}

export default Faculty;
