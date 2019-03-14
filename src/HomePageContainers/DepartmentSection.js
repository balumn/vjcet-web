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
      "Accredited by NBA on June 2018 for three years. The annual intake of the B. Tech. program is 120 students and that of the M. Tech. is 24. Well-equipped computer labs, classrooms and libraries."
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
      "The department is recognized for excellence in teaching and service to the profession and it offers Undergraduate Programme with an intake of 90 students. "
  };

  DepartmentListFour = {
    instanceID: "DepartmentListFour",
    title: "Mechanical (ME)",
    description:
      "Accredited by NBA on June 2018 for three years. Continued research and development have led to the development better machines and processes helping the mankind to ease the tasks & to achieve the never thought possible dreams."
  };

  DepartmentListFive = {
    instanceID: "DepartmentListFive",
    title: "Civil (CE)",
    description:
      "Accredited by NBA on June 2018 for three years. It is an exciting profession because at the end of the day you can see the results of your work, whether that be a house or a high-rise building, a subway station or a hydroelectric dam."
  };

  DepartmentListSix = {
    instanceID: "DepartmentListSix",
    title: "Information Technology (IT)",
    description:
      "It offers undergraduate program with an annual intake of 60 students .The scope of this discipline includes the development of systems based on computer and information technology."
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
