import React, { Component } from "react";
import "../HomePage.css";
import "../AboutPage.css";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";

class AcademicsPara extends Component {
  state = { showMenu: false };

  openMenu = () => {
    console.log("opening Menu");
    this.setState({ showMenu: true });
  };
  closeMenu = () => {
    this.setState({ showMenu: false });
  };
  HomePageHeader = {
    instanceID: "HomePageHeader"
  };
  HomePageFooter = {
    instanceID: "HomePageFooter"
  };

  para1 = {
    instanceID: "para1",
    title:
      "The various departments are responsible for the academic activities which include Teaching, Research and Industrial Consultancy. The course of study is structured into semester programs. Each semester has minimum of sixty working days. The medium of instruction is English."
  };
  para2 = {
    instanceID: "para2",
    title:
      "Students are evaluated on a continuous basis throughout the semester. The internal evaluation is done by the faculty. The internal marks of each semester are awarded as the sum of the evaluations & code of conduct of the student."
  };
  para3 = {
    instanceID: "para3",
    title:
      "Apart from the academics the students of Viswajyothi are also enriched and engaged with various extracurricular and co curricular activities. The management and college union is organizing cultural, spiritual and sports activities on a regular basis. The chapters of various Professional Bodies are organizing special lectures, workshops, training programs and exhibitions. A number of conferences, Faculty Development Programs and workshops are organized by various Departments which attract participation from a range of scholars."
  };

  render() {
    return (
      <div className="AcademicsPara" id="AcademicsPara1">
        <div className="inner-para">
          <BodyOneJustified data={this.para1} />
          <p>
            <BodyOneJustified data={this.para2} />
          </p>
          <p>
            <BodyOneJustified data={this.para3} />
          </p>
        </div>
      </div>
    );
  }
}
export default AcademicsPara;
