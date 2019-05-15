import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
class Profile extends Component {
  state = {};
  ProfileHeading = {
    instanceID: "ProfileHeading",
    title: "Profile"
  };
  Features1 = {
    instanceID: "Features1",
    title: "•	Started in the year 2001, the Department of Computer Science & Engineering offers both undergraduate (B. Tech.) and postgraduate (M. Tech.) programs."
  };

  Features2 = {
    instanceID: "Features2",
    title: "•	B.Tech Computer Science Engineering program is accredited by NBA on July 2018 for three years."
  };
  Features3 = {
    instanceID: "Features3",
    title: "•	Good Academic result and appreciable placements at MNCs like Google, Microsoft, Infosys, TCS.."
  };
  Features4 = {
    instanceID: "Features4",
    title: "•	Smart class rooms, well equipped labs, R&D centre and well stocked Library."
  };
  Features5 = {
    instanceID: "Features5",
    title: "•	Well qualified, skilled and dedicated teachers who are keen in academic research. (Apart from the existing PhD holders 11 faculty members are doing the same course)."
  };
  Features6 = {
    instanceID: "Features6",
    title: "•	Steady effort to promote student initiatives like entrepreneurship, startups."
  };
  Features7 = {
    instanceID: "Features7",
    title: "•	Technical and softskill training, activities and fests with the support of Professional bodies – CSI, ISTE, IEEE and industrialists"
  };
  Features8 = {
    instanceID: "Features8",
    title: "•	Computer Society of India (CSI) student branch won the ‘Best Accredited Student Branch’ for the last four consecutive years."
  };
  Features9 = {
    instanceID: "Features9",
    title: "•	Collaborated with Senior Experten Service (SES) Germany for knowledge sharing in an international interdisciplinary platform."
  };
  render() {
    return (
      <div className="Profile" id="profile">
        <HeadingOne data={this.ProfileHeading} />
        <div className="bodyContainer">
          <p><BodyOneJustified data={this.Features1} /></p>
          <p><BodyOneJustified data={this.Features2} /></p>
          <p><BodyOneJustified data={this.Features3} /></p>
          <p><BodyOneJustified data={this.Features4} /></p>
          <p><BodyOneJustified data={this.Features5} /></p>
          <p><BodyOneJustified data={this.Features6} /></p>
          <p><BodyOneJustified data={this.Features7} /></p>
          <p><BodyOneJustified data={this.Features8} /></p>
          <p><BodyOneJustified data={this.Features9} /></p>
        </div>
      </div>
    );
  }
}

export default Profile;
