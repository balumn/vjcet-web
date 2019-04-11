import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOne from "../../Components/Texts/BodyOne";
import "../styles.css"

class CCC extends React.Component{
    CCCTitle = {
        instanceID: "CCCTitle",
        title: "Common Computing Center"
    };
    CCCContent = {
        instanceID: "CCCContent",
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "cover2-1.jpg",
        width: "100%"
    }
    render() {
      return (
          <React.Fragment>
              <div className="contain">
              <HeadingTwo data={this.CCCTitle} className="Heading" />
              <ImageOne data={this.CCCImagedata} />
              <br />
              <BodyOne data={this.CCCContent} />
              </div>
          </React.Fragment>
      )
    }

}

export default CCC;