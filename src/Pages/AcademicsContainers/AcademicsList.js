import React, { Component } from "react";
import "../HomePage.css";
import "../AboutPage.css";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";

class AcademicsList extends Component {
  state = { showMenu: false };

  openMenu = () => {
    console.log("opening Menu");
    this.setState({ showMenu: true });
  };
  closeMenu = () => {
    this.setState({ showMenu: false });
  };
  HomePageHeader = {
    instanceID: "HomePageHeader"
  };
  HomePageFooter = {
    instanceID: "HomePageFooter"
  };

  AcademicsTitle = {
    instanceID: "AcademicsTitle",
    title: "Courses Offered"
  }
  AcademicsText = {
    instanceID: "AcademicsText",
    title: "Viswajyothi College of Engineering & Technology has 6 academic departments which offer four post graduate and six UnderGraduate Engineering Degree Programs. "
  }

  PGCourse = {
    instanceID: "PGCourse",
    title: "PG Programmes offered:"
  };
  PGCourse1 = {
    instanceID: "PGCourse1",
    title: "Computer Science & Engineering"
  };
  PGCourse2 = {
    instanceID: "PGCourse2",
    title:
      "Electronics and Communication Engineering with specialization VLSI & Embedded Systems."
  };
  PGCourse3 = {
    instanceID: "PGCourse3",
    title: "Industrial Engineering and Management"
  };
  PGCourse4 = {
    instanceID: "PGCourse4",
    title: "MBA"
  };
  UGCourse = {
    instanceID: "UGCourse",
    title: "B-Tech Programmes offered:"
  };
  UGCourse1 = {
    instanceID: "UGCourse1",
    title: "Civil Engineering"
  };
  UGCourse2 = {
    instanceID: "UGCourse2",
    title: "Computer Science and Engineering"
  };
  UGCourse3 = {
    instanceID: "UGCourse3",
    title: "Electronics and Communication engineering"
  };
  UGCourse4 = {
    instanceID: "UGCourse4",
    title: "Electrical and Electronics Engineering"
  };
  UGCourse5 = {
    instanceID: "UGCourse5",
    title: "Information Technology"
  };
  UGCourse6 = {
    instanceID: "UGCourse6",
    title: "Mechanical Engineering"
  };

  render() {
    return (
      <div className="HomePage">
        <div className="AboutPage" id="AcademicsList">
          <HeadingTwo data={this.AcademicsTitle} />
          <br />
          <BodyOneJustified data={this.AcademicsText} />
          <div className="inner-para">
            <p>
              <BodyOneJustified data={this.PGCourse} />
            </p>
            <ul>
              <li>
                <p>
                  <BodyOneJustified data={this.PGCourse1} />
                </p>
              </li>
              <li>
                <p>
                  <BodyOneJustified data={this.PGCourse2} />
                </p>
              </li>
              <li>
                <p>
                  <BodyOneJustified data={this.PGCourse3} />
                </p>
              </li>
              <li>
                <p>
                  <BodyOneJustified data={this.PGCourse4} />
                </p>
              </li>
            </ul>
            <p>
              <BodyOneJustified data={this.UGCourse} />
            </p>
            <ul>
              <li>
                <p>
                  <BodyOneJustified data={this.UGCourse1} />
                </p>
              </li>
              <li>
                <p>
                  <BodyOneJustified data={this.UGCourse2} />
                </p>
              </li>
              <li>
                <p>
                  <BodyOneJustified data={this.UGCourse3} />
                </p>
              </li>
              <li>
                <p>
                  <BodyOneJustified data={this.UGCourse4} />
                </p>
              </li>
              <li>
                <p>
                  <BodyOneJustified data={this.UGCourse5} />
                </p>
              </li>
              <li>
                <p>
                  <BodyOneJustified data={this.UGCourse6} />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default AcademicsList;
