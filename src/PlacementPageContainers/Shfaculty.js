import React, { Component } from "react";
import "./faculty.css";
import FacultyData from "../Components/FacultyData";
class Faculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "242.jpg",
    width: "30%",
    name: "Mrs. Ann Neetha Sabu",
    content: "Head of Department"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "243.jpg",
    width: "30%",
    name: "Mr. Avirachan K.P",
    content: "Assistant Professor"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "SHFAC105.jpg",
    width: "30%",
    name: "Mrs. Viji George",
    content: "Assistant Professor"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "246.jpg",
    width: "30%",
    name: "Mrs. Anila Elizabeth John",
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "SHFAC107.jpg",
    width: "30%",
    name: "Mrs. Rose Mary Baby",
    content: "Assistant Professor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "SHFAC108.jpg",
    width: "30%",
    name: "Mrs. Ancy Jose",
    content: "Assistant Professor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "249.jpg",
    width: "30%",
    name: "Mrs. Jinta Jose",
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "SHFAC110.jpg",
    width: "30%",
    name: "Mrs. Ansu Ann Abraham",
    content: "Assistant Professor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "251.jpg",
    width: "30%",
    name: "Mrs. Manu Sebastiann",
    content: "Assistant Professor"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "252.jpg",
    width: "30%",
    name: "Mr. Tony Augustine",
    content: "Assistant Professor"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "SHFAC113.jpg",
    width: "30%",
    name: "Mr. Jojo P Kuriakose",
    content: "Assistant Professor"
  };
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "SHFAC114.jpg",
    width: "30%",
    name: "Mr. Biju George",
    content: "Assistant Professor"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "281.jpg",
    width: "30%",
    name: "Mr. John Odackal",
    content: "Assistant Professor"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "255.jpg",
    width: "30%",
    name: "Mrs. Deenu Baby",
    content: "Assistant Professor"
  };
  Cefaculty15 = {
    instanceID: "Cefaculty15",
    image: "299.JPG",
    width: "30%",
    name: "Mr. George Kuriakose",
    content: "Assistant Professor"
  };
  Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "329.jpg",
    width: "30%",
    name: "Mrs. Dany Sebatian",
    content: "Assistant Professor"
  };
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "328.png",
    width: "30%",
    name: "Mrs. Ashly Jacob",
    content: "Assistant Professor"
  };
  Cefaculty18 = {
    instanceID: "Cefaculty18",
    image: "331.jpg",
    width: "30%",
    name: "Mr. Robin K. Augustine",
    content: "Assistant Professor"
  };
  Cefaculty19 = {
    instanceID: "Cefaculty19",
    image: "342.jpg",
    width: "30%",
    name: "Mrs. Anitha Rajan",
    content: "Assistant Professor"
  };
  render() {
    return (
      <div className="faculty">
        <div className="facultyContentSH">
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
          <div>
            <FacultyData data={this.Cefaculty15} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty16} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty17} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty18} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty19} />
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty;
