import React, { Component } from "react";
import "./SideNav.css";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyOne from "../../Components/Texts/BodyOne";
import Bodythree from "../../Components/Texts/BodyThree";
import { HashLink as Link } from "react-router-hash-link";
import HeadingFour from "../../Components/Texts/HeadingFour";
class SideNav extends Component {
  state = {};

  ProfileHeading = {
    instanceID: "ProfileHeading",
    title: "Profile"
  };
  ProfileDescriptionOne = {
    instanceID: "ProfileDescriptionOne",
    title:
      "The department of Electronics & Communication Engineering was established in the year 2001. B.Tech Electronics & Communication Engineering program was accredited by NBA in 2010 and again renewed in June 2018 for another three years. The Department is managed by devoted and diligent staff members and well equipped with all modern facilities. The first batch of ECE students from Viswajyothi passed out in 2005. Dept. offers both undergraduate (B. Tech.) and postgraduate (M. Tech.) programs. The annual intake of the B. Tech. program is 120 students and that of the M. Tech. is 24. Electronics and Communication Engineering (ECE) is a swiftly advancing field, with new ideas emerging every other second. There are a lot of exciting avenues to explore and create even better ideas. With technology becoming all pervasive in everyday life, opportunities for electronic engineers are endless. The ECE department at VJCET prepares students for careers in this constantly evolving discipline. "
  };
  ProfileDescriptionTwo = {
    instanceID: "ProfileDescriptionTwo",
    title:
      "The department consistently organizes National Level Seminars and Symposiums, Short Term Training Programs, Faculty Development Programs sponsored by AICTE - ISTE. The department has produced several university ranks both in B.Tech and M.Tech so far. Our department enjoys very good placement every year in wide spectrum of MNC’s and core industries. One of the major strength of our department is the immense support extended by our Alumni. Our goal is to develop the department as a Center of Excellence in the field Electronics & Communication Engineering. For personality development, more emphasis is laid on the development of general, intellectual, human and social qualities which are necessary for the successful practice of the profession. The laboratory facilities were constantly upgraded to take care of the technological developments in the areas of Electronics and Telecommunications."
  };
  VisionHeading = {
    instanceID: "VisionHeading",
    title: "Vision"
  };
  VisionDescription = {
    instanceID: "VisionDescription",
    title:
      "Moulding Electronics Engineers with Professional Competence and Global outlook"
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1.  To create a vibrant academic ambience conducive for progressive learning"
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2.  Build up excellent infrastructure and lab facilities to train the students in the current & emerging technology."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3.  Maintain well qualified faculty who are willing to upgrade their knowledge continuously."
  };
  MissionListFour = {
    instanceID: "MissionListFour",
    title:
      "4.  Groom students towards successful careers by facilitating industry-institute relationships and value addition through regular skill-development programmes"
  };
  peoHeading = {
    instanceID: "psoHeading",
    title: "PEO"
  };
  peoListOne = {
    instanceID: "peoListOne",
    title: "Our Graduates shall be,  "
  };
  peoListTwo = {
    instanceID: "peoListTwo",
    title:
      "1: Suitably employed in allied industries/services with professional competency and knowledge of modern tools. "
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      " 2: Capable of developing economically viable, technically feasible eco-friendly electronic systems."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title:
      "3: Capable to pursue higher studies/research in the field of engineering and management."
  };

  psoHeading = {
    instanceID: "psoHeading",
    title: "PSO"
  };
  psoListOne = {
    instanceID: "psoListOne",
    title: "Our Students shall be able to,"
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      "1: Design and modify embedded system based products which will find applications in the fields of Communication and Automation."
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      "2: Develop algorithms for real life applications in signal & image processing."
  };
  psoListFour = {
    instanceID: "psoListFour",
    title: " 3: Design efficient low power electronic circuits."
  };
  ProgramHeading = {
    instanceID: "ProgramHeading",
    title: "Program"
  };
  ProgramDescriptionOne = {
    instanceID: "ProgramDescriptionOne",
    title:
      "Electronics and Communication Engineering (ECE) is a swiftly advancing field, with new ideas emerging every other second. There are a lot of exciting avenues to explore and create even better ideas. With technology becoming all pervasive in everyday life, opportunities for electronic engineers are endless. The ECE department at VJCET prepares students for careers in this constantly evolving discipline."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "The department of Electronics & Communication Engineering was established in the year 2001. B.Tech Electronics & Communication Engineering program was accredited by NBA in 2010 and again renewed in June 2018 for another three years. The Department is managed by devoted and diligent staff members and well equipped with all modern facilities. The first batch of ECE students from Viswajyothi passed out in 2005. Dept. offers both undergraduate (B. Tech.) and postgraduate (M. Tech.) programs. The annual intake of the B. Tech. program is 120 students and that of the M. Tech. is 24."
  };
  ProgramDescriptionThree = {
    instanceID: "ProgramDescriptionThree",
    title:
      "Our goal is to develop the department as a Center of Excellence in the field Electronics & Communication Engineering. For personality development, more emphasis is laid on the development of general, intellectual, human and social qualities which are necessary for the successful practice of the profession. The laboratory facilities were constantly upgraded to take care of the technological developments in the areas of Electronics and Telecommunications."
  };
  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Library"
  };
  DeptLibDescriptionOne = {
    instanceID: "DeptLibDescriptionOne",
    title:
      "Department Library is one of the Departmental support services of Viswajyothi College of Engg. And Tech in addition to the Central Library. The library provides access to various full texts, journals and magazines. The Department library is well equipped with modern facilities and resources in the form of CD-ROM, books, journals, project reports, seminar reports etc. The mission of the Central library is to provide information services and access to academic resources to support the scholarly and informational needs of the Department's user community.   "
  };
  DeptLibDescriptionTwo = {
    instanceID: "DeptLibDescriptionTwo",
    title:
      "The library has a collection of more than 900 books, 60 CDs and other magazines. The collection of books is strong in all the aspects of Electronics and Communication Engineering with respect to the academic syllabus. All the students and staffs of ECE Department can avail this facility."
  };
  DeptLibDescriptionThree = {
    instanceID: "DeptLibDescriptionThree",
    title:
      "The library opens on all working days. The book issue days to students are TUESDAY and FRIDAY (12.35 PM to 1.25 PM and 4.15 PM to 4.45 PM)."
  };

  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Association"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      "The Electronic Engineers have spun in their best to carve out the personal as well as the technical skills of each engineer of the VJC campus. True enough, a highly successful agenda of programmes were conducted from the usual seminars, paper presentations to the mega Personality Hunts, Brand Wars organized on a large scale. Personality hunt coined as &#39;The Mighty Cruise&#39; was a 2-3 week long chore hunting down personalities based on their technical and general awareness, group discussions, and technical dumb charades and stress management capabilities."
  };

  render() {
    return (
      <div className="Main">
        <div class="sidenav">
          <Link to="#profile">Profile</Link>
          <Link to="#vision&mission">Vision & Mission</Link>
          <Link to="#peo&pso">PEO & PSO</Link>
          <Link to="#program">Program</Link>
          <Link to="#dept-library">Department Library</Link>
          <Link to="#dept-association">Association</Link>
        </div>
        <div className="Profile" id="profile">
          <HeadingOne data={this.ProfileHeading} />
          <Bodythree data={this.ProfileDescriptionOne} />
          <Bodythree data={this.ProfileDescriptionTwo} />
        </div>
        <div className="Vision&Mission" id="vision&mission">
          <HeadingOne data={this.VisionHeading} />
          <BodyOne data={this.VisionDescription} />
        </div>
        <div className="Mission" id="mission">
          <HeadingOne data={this.MissionHeading} />
          <Bodythree data={this.MissionListOne} />
          <Bodythree data={this.MissionListTwo} />
          <Bodythree data={this.MissionListThree} />
          <Bodythree data={this.MissionListFour} />
        </div>
        <div className="PEO&PSO" id="peo&pso">
          <HeadingOne data={this.peoHeading} />
          <Bodythree data={this.peoListOne} />
          <Bodythree data={this.peoListTwo} />
          <Bodythree data={this.peoListThree} />
          <Bodythree data={this.peoListFour} />
          <HeadingOne data={this.psoHeading} />
          <Bodythree data={this.psoListOne} />
          <Bodythree data={this.psoListTwo} />
          <Bodythree data={this.psoListThree} />
          <Bodythree data={this.psoListFour} />
        </div>
        <div className="Program" id="program">
          <HeadingOne data={this.ProgramHeading} />
          <Bodythree data={this.ProgramDescriptionOne} />
          <Bodythree data={this.ProgramDescriptionTwo} />
          <Bodythree data={this.ProgramDescriptionThree} />
        </div>
        <div className="DeptLibrary" id="dept-library">
          <HeadingOne data={this.DeptLibHeading} />
          <Bodythree data={this.DeptLibDescriptionOne} />
          <Bodythree data={this.DeptLibDescriptionTwo} />
          <Bodythree data={this.DeptLibDescriptionThree} />
        </div>
        <div className="DeptAssociation" id="dept-association">
          <HeadingOne data={this.DeptAssociationHeadingOne} />
          <Bodythree data={this.DeptAssociationDescriptionOne} />
        </div>
      </div>
    );
  }
}

export default SideNav;
