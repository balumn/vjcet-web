import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class Library extends Component {
  state = {};
  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Library"
  };
  DeptLibDescriptionOne = {
    instanceID: "DeptLibDescriptionOne",
    title:
      "In addition to the Central Library, a dedicated Department Library is functioning for the benefit of staff members and students. The library is solely intended for referral purposes. No issue of books is done. Students or faculty members can access the books and refer them within the library. The e-library facility of the central library is also made accessible in the Department Library. The library functions from 8:45 am to 4:30 pm."
  };

  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLibHeading} />
        <Bodythree data={this.DeptLibDescriptionOne} />
      </div>
    );
  }
}

export default Library;
