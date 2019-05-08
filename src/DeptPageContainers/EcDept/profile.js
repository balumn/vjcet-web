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
    title: "The department of Electronics & Communication Engineering was established in the year 2001."
  };

  Features2 = {
    instanceID: "Features2",
    title: "B.Tech Electronics & Communication Engineering program is accredited by NBA in June 2010 and reaccredited in June 2018 for another three years."
  };
  Features3 = {
    instanceID: "Features3",
    title: "The department has a very good placement records in various MNC’s. The department assist the students to get placed in core companies like Bosch, INTEL etc with the help of Miniplacement cell in association with Alumni Association."
  };
  Features4 = {
    instanceID: "Features4",
    title: "The department bagged many university ranks both in B. Tech and M.Tech."
  };
  Features5 = {
    instanceID: "Features5",
    title: "Students are trained to meet with the expectations of industry. Training is provided for various retail boards like Aurdrino, Raspberry Pie etc. Training in technical languages such as C,C++. Python etc are imparted in addition to the syllabus"
  };
  Features6 = {
    instanceID: "Features6",
    title: "Students actively take part in technical clubs like Drone Club, Robotic Club etc where they can exhibit their talents and ideas."
  };
  Features7 = {
    instanceID: "Features7",
    title: "Students play active role in various professional bodies like ISTE, IEEE, IETE student chapters of the college."
  };
  Features8 = {
    instanceID: "Features8",
    title: "The department consistently organizes External Seminars and Symposiums, Internal Seminars, Short Term Training Programs, Faculty Development Programs sponsored by AICTE - ISTE."
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
        </div>
      </div>
    );
  }
}

export default Profile;
