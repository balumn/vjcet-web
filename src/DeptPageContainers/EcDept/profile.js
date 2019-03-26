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
      "The department of Electronics & Communication Engineering was established in the year 2001. B.Tech Electronics & Communication Engineering program was accredited by NBA in 2010 and again renewed in June 2018 for another three years. The Department is managed by devoted and diligent staff members and well equipped with all modern facilities. The first batch of ECE students from Viswajyothi passed out in 2005. Dept. offers both undergraduate (B. Tech.) and postgraduate (M. Tech.) programs. The annual intake of the B. Tech. program is 120 students and that of the M. Tech. is 24. Electronics and Communication Engineering (ECE) is a swiftly advancing field, with new ideas emerging every other second. There are a lot of exciting avenues to explore and create even better ideas. With technology becoming all pervasive in everyday life, opportunities for electronic engineers are endless. The ECE department at VJCET prepares students for careers in this constantly evolving discipline. "
  };
  ProfileDescriptionTwo = {
    instanceID: "ProfileDescriptionTwo",
    title:
      "The department consistently organizes National Level Seminars and Symposiums, Short Term Training Programs, Faculty Development Programs sponsored by AICTE - ISTE. The department has produced several university ranks both in B.Tech and M.Tech so far. Our department enjoys very good placement every year in wide spectrum of MNC’s and core industries. One of the major strength of our department is the immense support extended by our Alumni. Our goal is to develop the department as a Center of Excellence in the field Electronics & Communication Engineering. For personality development, more emphasis is laid on the development of general, intellectual, human and social qualities which are necessary for the successful practice of the profession. The laboratory facilities were constantly upgraded to take care of the technological developments in the areas of Electronics and Telecommunications."
  };
  render() {
    return (
      <div className="Profile" id="profile">
        <HeadingOne data={this.ProfileHeading} />
        <Bodythree data={this.ProfileDescriptionOne} />
        <Bodythree data={this.ProfileDescriptionTwo} />
      </div>
    );
  }
}

export default Profile;
