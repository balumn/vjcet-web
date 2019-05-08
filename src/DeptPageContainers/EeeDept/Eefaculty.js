import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class EEFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "353.jpg",
    width: "50%",
    name: "Dr. B.Aruna",
    content: "Head of Department"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "352.jpg",
    width: "50%",
    name: "Dr. K.K. Rajan",
    content: "Professor"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "108.jpg",
    width: "50%",
    name: "Dr. Sony Kurian",
    content: "Associate Professor"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "109.jpg",
    width: "50%",
    name: "Ms. Cini K",
    content: "Associate Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "110.jpg",
    width: "50%",
    name: "Ms. Seethamma George",
    content: "Assistant Professor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "EEFAC107.jpg",
    width: "50%",
    name: "Ms. Smitha Jacob",
    content: "Assistant Professor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "EEFAC108.jpg",
    width: "50%",
    name: "Ms. Mereya Baby",
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "115.jpg",
    width: "50%",
    name: "Mr. Dileepkumar P",
    content: "Assistant Professor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "117.jpg",
    width: "50%",
    name: "Mr. Babu T Chacko",
    content: "Assistant Professor"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "EEFAC112.jpg",
    width: "50%",
    name: "Mr. Sharone Varghese",
    content: "Assistant Professor"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "120.jpg",
    width: "50%",
    name: "Ms. Jis Jose",
    content: "Assistant Professor"
  };
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "EEFAC115.jpg",
    width: "50%",
    name: "Ms. Neena Skaria",
    content: "Assistant Professor"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "122.jpg",
    width: "50%",
    name: "Ms. Breeza Paulose",
    content: "Assistant Professor"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "123.jpg",
    width: "50%",
    name: "Ms. Jane Maria S",
    content: "Assistant Professor"
  };
  Cefaculty15 = {
    instanceID: "Cefaculty15",
    image: "124.jpg",
    width: "50%",
    name: "Mr. Jomu M George",
    content: "Assistant Professor"
  };
  Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "294.jpg",
    width: "50%",
    name: "Ms. Neena Alex",
    content: "Assistant Professor"
  };
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "293.jpg",
    width: "50%",
    name: "Ms. Seena Paul",
    content: "Assistant Professor"
  };
  Cefaculty18 = {
    instanceID: "Cefaculty18",
    image: "360.jpg",
    width: "50%",
    name: "Ms. Steffy Tresa Loui",
    content: "Assistant Professor"
  };
  Cefaculty19 = {
    instanceID: "Cefaculty19",
    image: "112.jpg",
    width: "50%",
    name: "Mr. Aneesh Kurian(On Leave)",
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

export default EEFaculty;
