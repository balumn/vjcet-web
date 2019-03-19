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
      "The Department of Civil Engineering has been in existence since the inception of VJCET in 2001 and has emerged into a full-fledged department with the commencement of Civil Engineering branch in 2010. The UG Programme offered is accredited by the NBA (National Board of Accreditation). It is trail blazed by highly competent, committed, well qualified and experienced faculty who are determined to instill in their students the right amount of confidence, knowledge and ethics to build our world. The unique academic environment here is characterized by dedicated teaching, coupled with an excellent auxiliary infrastructure and state-of-the-art laboratories with facilities more than those prescribed in the course syllabus. "
  };
  ProfileDescriptionTwo = {
    instanceID: "ProfileDescriptionTwo",
    title:
      "In keeping with the vision of the college “Moulding Engineers par excellence with integrity, fairness and human values”, the Department has been consistently ranked as one of the top performers among the colleges affiliated to APJ Abdul Kalam Technological University. Apart from securing placements in various sectors, there are many alumni from Civil Engineering Department pursuing higher studies in reputed institutions in India such as IITs, NAD etc. and in Universities across the globe. There are others who have undertaken the less trodden path of Entrepreneurship too. The Department maintains academic alliances with several industries and training institutes."
  };
  ProfileDescriptionThree = {
    instanceID: "ProfileDescriptionThree",
    title:
      "Besides high quality teaching and instruction at undergraduate level, the Department offers technical advisory support to various Governmental & Private organizations by way of consultancy services, material testing facilities and quality analysis for potable water. The Department has been chosen as a TPTA (Third Party Technical Agency) of the LSGD, Govt. of Kerala. Students involve in the consultancy services offered by the Department. To inculcate professional skills and in-depth knowledge on various domains of Civil Engineering, students are given opportunities to involve in Professional Societies such as IGBC (Indian Green Building Council), IGS (Indian Geotechnical Society), IMS (Indian Meteorological Society) as well as “Sec α” (Structural Engineering Club) and MindSpark.Students are also given opportunities to undertake real-time projects and summer internship programs organized by reputed institutions such as IITs which help them evolve as socially committed Engineers. We seek to promote the overall growth of every student by way of academic mentoring as well as through provision of avenues for skill development and career growth. Civil Engineering branch has enormous opportunities and has adequate potential for diversification in future.  With the increasing globalization of engineering practice and the massive growth of multi-national construction companies, there is a huge demand for qualified graduates who are tuned in to the latest technologies and international trends, with good communication skills."
  };
  VisionHeading = {
    instanceID: "VisionHeading",
    title: "Vision"
  };
  VisionDescription = {
    instanceID: "VisionDescription",
    title:
      "Building Professionally Competent and Motivated Engineers in the Arena of Civil Engineering with High Professional Ethics"
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1.	To promote a better teaching learning process through academically proficient faculties, full fledged laboratories and excellent infrastructure facilities. "
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2.	To equip the graduates with knowledge, research and practical skills in modern construction practices and techniques."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3.	To inculcate knowledge of sustainability in various domains of Civil Engineering."
  };
  MissionListFour = {
    instanceID: "MissionListFour",
    title:
      "4.	To nurture Civil Engineers into ethically strong and responsible leaders to address global challenges through quality education."
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
      "1.	Shall tackle the multiple responsibilities of analysis, design and construction of traditional and modern systems in compliance with various codes of practices and to meet the current technical challenges."
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      "2.	Shall be proficient in the use of relevant software packages for planning, designing, scheduling, executing and controlling of civil engineering projects, with an urge for life-long learning."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title:
      "3.	Shall function effectively with individual capabilities as well as with a collective strength as a professional team with good communication skills."
  };

  psoHeading = {
    instanceID: "psoHeading",
    title: "PSO"
  };
  psoListOne = {
    instanceID: "psoListOne",
    title: "Our Graduates shall have"
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      "1.	Ability to utilize civil engineering principles and software that are appropriate to solve technical problems; prepare design and construction documents ; create structural systems; produce drawings, reports and quantity estimates related to the Civil Engineering domain."
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      "2.	Ability to utilize modern surveying methods for land measurement and/or construction layout and to conduct standardized field /laboratory tests related to Civil Engineering."
  };
  ProgramHeading = {
    instanceID: "ProgramHeading",
    title: "Program"
  };
  ProgramDescriptionOne = {
    instanceID: "ProgramDescriptionOne",
    title:
      "The Civil Engineers are in a privileged and hugely influential position to innovate, design and build a sustainable future. Hence the mission of the Department is to mould engineers par excellence. In keeping with our mission to develop the institution into a Center of Excellence of International Standards, the department strives to offer best- rated undergraduate education, research contributions, high-end professional consultancy, outreach and manpower training and academic leadership."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "It is our determination to create an excellent work culture and campus atmosphere which inculcates academic integrity and accountability among our faculty as well as students. Comprehensive training is imparted to students for the attainment of intellectual and professional competence. We strive to cultivate a sense of civic and social responsibility among our students by way of our various Forums and Clubs and Annual Renewal & Refresher programmes. We also encourage growth and develop human potential to its fullest, such that intellectually capable and creatively talented Civil Engineers who have concern for the environment and   the society can emerge. The Civil Engineering Department continues the process of building strong links with the building and construction industry."
  };

  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Library"
  };
  DeptLibDescriptionOne = {
    instanceID: "DeptLibDescriptionOne",
    title:
      "In addition to the Central Library, a dedicated Department Library is functioning for the benefit of staff members and students. The library is solely intended for referral purposes. No issue of books is done. Students or faculty members can access the books and refer them within the library. The e-library facility of the central library is also made accessible in the Department Library. The library functions from 8:45 am to 4:30 pm."
  };

  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Association"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      "The Civil Engineering Student’s Association of VISWAJYOTHI COLLEGE OF ENGINEERING AND TECHNOLOGY, aims to play a pivotal role in the development of students as engineers by various out-of-curriculum and extracurricular activities. It aims to inculcate among its members an awareness and appreciation of the various disciplines of not just Civil Engineering but also other relevant fields. The Civil Engineering Association of VJCET was constituted in the year 2013 and is having 28 Faculties, 8 Technical staff and 432 students as members. Various academic activities and technical talks are being organized on behalf of Civil Engineering Association. By virtue of its activities CIVISTA aims to be a platform for all the students in general and particularly of the students of CE department and seeks to be an active  organization of the CE department which promotes their career interests."
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
          <Link to="#dept-association">Association</Link>
        </div>
        <div className="Profile" id="profile">
          <HeadingOne data={this.ProfileHeading} />
          <Bodythree data={this.ProfileDescriptionOne} />
          <Bodythree data={this.ProfileDescriptionTwo} />
          <Bodythree data={this.ProfileDescriptionThree} />
        </div>
        <div className="Vision&Mission" id="vision&mission">
          <HeadingOne data={this.VisionHeading} />
          <Bodythree data={this.VisionDescription} />
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
        </div>
        <div className="Program" id="program">
          <HeadingOne data={this.ProgramHeading} />
          <Bodythree data={this.ProgramDescriptionOne} />
          <Bodythree data={this.ProgramDescriptionTwo} />
        </div>
        <div className="DeptLibrary" id="dept-library">
          <HeadingOne data={this.DeptLibHeading} />
          <Bodythree data={this.DeptLibDescriptionOne} />
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
