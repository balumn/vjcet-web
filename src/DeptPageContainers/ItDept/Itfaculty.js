import React, { Component } from "react";
import "./faculty.css";
import FacultyData from "../../Components/FacultyData";
class Faculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "180.jpg",
    width: "30%",
    name: "Mrs. Anju Susan George",
    content: "Head of Department"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "181.jpg",
    width: "30%",
    name: "Mrs. Jesline Joseph",
    content: "Assistant Professor"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "183.jpg",
    width: "30%",
    name: "Mrs. Juliet A Murali",
    content: "Assistant Professor"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "184.jpg",
    width: "30%",
    name: "Mrs. Ann Preetha Jose",
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "185.jpg",
    width: "30%",
    name: "Mrs. Tiny Molly V",
    content: "Assistant Professor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "186.jpg",
    width: "30%",
    name: "Mr. Prince Kurian",
    content: "Assistant Professor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "187.jpg",
    width: "30%",
    name: "Mrs. Salini Dev P V",
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "188.jpg",
    width: "30%",
    name: "Mr. Santhanu P Mohan",
    content: "Assistant Professor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "189.jpg",
    width: "30%",
    name: "Mrs. Diana Baby",
    content: "Assistant Professor"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "354.jpg",
    width: "30%",
    name: "Dr. Sheela V.K.",
    content: "Associate Professor"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "120.jpg",
    width: "30%",
    name: "Mrs. Jis Jose",
    content: "Assistant Professor"
  };
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "EEFAC115.jpg",
    width: "30%",
    name: "Miss. Neena Skaria",
    content: "Assistant Professor"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "122.jpg",
    width: "30%",
    name: "Mrs. Breeza Paulose",
    content: "Assistant Professor"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "123.jpg",
    width: "30%",
    name: "Mrs. Jane Maria S",
    content: "Assistant Professor"
  };
  Cefaculty15 = {
    instanceID: "Cefaculty15",
    image: "124.jpg",
    width: "30%",
    name: "Mr. Jomu M George",
    content: "Assistant Professor"
  };
  Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "294.jpg",
    width: "30%",
    name: "Mrs. Neena Alex",
    content: "Assistant Professor"
  };
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "293.jpg",
    width: "30%",
    name: "Mrs. Seena Paul",
    content: "Assistant Professor"
  };
  Cefaculty18 = {
    instanceID: "Cefaculty18",
    image: "360.jpg",
    width: "30%",
    name: "Miss. Steffy Tresa Loui",
    content: "Assistant Professor"
  };
  Cefaculty19 = {
    instanceID: "Cefaculty19",
    image: "ECFAC120.jpg",
    width: "30%",
    name: "Mrs. Manju Thomas T",
    content: "Assistant Professor"
  };
  Cefaculty20 = {
    instanceID: "Cefaculty20",
    image: "157.jpg",
    width: "30%",
    name: "Mr. Krishnendu K",
    content: "Assistant Professor"
  };
  Cefaculty21 = {
    instanceID: "Cefaculty21",
    image: "158.jpg",
    width: "30%",
    name: "Mrs. Rose Mary Kuruvithadam",
    content: "Assistant Professor"
  };
  Cefaculty22 = {
    instanceID: "Cefaculty22",
    image: "ECFAC123.jpg",
    width: "30%",
    name: "Mrs. Priya G L",
    content: "Assistant Professor"
  };
  Cefaculty22 = {
    instanceID: "Cefaculty22",
    image: "ECFAC126.jpg",
    width: "30%",
    name: "Mrs. Femy John",
    content: "Assistant Professor"
  };

  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cefaculty1} />
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
        </div>
      </div>
    );
  }
}

export default Faculty;
