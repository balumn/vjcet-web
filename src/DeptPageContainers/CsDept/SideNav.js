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
      "Started in the year 2001, the Department of Computer Science & Engineering offers  both undergraduate (B. Tech.) and postgraduate (M. Tech.) programs. B.Tech Computer Science Engineering program is accredited by NBA on July 2018 for three years.The annual intake of the B. Tech. program is 120 students and that of the M. Tech. is 18. The department provides its students an environment that stimulates their intellectual growth and personality development. Infrastructure facilities are excellent with well-equipped computer labs, classrooms and libraries. We also have high speed leased line Internet connection and online access to all IEEE journals. A team of well qualified faculty that keeps their knowledge up to date by attending conferences and workshops on a regular basis is a major asset of the department."
  };
  ProfileDescriptionTwo = {
    instanceID: "ProfileDescriptionTwo",
    title:
      "M. Tech. students with GATE qualification are funded by AICTE scholarships. Training programs conducted for the B. Tech. students throughout the course of their study by the Placement and Training Cell (PTC) of our college prepares them for a smooth transition from academia to the industry. In the past our students have been placed in reputed companies like Infosys, Wipro, TCS, Tata Elxsi, Oracle, HCL, L&T, IBS, Cognizant, and so on. Our students have secured very good results in the University examinations including University ranks. They regularly participate in inter collegiate technical and cultural events and have won many prizes."
  };
  VisionHeading = {
    instanceID: "VisionHeading",
    title: "Vision"
  };
  VisionDescription = {
    instanceID: "VisionDescription",
    title:
      "Moulding socially responsible and professionally competent Computer Engineers to adapt to the dynamic technological landscape"
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1.	Foster the principles and practices of computer science to empower life-long learning and   build careers in software and hardware development."
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2.  Impart value education to elevate students to be successful, ethical and effective problem-solvers to serve the needs of the industry, government, society and the scientific community."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3.  Promote industry interaction to pursue new technologies in Computer Science and provide excellent infrastructure to engage faculty and students in scholarly research activities."
  };
  peoHeading = {
    instanceID: "psoHeading",
    title: "PEO"
  };
  peoListOne = {
    instanceID: "peoListOne",
    title: "Our Graduates "
  };
  peoListTwo = {
    instanceID: "peoListTwo",
    title:
      "1.	Shall have creative and critical reasoning skills to solve technical problems ethically and responsibly to serve the society."
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      "2.	Shall have competency to collaborate as a team member and team leader to address social, technical and engineering challenges."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title:
      "3.	Shall have ability to contribute to the development of the next generation of information technology either through innovative research or through practice in a corporate setting."
  };
  peoListFive = {
    instanceID: "peoListFive",
    title:
      "4.	Shall have potential to build start-up companies with the foundations, knowledge and experience they acquired from undergraduate education."
  };

  psoHeading = {
    instanceID: "psoHeading",
    title: "PSO"
  };
  psoListOne = {
    instanceID: "psoListOne",
    title:
      "1.	Ability to integrate theory and practice to construct software systems of varying complexity."
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      "2.	Able to Apply Computer Science skills, tools and mathematical techniques to analyze, design and model complex systems."
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      "3.	Ability to design and manage small-scale projects to develop a career in a related industry."
  };
  ProgramHeading = {
    instanceID: "ProgramHeading",
    title: "Program"
  };
  ProgramDescriptionOne = {
    instanceID: "ProgramDescriptionOne",
    title:
      "Department of Computer Science and Engineering is offering both Under graduate and Post graduate courses in Computer Science and Engineering. The total intake in Undergraduate course is 120 per batch and for Post graduation 18 per batch."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "The Under Graduate program started in the year 2001 with an intake of  60 students per batch. Later in July 2007 the intake is amplified to 120 students per batch. In the year 2010 Postgraduate program in Computer Science and Engineering with an intake of 18 students per batch has started. The Department is accredited by National Board of Accreditation (NBA) of AICTE in June 2010. Also the Department applied for NBA accreditation in 2017 and is accredited."
  };
  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Library"
  };
  DeptLibDescriptionOne = {
    instanceID: "DeptLibDescriptionOne",
    title:
      "The Department of Computer Science and Engineering maintains a books enriched library where its primary aim is to support the student of the institution for education.  The Library was established in 2006.  The library has a collection of more than 600 books. Besides books the Library possesses B.Tech project and seminar reports, Monographs, Lab Manuals, Question papers, CD-ROMs, Internet facility. The departmental library serve the academic disciplines bearing their names. "
  };
  DeptLibDescriptionTwo = {
    instanceID: "DeptLibDescriptionTwo",
    title:
      "The collection is strong in all aspects with special strengths in C programming, Software Engineering, Automata Theory, System Programming, Computer Architecture and Organization, Data Structures, Microprocessors, Database Management System and also books on  Digital Electronics, Humanities, Management."
  };
  DeptLibDescriptionThree = {
    instanceID: "DeptLibDescriptionThree",
    title:
      "It has a carpet area of about 500 square feet. The library opens from 8.45 a.m. to 4.30 p.m. except Saturdays and Sundays. The library collection is arranged subject-wise. The library is maintaining records of all Purchased/Donated books, CDS, Seminar Reports/Project Reports/Magazines/Monographs/Lab Manual/Previous Year Question Papers. Members can search and view the status (Available/Not Available) of each searched item through the software.  The library is also maintaining all Issue/Deposit/Fine reports and it will be periodically updates at the end of each semesters."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "The Under Graduate program started in the year 2001 with an intake of  60 students per batch. Later in July 2007 the intake is amplified to 120 students per batch. In the year 2010 Postgraduate program in Computer Science and Engineering with an intake of 18 students per batch has started. The Department is accredited by National Board of Accreditation (NBA) of AICTE in June 2010. Also the Department applied for NBA accreditation in 2017 and is accredited."
  };
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Department Association"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      " VOICE is the association of the Computer Science &amp; Engineering department. VOICE plays its vital role of giving opportunities and exposure for the young minds of the department to the tech world through different events like Technical Quiz, Technical Talks, Group Discussions, Workshops etc. VOICE is run by the student coordinators under the guidance of faculty members from the department. "
  };
  DeptAssociationHeadingTwo = {
    instanceID: "DeptAssociationHeadingTwo",
    title: "Sinu Arby Quiz Competition"
  };
  DeptAssociationDescriptionTwo = {
    instanceID: "DeptAssociationDescriptionTwo",
    title:
      "Sinu Arby Memorial Quiz Competition was conducted by the department."
  };
  DeptAssociationDescriptionThree = {
    instanceID: "DeptAssociationDescriptionThree",
    title: "ICSE Association Inauguration"
  };
  DeptAssociationDescriptionFour = {
    instanceID: "DeptAssociationDescriptionFour",
    title:
      "THE COMPUTER SCIENCE ASSOCIATION: 'VOICE' The Vision Of Imperial Computer Engineers lives with its ardent passion to be the fulcrum for change and development in the campus. Mr. Sajeev K.M, DySP, Marine Enforcement &amp; Vigilance, Trivandrum, inaugurated our association on 16 th   August 2017."
  };
  DeptAssociationDescriptionFive = {
    instanceID: "DeptAssociationDescriptionFive",
    title:
      "Inaugural Speech by Chief Guest Mr. Sajeev K.M, DySP, Marine Enforcement &amp; Vigilance, Trivandrum"
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
          <Link to="#dept-association">Department Association</Link>
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
        </div>
        <div className="PEO&PSO" id="peo&pso">
          <HeadingOne data={this.peoHeading} />
          <Bodythree data={this.peoListOne} />
          <Bodythree data={this.peoListTwo} />
          <Bodythree data={this.peoListThree} />
          <Bodythree data={this.peoListFour} />
          <Bodythree data={this.peoListFive} />
          <HeadingOne data={this.psoHeading} />
          <Bodythree data={this.psoListOne} />
          <Bodythree data={this.psoListTwo} />
          <Bodythree data={this.psoListThree} />
        </div>
        <div className="Program" id="program">
          <HeadingOne data={this.ProgramHeading} />
          <Bodythree data={this.ProgramDescriptionOne} />
          <Bodythree data={this.ProgramDescriptionTwo} />
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
          <HeadingFour data={this.DeptAssociationHeadingTwo} />
          <Bodythree data={this.DeptAssociationDescriptionTwo} />
          <Bodythree data={this.DeptAssociationDescriptionThree} />
          <Bodythree data={this.DeptAssociationDescriptionFour} />
          <Bodythree data={this.DeptAssociationDescriptionFive} />
        </div>
      </div>
    );
  }
}

export default SideNav;
