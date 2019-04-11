import React, { Component } from "react";
import "./DepartmentSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyOne from "../Components/Texts/BodyOne";
import DepartmentList from "./LocalContainers/DepartmentList";
import { Link } from "react-router-dom";
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
    title: "Civil (CE)",
    description:
      "With its multifaceted faculty continues to maintain and cultivate its strong links with the infrastructural industry developing the students to assure the highest quality education buoyed by our state of the art laboratories in order to familiarize them with the practical aspects of their trade."
  };

  DepartmentListTwo = {
    instanceID: "DepartmentListTwo",
    title: "Computer Science (CSE)",
    description:
      "With the strength of preparing competent Computer Scientists, the department aspires to play a lead role in national vision of creating the futuristic knowledge economy through creativity and innovation in Computer Technologies."
  };

  DepartmentListThree = {
    instanceID: "DepartmentListThree",
    title: "Electronics & Communication (ECE)",
    description:
      "In this era of globalization where the whole world is well knit and networked, the electronics engineering students are transformed with the practical and technological aspects of the newly evolving technologies."
  };

  DepartmentListFour = {
    instanceID: "DepartmentListFour",
    title: "Electrical & Electronics (EEE)",
    description:
      "The Electrical and electronics engineers are working today in all spheres of modern society, be it internet, power systems, DC and AC transmission systems , a quality engineer with the ability to explore, experiment and exhibit are refined. "
  };

  DepartmentListFive = {
    instanceID: "DepartmentListFive",
    title: "Information Technology (IT)",
    description:
      "With the excellence in providing the right environment for development of physical, intellectual, emotional and spiritual quotients with a view to produce total quality engineers preparing them to face challenges of modern information society."
  };

  DepartmentListSix = {
    instanceID: "DepartmentListSix",
    title: "Mechanical (ME)",
    description:
      "The students of Mechanical Engineering are provided with the most advanced equipment in our laboratories on which to experiment and innovate thereby moulding students  by coupling the theoretical knowledge with the industry exposure."
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
        <Link to="/departments/ce" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListOne} />
        </Link>
        <Link to="/departments/cse" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListTwo} />
        </Link>
        <Link to="/departments/ece" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListThree} />
        </Link>
        <Link to="departments/eee" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListFour} />
        </Link>
        <Link to="departments/it" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListFive} />
        </Link>
        <Link to="departments/me" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListSix} />
        </Link>
        <a href="http://www.vjcetmba.in/" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListSeven} />
        </a>
        <Link to="departments/s&h" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListEight} />
        </Link>
      </div>
    );
  }
}

export default DepartmentSection;
