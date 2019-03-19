import React from "react";
import './style.css';
import './desktop.css';
import './tablet.css';
import './mobile.css';
import ImageOne from "../../../Components/Images/ImageOne"

class ResourceItem extends React.Component{
  
  render() {
  return (
    <figure className="ResourceItem">
      <ImageOne data={this.props.data} />
      <h3 className="h3_WhyItem_label">{this.props.title}</h3>
    </figure>
  );
}
}

export default ResourceItem;
