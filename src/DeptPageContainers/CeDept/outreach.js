import React from "react";
import HeadingOne from "../../Components/Texts/HeadingOne"
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
class Outreach extends React.Component {

    DeptOutreachHeadingOne = {
        instanceID: "DeptOutreachHeadingOne",
        title: "Outreach Program"
    }
    List1Title = {
        instanceID: "List1Title",
        title: "EXTERNAL CONSULTANCY SERVICES"
    };
    List1Content = {
        instanceID: "List1Content",
        title: "To provide an interface for students with the industry, we offer external consultancy services through our well-equipped Laboratories with students’ involvement in the same."
    };
    List1Content1 = {
        instanceID: "List1Content1",
        title: "o	Concrete Mix Design"
    };
    List1Content2 = {
        instanceID: "List1Content2",
        title: "o	BM & BC Mix Design"
    };
    List1Content3 = {
        instanceID: "List1Content3",
        title: "o	Building material testing services"
    };
    List1Content4 = {
        instanceID: "List1Content4",
        title: "o	Water Quality Analysis"
    };
    List2Title = {
        instanceID: "List2Title",
        title: "SEC ∞"
    };
    List2Content = {
        instanceID: "List2Content",
        title: "Structural Engineering Club of the Department aims to bridge the gap between academics and real time practices in the industry. The objective is to expose students to the prevalent techniques and practices in the domain of Structural Engineering. The club activities include Design projects, technical talks, group discussion and site visits."
    };

    List3Title = {
        instanceID: "List3Title",
        title: "MINDSPARK"
    };
    List3Content = {
        instanceID: "List3Content",
        title: "‘Mindspark’ is a curriculum enrichment program where the final year students deliver lectures for junior students addressing the innovative techniques and challenges in the contemporary Civil Engineering arena. The outcomes of the discussion are also meant to prompt the students with innovative ideas to replace the inept practices and complex methodologies adopted in construction industry."
    };
    List4Title = {
        instanceID: "List4Title",
        title: "INDUSTRY INSTITUTE INTERACTION CELL"
    };
    List4Content = {
        instanceID: "List4Content",
        title: "Better interaction between Technical institutions and industry is the need of the hour. This will have great bearing on the Engineering Curriculum and provides exposure to industrial atmosphere for engineering students and subsequent placement of young graduating engineers in industries across the country. III Cell has organised several events to nurture the industry institute interaction at VJCET in association with institute and department level entities. "
    };
    List5Title = {
        instanceID: "List5Title",
        title: "ROOPAREKHA"
    };
    List5Content = {
        instanceID: "List5Content",
        title: "‘Rooparekha’ is an initiative from the Department to assist in preparation of plans, submission of drawings and estimates to cater to the Economically Weaker Sections (EWS) and Low Income Groups (LIG) beneficiaries of the neighbouring panchayaths."
    };
    List6Title = {
        instanceID: "List6Title",
        title: "SOCIAL OUT REACH PROGRAMS"
    };
    List6Content = {
        instanceID: "List6Content",
        title: "The Department is chosen as TPTA (Third Party Technical Agency) and Nodal centre for PMAY-G (Pradhan MantriAwasYojna-Gramin). Students can partake in projects and programs initiated under PMAY-G."
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <HeadingOne data={this.DeptOutreachHeadingOne} />
                    <HeadingTwo data={this.List1Title} className="Heading" />
                    <BodyOneJustified data={this.List1Content} />
                    <div className="bodyContainerInner">
                        <p><BodyOneJustified data={this.List1Content1}></BodyOneJustified></p>
                        <p><BodyOneJustified data={this.List1Content2}></BodyOneJustified></p>
                        <p><BodyOneJustified data={this.List1Content3}></BodyOneJustified></p>
                        <p><BodyOneJustified data={this.List1Content4}></BodyOneJustified></p>
                    </div>
                    <HeadingTwo data={this.List2Title} className="Heading" />
                    <BodyOneJustified data={this.List2Content} />
                    <HeadingTwo data={this.List3Title} className="Heading" />
                    <BodyOneJustified data={this.List3Content} />
                    <HeadingTwo data={this.List4Title} className="Heading" />
                    <BodyOneJustified data={this.List4Content} />
                    <HeadingTwo data={this.List5Title} className="Heading" />
                    <BodyOneJustified data={this.List5Content} />
                    <HeadingTwo data={this.List6Title} className="Heading" />
                    <BodyOneJustified data={this.List6Content} />
                </div>

            </React.Fragment >
        )
    }

}

export default Outreach;