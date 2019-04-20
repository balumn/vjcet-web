import React, { Component } from "react";
import "./ResourcesList.css";
import HeadingFour from "../../../Components/Texts/HeadingFour";
import ImageOne from "../../../Components/Images/ImageOne";
import ButtonTwo from "../../../Components/Buttons/ButtonTwo";

class ResourcesList extends Component {
  ListTitle = {
    instanceID: "ListTitle" + this.props.data.listID,
    title: this.props.data.title
  };

  ListIcon = {
    instanceID: "ListIcon" + this.props.data.listID,
    image: this.props.data.icon,
    width: "20%"
  };

  render() {
    return (
      <div className="ResourcesList" id={this.props.data.instanceID}>
        <ImageOne data={this.ListIcon} />
        <HeadingFour id="ResourcesListHeading" data={this.ListTitle} />
        <ButtonTwo />
      </div>
    );
  }
}

export default ResourcesList;
