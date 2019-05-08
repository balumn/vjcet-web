import React, { Component } from "react";
import "./ResourcesList.css";
import HeadingFour from "../../../Components/Texts/HeadingFour";
import ImageOne from "../../../Components/Images/ImageOne";
import ButtonTwo from "../../../Components/Buttons/ButtonTwo";
import { fileURLToPath } from "url";

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
  fileLoc = {
    file: this.props.data.fileURLToPath,
  }

  render() {
    return (
      <div className="ResourcesList" id={this.props.data.instanceID}>
        <ImageOne data={this.ListIcon} />
        <HeadingFour id="ResourcesListHeading" data={this.ListTitle} />
        <a href={this.fileLoc.file} download="Rules.pdf"><ButtonTwo /></a>
      </div>
    );
  }
}

export default ResourcesList;
