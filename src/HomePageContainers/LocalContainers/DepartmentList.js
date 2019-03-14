import React, { Component } from "react";
import "./DepartmentList.css";
import BodyTwo from "../../Components/Texts/BodyTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";
import HeadingFive from "../../Components/Texts/HeadingFive";
import ImageOne from "../../Components/Images/ImageOne";

class DepartmentList extends Component {
  DepartmentName = {
    instanceID: "DepartmentName",
    title: "Departments"
  };

  DepartmentDescription = {
    instanceID: "DepartmentDescription",
    title:
      "We have UG and PG courses ranging from B.Tech, M.Tech, MBA and Science & Humanities"
  };

  LearnMore = {
    instanceID: "LearnMore",
    title: "Learn More"
  };

  HeadingThree = {
    instanceID: "DepartmentHeadingThree",
    title: this.props.data.title
  };

  BodyTwo = {
    instanceID: "DepartmentBodyTwo",
    title: this.props.data.description
  };

  Arrow = {
    instanceID: "DepartmentListArrow",
    image: "CarouselThreeNext.svg",
    width: "26px"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="DepartmentList" id={instanceID}>
        <div className="DepartmentListContents">
          <HeadingThree data={this.HeadingThree} />
          <BodyTwo data={this.BodyTwo} />
          <div className="ListCTA">
            <HeadingFive data={this.LearnMore} />
            <ImageOne data={this.Arrow} />
          </div>
        </div>
      </div>
    );
  }
}

export default DepartmentList;
