import React from "react";
import "./style.css";
import './desktop.css';
import './tablet.css';
import './mobile.css';
import ResourceItem from "./ResourceItem";


class ResourcesAvailable extends React.Component {

  RulesAndRegulations = {
    instanceID: "RulesAndRegulations",
    image: "rules.svg"
  }

  render() {
    return (
      <section className="ResourcesAvailable">
        <h2>Additional Resources</h2>
        <div>
          <ResourceItem data={this.RulesAndRegulations} title="Rules and Regulations" />
          <ResourceItem src="support.svg">Superior Customer Service</ResourceItem>
          <ResourceItem src="rates.svg">Competitive Rates</ResourceItem>
          <ResourceItem src="staffs.svg">Experienced and Specialized Staffs</ResourceItem>
          <ResourceItem src="quick.svg">Quick Services</ResourceItem>
          <ResourceItem src="roof.svg">All services in one roof</ResourceItem>
        </div>
      </section>
    );
  }
}

export default ResourcesAvailable;