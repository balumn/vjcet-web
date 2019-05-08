import React from "react";
import HeadingOne from "../../Components/Texts/HeadingOne"
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
class ProfBodies extends React.Component {

    DeptProfHeadingOne = {
        instanceID: "DeptProfHeadingOne",
        title: "PROFESSIONAL BODIES"
    }
    List1Title = {
        instanceID: "List1Title",
        title: "IGBC"
    };
    List1Content = {
        instanceID: "List1Content",
        title: "The student chapter of Indian Green Building Council at VJCET is a part of the Confederation of Indian Industry. The individual members would work along with the esteemed community of green building professionals who facilitate the nation to be one among the global leaders in sustainable built environment. "
    };

    List2Title = {
        instanceID: "List2Title",
        title: "IGS"
    };
    List2Content = {
        instanceID: "List2Content",
        title: "The Indian Geotechnical Society student chapter aims at promoting co-operation for the advancement and dissemination of knowledge in the fields of Soil Mechanics, Foundation Engineering, Soil Dynamics, Engineering Geology, and allied fields and their practical applications."
    };

    List3Title = {
        instanceID: "List3Title",
        title: "IMS"
    };
    List3Content = {
        instanceID: "List3Content",
        title: "Indian Meterological Society student chapter is constituted for the dissemination of knowledge on meteorological and allied sciences   It aims for the promotion of application of these to various constructive human activities such as agriculture and land uses, irrigation and power development, navigation of sea and air, engineering and technology and public health."
    };
    List4Title = {
        instanceID: "List4Title",
        title: "UNAI-ASPIRE (Action by Students to Promote Innovation and Reform through Education)"
    };
    List4Content = {
        instanceID: "List5Content",
        title: "-The United Nations Academic Impact (UNAI) is a global initiative that aligns institutions of higher education with the United Nations in furthering the realization of the purposes and mandate of the Organization through activities and research in a shared culture of intellectual social responsibility. ASPIRE is a student-driven initiative and actively embodies UNAI’s principles within student communities around the world. Operating locally within their communities, the activities of each ASPIRE group contributes to UNAI’s overall message of unity and action to address global challenges."
    };
    render() {
        return (
            <React.Fragment>
                <div>
                    <HeadingOne data={this.DeptProfHeadingOne} />
                    <HeadingTwo data={this.List1Title} className="Heading" />
                    <BodyOneJustified data={this.List1Content} />
                    <HeadingTwo data={this.List2Title} className="Heading" />
                    <BodyOneJustified data={this.List2Content} />
                    <HeadingTwo data={this.List3Title} className="Heading" />
                    <BodyOneJustified data={this.List3Content} />
                    <HeadingTwo data={this.List4Title} className="Heading" />
                    <BodyOneJustified data={this.List4Content} />
                </div>

            </React.Fragment >
        )
    }

}

export default ProfBodies;