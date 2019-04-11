import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOne from "../../Components/Texts/BodyOne";
import "../styles.css"

class Gym extends React.Component{
    GymTitle = {
        instanceID: "GymTitle",
        title: "Gymnasium"
    };
    GymContent = {
        instanceID: "GymContent",
        title:"Viswajyothi Gym is another food service means inside the campus. The canteen has a total seating capacity of 200. Viswajyothi also provides Cafeteria service to all students and faculty. This facility is located at the first floor of the D block."
    }
    GymImagedata = {
        instanceID: "GymImagedata",
        image: "cover2-1.jpg",
        width: "100%"
    }
    render() {
      return (
          <React.Fragment>
              <div className="contain">
              <HeadingTwo data={this.GymTitle} className="Heading" />
              <ImageOne data={this.GymImagedata} />
              <BodyOne data={this.GymContent} />
              </div>
          </React.Fragment>
      )
    }

}

export default Gym;