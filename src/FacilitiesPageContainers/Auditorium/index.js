import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

class Auditorium extends React.Component{
    AuditoriumTitle = {
        instanceID: "AuditoriumTitle",
        title: "Auditorium"
    };
    AuditoriumContent1 = {
        instanceID: "AuditoriumContent1",
        title:"The auditoriums and seminar rooms are extensively setup for regular interfaces, guest lectures, presentations, conferences, cultural events and other academic activities. The auditoriums and seminar rooms provide an excellent environment to support teaching and learning for both staff and students with complete audio-visual, sound and lighting support. College has a main auditorium which has 1500 seating capacity and a mini auditorium with 250 seating capacity. All college level events are being conducted in the main auditorium and mini auditorium. All the department has Seminar hall with a seating facility of 100 along with mounted projector setup."
    }
    AuditoriumContent2 = {
        instanceID: "AuditoriumContent2",
        title:"College has a main auditorium which has 1500 seating capacity and a mini auditorium with 250 seating capacity. All college level events are being conducted in the main auditorium and mini auditorium. All the department has Seminar hall facility with 100 seating capacity along with mounted projector setup."
    }
    AuditoriumImagedata = {
        instanceID: "AuditoriumImagedata",
        image: "cover2-1.jpg",
        width: "100%"
    }
    AuditoriumFeature1 = {
        instanceID: "AuditoriumFeature1",
        title:"Perfect facility for conducting seminars, conferences at a big scale."
    }
    AuditoriumFeature2 = {
        instanceID: "AuditoriumFeature2",
        title:"Easily accessible and functional rooms."

    }
    AuditoriumFeature3 = {
        instanceID: "AuditoriumFeature3",
        title:"Highly spacious with state-of-the-art multimedia systems"
    }
    render() {
      return (
          <React.Fragment>
              <div className="contain">
              <HeadingTwo data={this.AuditoriumTitle} className="Heading" />
              <ImageOne data={this.AuditoriumImagedata} />
              <div className="bodyContainer">
                <p>
                <BodyOneJustified data={this.AuditoriumContent1} />
                </p>
              <div className="bodyContainerInner">
                <ul>
                    <li><BodyOneJustified data={this.AuditoriumFeature1} /></li>
                    <li><BodyOneJustified data={this.AuditoriumFeature2} /></li>
                    <li><BodyOneJustified data={this.AuditoriumFeature3} /></li>
                </ul>
              </div>
              </div>
              </div>
          </React.Fragment>
      )
    }

}

export default Auditorium;