import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
<<<<<<< HEAD
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

class CCC extends React.Component{
    CCCNATitle = {
        instanceID: "CCCTitle",
        title: "Common Computing Center and Network Architecture"
    };
=======
import BodyOne from "../../Components/Texts/BodyOne";
import "../styles.css"

class CCC extends React.Component{
>>>>>>> cfaf3c989fcc45709bede74c51900dcba55e7ed9
    CCCTitle = {
        instanceID: "CCCTitle",
        title: "Common Computing Center"
    };
<<<<<<< HEAD
    NATitle = {
        instanceID: "CCCTitle",
        title: "Network Architecture of VJCET"
    };
    CCCContent1 = {
        instanceID: "CCCContent1",
        title:"Viswajyothi has a central computing facility named as Common Computing Centre (CCC) functioning with a speed of 200 Mbps from 8AM to 8PM. Students can access Internet and download relevant study materials and can procure hard copies of the study materials with the assistance of staff at any time. The center is air conditioned and well-equipped with an uninterrupted power supply."
    }
    CCCContent2 = {
        instanceID: "CCCContent2",
        title:"We have more than 1000 computers and 11 servers in the campus and all of these are connected across a single LAN. All the computers are in Hence staff and students can access their data at any lab at any time during working hours. Our servers are 24 hours working throughout the year. We have a central point called server room from where all the locations are connected via fiber optic back bone cable. All the operations are monitored from the server room."
=======
    CCCContent = {
        instanceID: "CCCContent",
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
>>>>>>> cfaf3c989fcc45709bede74c51900dcba55e7ed9
    }
    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "cover2-1.jpg",
        width: "100%"
    }
<<<<<<< HEAD
    Server1 = {
        instanceID:"Server1",
        title:"1. Main Server"
    }
    Server2 = {
        instanceID:"Server2",
        title:"2. Backup Server"
    }
    Server3 = {
        instanceID:"Server3",
        title:"3. NAS (File Server)"
    }
    Server4 = {
        instanceID:"Server4",
        title:"4. Database Server"
    }
    Server5 = {
        instanceID:"Server5",
        title:"5. Student Database Server"
    }
    Server6 = {
        instanceID:"Server6",
        title:"6. FTP Server"
    }
    Server7 = {
        instanceID:"Server7",
        title:"7. Anti Server Server"
    }
    Server8 = {
        instanceID:"Server8",
        title:"8. Print Server"
    }

=======
>>>>>>> cfaf3c989fcc45709bede74c51900dcba55e7ed9
    render() {
      return (
          <React.Fragment>
              <div className="contain">
<<<<<<< HEAD
              <HeadingTwo data={this.CCCNATitle} className="Heading" />
              <ImageOne data={this.CCCImagedata} />
              <br />
              <div className="bodyContainer">
                <HeadingTwo data={this.CCCTitle} className="Heading" />
                <BodyOneJustified data={this.CCCContent1} />
                <HeadingTwo data={this.NATitle} className="Heading" />
                <BodyOneJustified data={this.CCCContent2}/>
                <div className="bodyContainerInner">
                    <p><BodyOneJustified data={this.Server1} /></p>
                    <p><BodyOneJustified data={this.Server2} /></p>
                    <p><BodyOneJustified data={this.Server3} /></p>
                    <p><BodyOneJustified data={this.Server4} /></p>
                    <p><BodyOneJustified data={this.Server5} /></p>
                    <p><BodyOneJustified data={this.Server6} /></p>
                    <p><BodyOneJustified data={this.Server7} /></p>
                    <p><BodyOneJustified data={this.Server8} /></p>
                </div>
                
              </div>
=======
              <HeadingTwo data={this.CCCTitle} className="Heading" />
              <ImageOne data={this.CCCImagedata} />
              <br />
              <BodyOne data={this.CCCContent} />
>>>>>>> cfaf3c989fcc45709bede74c51900dcba55e7ed9
              </div>
          </React.Fragment>
      )
    }

}

export default CCC;