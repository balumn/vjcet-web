import React, { Component } from "react";
import FacultyData from "../Components/FacultyData";
class Faculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Joseph Cyriac.jpg",
    width: "50%",
    name: "Mr. Joseph T Cyriac",
    content: "Placement Director"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "C Mavin.JPG",
    width: "50%",
    name: "Mr.C.Mavin",
    content: "Assistant Professor & Placement Officer"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "John Odackal.jpg",
    width: "50%",
    name: "Mr. John C Odackal",
    content: "Training Officer"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "SIBY BABY.jpg",
    width: "50%",
    name: "Mr. Siby Baby",
    content: "Assistant Placement Officer"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "IMG_7641.jpg",
    width: "50%",
    name: "Mr. Sanoj Saju",
    content: "Assistant Placement Officer"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "342.jpg",
    width: "50%",
    name: "Mrs. Anitha Rajan",
    content: "IQAC Placement Co-ordinator"
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
        </div>
      </div>
    );
  }
}

export default Faculty;
