import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
class Profile extends Component {
  state = {};
  ProfileHeading = {
    instanceID: "ProfileHeading",
    title: "Profile"
  };
  ProfileDescriptionOne = {
    instanceID: "ProfileDescriptionOne",
    title:
      "Consistently ranked as one of the top performers among the colleges affiliated to APJ Abdul KalamTechnological University, the Department maintains academic alliances with several industries and training institutes which help them evolve as socially committed Engineers. We seek to promote the overall growth of every student by way of academic mentoring as well as through provision of avenues for career development and career growth."
  };
  Ceheading = {
    instanceID: "Ceheading",
    title: "Salient Features:"
  };
  Features1 = {
    instanceID: "Features1",
    title: "•	Well-equipped Laboratories which offer external consultancy services and students’ involvement in the same"
  };
  Features1list1 = {
    instanceID: "Features1list1",
    title: "o	Concrete Mix Design"
  };
  Features1list2 = {
    instanceID: "Features1list2",
    title: "o	BM&BC Mix Design"
  };
  Features1list3 = {
    instanceID: "Features1list3",
    title: "o	Building Material Testing Services"
  };
  Features1list4 = {
    instanceID: "Features1list4",
    title: "o	Water Quality Analysis"
  };
  Features2 = {
    instanceID: "Features2",
    title: "•	Industry-oriented real-time student projects"
  };
  Features3 = {
    instanceID: "Features3",
    title: "•	Hands-on training sessions on BIM software and allied emerging technologies"
  };
  Features4 = {
    instanceID: "Features4",
    title: "•	Industry internships and interface  vide  III ( Industry-Institute-Interaction ) Cell , MoU  undertaken with industries of prominence in construction sector"
  };
  Features5 = {
    instanceID: "Features5",
    title: "•	Active student professional bodies such as:"
  };
  Features5list1 = {
    instanceID: "Feature5list1",
    title: "o	IGBC ( Indian green Building Council)"
  }
  Features5list2 = {
    instanceID: "Feature5list2",
    title: "o	IMS ( Indian Meteorological Society) "
  }
  Features5list3 = {
    instanceID: "Feature5list3",
    title: "o	IGS (Indian Geotechnical Society) "
  }
  Features5list4 = {
    instanceID: "Feature5list4",
    title: "o	UNAI   ( United Nations Academic Impact- ASPIRE)"
  }
  Features6 = {
    instanceID: "Features6",
    title: "•	Student internship opportunities at IITs, KILA and other premier institutes "
  };
  Features7 = {
    instanceID: "Features7",
    title: "•	Involvement with construction projects in the campus through SeC ( Structural Engineering Club) and FABLAB"
  };
  Features8 = {
    instanceID: "Features8",
    title: "•	Avenues for social outreach and inculcation of civic sense ; the department being a TPTA ( Third Party Technical Agency) for PMAY (G)"
  };
  Features9 = {
    instanceID: "Features9",
    title: "•	Student involvement in research initiatives through R&D Cell"
  };
  render() {
    return (
      <div className="Profile" id="profile">
        <HeadingOne data={this.ProfileHeading} />
        <Bodythree data={this.ProfileDescriptionOne} />
        <div className="bodyContainer">
          <HeadingTwo data={this.Ceheading} className="Heading" />
          <p><BodyOneJustified data={this.Features1} /></p>
          <div className="bodyContainerInner">
            <p><BodyOneJustified data={this.Features1list1}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.Features1list2}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.Features1list3}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.Features1list4}></BodyOneJustified></p>
          </div>
          <p><BodyOneJustified data={this.Features2} /></p>
          <p><BodyOneJustified data={this.Features3} /></p>
          <p><BodyOneJustified data={this.Features4} /></p>
          <p><BodyOneJustified data={this.Features5} /></p>
          <div className="bodyContainerInner">
            <p><BodyOneJustified data={this.Features5list1}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.Features5list2}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.Features5list3}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.Features5list4}></BodyOneJustified></p>
          </div>
          <p><BodyOneJustified data={this.Features6} /></p>
          <p><BodyOneJustified data={this.Features7} /></p>
          <p><BodyOneJustified data={this.Features8} /></p>
          <p><BodyOneJustified data={this.Features9} /></p>
        </div>
      </div>
    );
  }
}

export default Profile;
