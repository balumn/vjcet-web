import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

class Library extends React.Component{
    LibraryTitle = {
        instanceID: "LibraryTitle",
        title: "Library"
    };
    LibraryCentralTitle = {
        instanceID: "LibraryCentralTitle",
        title: "The Central Library"
    };
    LibraryDigitalTitle = {
        instanceID: "LibraryDigitalTitle",
        title: "DIGITAL LIBRARY"
    };
    LibraryContent1 = {
        instanceID: "LibraryContent1",
        title:"Synonymous with abode of knowledge the central library of the college is stocked with a rich collection of Books, National and International journals, Technical and other Magazines, CD ROMs on Engineering, other widely appreciated editions on diverse subjects like Literature, Management, Religion, Competitive exams etc. It is housed in an area of 16400 Sq.ft. spread over two floors.  This library follows an open access system, Barcode based circulation process and OPAC Literature search and Web based Online Public Access Catalogue (WEB OPAC- IP Based Access) system is also incorporated.. Surveillance cameras help to regulate the movement of the users in the library."
    }    
    LibraryContent2 = {
        instanceID: "LibraryContent2",
        title:"We arrange access to the world of information whether online, multimedia or in print. In order to effectively capitalize on the opportunities provided by radical changes to technology, pedagogy and research practice, the libraries operate in a number of profound ways and work in partnership with faculty members to enhance students' research skill development, encompassing both information literacy and learning skills. "
    }
    LibraryContent3 = {
        instanceID: "LibraryContent3",
        title:"The collection comprises 42501 printed documents such as books, project reports, Mini project reports, Seminar reports and back volumes of journals and the non-book materials like CD ROMs. Membership of the library is open to Students, Teachers and Non Teaching Staff of this college. Library membership is free to all faculty, staff and students.The library also subscribes 128 printed journals, 16 general magazines and library subscribed full text online database like IEEE Xplore, ASCE, ASME, Springer, EBSCO and E - resources through DELNET and National digital library. NPTEL facility to access video lectures are also available."
    }
    DigitalLibraryContent = {
        instanceID: "DigitalLibraryContent" ,
        title: "A well- arranged Digital Library with 60 Computers and 25 headphones help the users to view e-facilities and use Audio/video facilities also. Digital Library can also be accessed anywhere on the campus. This library provides uncompromising information and intellectual requirements for its students and faculty with user friendly approach. It offers a fully integrated and dynamic environment for conducting academic study. Multiple copies ensure that resources are easily available in the reference section and stock section as well."
    }
    LibraryImagedata = {
        instanceID: "LibraryVjcImage",
        image: "cover2-1.jpg",
        width: "100%"
    }
    render() {
      return (
          <React.Fragment>
              <div className="contain">
              <HeadingTwo data={this.LibraryTitle} className="Heading" />
              <ImageOne data={this.LibraryImagedata} />
              <br />
              <div className="bodyContainer">
                    <HeadingTwo data={this.LibraryCentralTitle} className="Heading" />
                    <BodyOneJustified data={this.LibraryContent1} />
                <p>
                    <BodyOneJustified data={this.LibraryContent2} />
                </p>
                <p>
                    <BodyOneJustified data={this.LibraryContent3} />
                </p>
              </div>
              <div className="bodyContainer">
                    <HeadingTwo data={this.LibraryDigitalTitle} className="Heading" />
                    <BodyOneJustified data={this.DigitalLibraryContent} />
              </div>
              </div>
          </React.Fragment>
      )
    }

}

export default Library;