import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOne from "../../Components/Texts/BodyOne";
import "../styles.css"

class Canteen extends React.Component{
    CanteenTitle = {
        instanceID: "CanteenTitle",
        title: "About Canteen"
    };
    CanteenContent = {
        instanceID: "CanteenContent",
        title:"Viswajyothi Canteen is another food service means inside the campus. The canteen has a total seating capacity of 200. Viswajyothi also provides Cafeteria service to all students and faculty. This facility is located at the first floor of the D block."
    }
    canteenImagedata = {
        instanceID: "canteenImagedata",
        image: "cover2-1.jpg",
        width: "100%"
    }
    render() {
      return (
          <React.Fragment>
              <div className="contain">
              <HeadingTwo data={this.CanteenTitle} className="Heading" />
              <ImageOne data={this.canteenImagedata} />
              <BodyOne data={this.CanteenContent} />
              </div>
          </React.Fragment>
      )
    }

}

export default Canteen;