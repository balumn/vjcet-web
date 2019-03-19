import React, { Component } from "react";
import "./DepartmentSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyOne from "../Components/Texts/BodyOne";
import DepartmentList from "./LocalContainers/DepartmentList";

class DepartmentSection extends Component {
  DepartmentSectionTitle = {
    instanceID: "DepartmentSectionTitle",
    title: "Departments"
  };

  DepartmentSectionSubTitle = {
    instanceID: "DepartmentSectionSubTitle",
    title:
      "All courses are NBA accredited.We have UG and PG courses ranging from B.Tech, M.Tech, MBA and Science & Humanities"
  };

  DepartmentListOne = {
    instanceID: "DepartmentListOne",
    title: "Computer Science (CSE)",
    description:
      "With the strength of preparing competent Computer Scientists, the department aspires to play a lead role in national vision of creating the futuristic knowledge economy through creativity and innovation in Computer Technologies."
  };

  DepartmentListTwo = {
    instanceID: "DepartmentListTwo",
    title: "Electronics & Communication (ECE)",
    description:
      "Accredited by NBA on June 2018 for three years. The annual intake of the B. Tech. program is 120 students and that of the M. Tech. is 24."
  };

  DepartmentListThree = {
    instanceID: "DepartmentListThree",
    title: "Electrical & Electronics (EEE)",
    description:
      "The Electrical and electronics engineers are working today in all spheres of modern society, be it internet, power systems, DC and AC transmission systems , a quality engineer with the ability to explore, experiment and exhibit are refined"
  };

  DepartmentListFour = {
    instanceID: "DepartmentListFour",
    title: "Mechanical (ME)",
    description:
      "The students of Mechanical Engineering are provided with the most advanced equipment in our laboratories on which to experiment and innovate thereby moulding students  by coupling the theoretical knowledge with the industry exposure."
  };

  DepartmentListFive = {
    instanceID: "DepartmentListFive",
    title: "Civil (CE)",
    description:
      "With its multifaceted faculty continues to maintain and cultivate its strong links with the infrastructural industry developing the students to assure the highest quality education buoyed by our state of the art laboratories in order to familiarize them with the practical aspects of their trade."
  };

  DepartmentListSix = {
    instanceID: "DepartmentListSix",
    title: "Information Technology (IT)",
    description:
      "With the excellence in providing the right environment for development of physical, intellectual, emotional and spiritual quotients with a view to produce total quality engineers preparing them to face challenges of modern information society."
  };

  DepartmentListSeven = {
    instanceID: "DepartmentListSeven",
    title: "Master of Business Administration (MBA)",
    description:
      "A dynamic institute of repute in developing management professionals with value integration for social transformation."
  };

  DepartmentListEight = {
    instanceID: "DepartmentListEight",
    title: "Science & Humanities",
    description:
      "The Department deals in the disciplines of Chemistry, Physics, Mathematics, Statistics, Communicative English and Economics."
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="DepartmentSection" id={instanceID}>
        <HeadingOne data={this.DepartmentSectionTitle} />
        <BodyOne data={this.DepartmentSectionSubTitle} />
        <DepartmentList data={this.DepartmentListOne} />
        <DepartmentList data={this.DepartmentListTwo} />
        <DepartmentList data={this.DepartmentListThree} />
        <DepartmentList data={this.DepartmentListFour} />
        <DepartmentList data={this.DepartmentListFive} />
        <DepartmentList data={this.DepartmentListSix} />
      </div>
    );
  }
}

export default DepartmentSection;
