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
      "The Department of Electrical and Electronics Engineering of VJCET was established in the year 2004, with eminent and well qualified faculty and excellent infra structure. The department is recognized for excellence in teaching and service to the profession and it offers Undergraduate Programme with an intake of 90 students. In a very short spell the department could emerge with four University ranks. The academic strength of the faculty is reflected by the alumni, many of whom are in the top echelons of industry and academicia both in India and abroad."
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
    title: "Mould globally competent Electrical and Electronics Engineers"
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title: "1.   To provide the best academic ambiance."
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2.  To develop technical and soft skills to cope up with the emerging global scenario."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title: "3.  To enhance knowledge by industry and alumni interaction."
  };
  peoHeading = {
    instanceID: "psoHeading",
    title: "PEO"
  };
  peoListOne = {
    instanceID: "peoListOne",
    title: "Graduate shall have  "
  };
  peoListTwo = {
    instanceID: "peoListTwo",
    title:
      "1.	The foundation in mathematical, analytical and scientific skills to design technically and economically viable engineering solutions. "
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      "2.	The culture and attitude of team work, to help in upbringing socially committed Entrepreneurs engaged in lifelong learning."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title: "3.	Professional communication skills, social values and work ethics."
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
    title: "The Graduates shall be able to, "
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      "•	Apply fundamentals of Engineering in analyzing multidisciplinary issues, developing solutions with professional and ethical responsibilities and promoting conventional and unconventional methods for higher research. "
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      "•	Apply Electrical engineering knowledge to perform circuit analysis, troubleshoot electrical machines and optimize power system designs by incorporating analog and digital controls."
  };
  ProgramHeading = {
    instanceID: "ProgramHeading",
    title: "Program"
  };
  ProgramDescriptionOne = {
    instanceID: "ProgramDescriptionOne",
    title:
      "Department of EEE is under graduate degree and Post graduate courses in Electrical & Electronics Engineering.  The total intake in Undergraduate course is 90  per batch  The Under Graduate program started in the year July 2004 with an intake of  60 students per batch. "
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
      "The Department of Electrical & Electronics maintains a library where its primary  aim  is to improve the knowledge of the  users  by effectively  utilizing the timely updated resources  and  to  facilitate student satisfaction through high quality services.The library has a collection of more than 600 books. Moreover the Library possesses B.Tech projects, seminar reports, Lab Manuals and Question paper. The departmental library serves the academic disciplines bearing their names. "
  };
  DeptLibDescriptionTwo = {
    instanceID: "DeptLibDescriptionTwo",
    title:
      " The library has a collection of more than 600 books. Moreover the Library possesses B.Tech projects, seminar reports, Lab Manuals and Question paper. The departmental library serves the academic disciplines bearing their names.The collection is strong in all aspects with special strengths in Electrical Machines, Power System Engineering, Electronic Circuits, Digital Circuits, Control Engineering, Electro magnetic Theory, Network Theory, Communication Engineering, programming, Computer Architecture and Organization, Microprocessors and Micro Controllers, Power Electronics, Linear System Analysis."
  };
  DeptLibDescriptionThree = {
    instanceID: "DeptLibDescriptionThree",
    title:
      "The Department Library can be used by the students any time during the working hours of the department. Students are allowed to take two books at a time. Faculty members are entitled to get 3 books at a time."
  };

  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Association"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      " Extracurricular activities can offer youth a safe and supervised haven and a chance to learn new skills such as conflict resolution, prepare for a successful career and improve grades. ‘VIDYUTH’ the Association of Electrical and Electronics Engineering Department. Various activities are organized under Vidyuth which provides a platform for the young talents to showcase their skills. Students are actively involved in the association activities including association inauguration, organizing technical talks, exhibitions and publishing department news letter every year to promote the spirit of social harmony. "
  };
  DeptAssociationHeadingTwo = {
    instanceID: "DeptAssociationHeadingTwo",
    title: "2018-19"
  };
  DeptAssociationDescriptionTwo = {
    instanceID: "DeptAssociationDescriptionTwo",
    title:
      "Activities of Department Association ‘VIDYUTH’ for academic year 2018 -’19 was inaugurated on 1 st Octoberl 2018, by Sri. CP George , Deputy Chief Engineer at KSEB Ltd. Generation, MoolamattomICSE Association Inauguration"
  };
  DeptAssociationDescriptionThree = {
    instanceID: "DeptAssociationDescriptionThree",
    title:
      "Activities of Department Association ‘VIDYUTH’ for academic year 2018 -’19 was inaugurated on 1 st Octoberl 2018, by Sri. CP George , Deputy Chief Engineer at KSEB Ltd. Generation, MoolamattomICSE Association Inauguration"
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
          <Link to="#dept-association">Association</Link>
        </div>
        <div className="Profile" id="profile">
          <HeadingOne data={this.ProfileHeading} />
          <Bodythree data={this.ProfileDescriptionOne} />
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
          <HeadingOne data={this.psoHeading} />
          <Bodythree data={this.psoListOne} />
          <Bodythree data={this.psoListTwo} />
          <Bodythree data={this.psoListThree} />
        </div>
        <div className="Program" id="program">
          <HeadingOne data={this.ProgramHeading} />
          <Bodythree data={this.ProgramDescriptionOne} />
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
        </div>
      </div>
    );
  }
}

export default SideNav;
