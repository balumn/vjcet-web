import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

class Gym extends React.Component{
    GymTitle = {
        instanceID: "GymTitle",
        title: "Multi Gymnasium & Fitness Center"
    };
    GymContent = {
        instanceID: "GymContent",
        title:"Viswajyothi College of Engineering and Technology has a Multi Gym with a wide range of Gym equipments. Students and faculty members can use this facility in the morning as well as in the evening."
    }
    GymImagedata = {
        instanceID: "GymImagedata",
        image: "cover2-1.jpg",
        width: "100%"
    }
    render() {
      return (
          <React.Fragment>
              <div >
              <HeadingTwo data={this.GymTitle} className="Heading" />
              <ImageOne data={this.GymImagedata} />
              <div >
                <BodyOneJustified data={this.GymContent} />
              </div>
              </div>
          </React.Fragment>
      )
    }

}

export default Gym;