import React, { Component } from "react";
import "./ResourcesGroup.css";
import ResourcesList from "./LocalContainers/ResourcesList";
import HeadingOne from "../../Components/Texts/HeadingOne";

class ResourcesGroup extends Component {
  ResourcesGroupTitle = {
    instanceID: "ResourcesGroupTitle",
    title: "Syllabus and Plan"
  };

  ResourceListOne = {
    instanceID: "ResourceListOne",
    listID: "One",
    title: "Rules & Regulations",
    icon: "icon1.svg",
    filePath: "https://balumn.github.io/vjcet-web/downloads/Rules.pdf"
  };

  ResourceListTwo = {
    instanceID: "ResourceListTwo",
    listID: "Two",
    title: "Staff Manual",
    icon: "icon2.svg",
    filePath: "https://balumn.github.io/vjcet-web/downloads/staffmanual2017.pdf"

  };

  ResourceListThree = {
    instanceID: "ResourceListThree",
    listID: "Three",
    title: "AICTE Documents",
    icon: "icon3.svg",
    filePath: "https://balumn.github.io/vjcet-web/downloads/AICTE.pdf"

  };

  ResourceListFour = {
    instanceID: "ResourceListFour",
    listID: "Four",
    title: "Audited Financial Statements",
    icon: "icon4.svg",
    filePath: "https://balumn.github.io/vjcet-web/downloads/FinancialStatements.zip"
  };

  ResourceListFive = {
    instanceID: "ResourceListFive",
    listID: "Five",
    title: "IQAC",
    icon: "icon5.svg",
    filePath: "https://balumn.github.io/vjcet-web/downloads/IQAC.pdf"
  };

  ResourceListSix = {
    instanceID: "ResourceListSix",
    listID: "Five",
    title: "Academic Schema",
    icon: "icon6.svg",
    filePath: "https://balumn.github.io/vjcet-web/downloads/AcedemicSchema.pdf"

  };

  render() {
    return (
      <div className="ResourcesGroup">
        <HeadingOne data={this.ResourcesGroupTitle} />
        <div className="ResourcesContainer" id="AboutPageResourcesContainer">
          <ResourcesList data={this.ResourceListOne} />
          <ResourcesList data={this.ResourceListTwo} />
          <ResourcesList data={this.ResourceListThree} />
          <ResourcesList data={this.ResourceListFour} />
          <ResourcesList data={this.ResourceListFive} />
          <ResourcesList data={this.ResourceListSix} />
        </div>
      </div>
    );
  }
}

export default ResourcesGroup;
