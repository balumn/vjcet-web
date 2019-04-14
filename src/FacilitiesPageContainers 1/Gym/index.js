import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
<<<<<<< HEAD
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
=======
import BodyOne from "../../Components/Texts/BodyOne";
>>>>>>> cfaf3c989fcc45709bede74c51900dcba55e7ed9
import "../styles.css"

class Gym extends React.Component{
    GymTitle = {
        instanceID: "GymTitle",
<<<<<<< HEAD
        title: "Multi Gymnasium & Fitness Center"
    };
    GymContent = {
        instanceID: "GymContent",
        title:"Viswajyothi College of Engineering and Technology has a Multi Gym with a wide range of Gym equipments. Students and faculty members can use this facility in the morning as well as in the evening."
=======
        title: "Gymnasium"
    };
    GymContent = {
        instanceID: "GymContent",
        title:"Viswajyothi Gym is another food service means inside the campus. The canteen has a total seating capacity of 200. Viswajyothi also provides Cafeteria service to all students and faculty. This facility is located at the first floor of the D block."
>>>>>>> cfaf3c989fcc45709bede74c51900dcba55e7ed9
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
<<<<<<< HEAD
              <div className="bodyContainer">
                <BodyOneJustified data={this.GymContent} />
              </div>
=======
              <BodyOne data={this.GymContent} />
>>>>>>> cfaf3c989fcc45709bede74c51900dcba55e7ed9
              </div>
          </React.Fragment>
      )
    }

}

export default Gym;