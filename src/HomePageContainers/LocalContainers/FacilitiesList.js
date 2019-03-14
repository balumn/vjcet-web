import React, { Component } from "react";
import "./FacilitiesList.css";
import HeadingFive from "../../Components/Texts/HeadingFive";
import ImageOne from "../../Components/Images/ImageOne";

class FacilitiesList extends Component {
  FacilityTitle = {
    instanceID: "FacilityTitle",
    title: this.props.data.title
  };

  FacilityIcon = {
    instanceID: "FacilityIcon",
    image: this.props.data.image,
    width: "68px"
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="FacilitiesList" id={instanceID}>
        <ImageOne data={this.FacilityIcon} />
        <HeadingFive data={this.FacilityTitle} />
      </div>
    );
  }
}

export default FacilitiesList;
