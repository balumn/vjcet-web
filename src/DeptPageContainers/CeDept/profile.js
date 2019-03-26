import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class Profile extends Component {
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
  render() {
    return (
      <div className="Profile" id="profile">
        <HeadingOne data={this.ProfileHeading} />
        <Bodythree data={this.ProfileDescriptionOne} />
        <Bodythree data={this.ProfileDescriptionTwo} />
        <Bodythree data={this.ProfileDescriptionThree} />
      </div>
    );
  }
}

export default Profile;
