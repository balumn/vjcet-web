import React, { Component } from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
class Dates extends Component {
    state = {};
    ProfileHeading = {
        instanceID: "ProfileHeading",
        title: "Important Dates"
    };
    render() {
        return (
            <div className="Profile" id="profile">
                <HeadingOne data={this.ProfileHeading} />
                <div className="bodyContainer">
                    <table border="1">
                        <tr>
                            <td>Filling up of ONLINE application form(DTE) </td>
                            <td>will be updated soon</td>
                        </tr>
                        <tr>
                            <td>
                                Last date to receive the printed application(DTE)
                            </td>
                            <td>will be updated soon</td>
                        </tr>
                        <tr>
                            <td>
                                Last date to receive the printed application(VJCET)
                            </td>
                            <td>will be updated soon</td>
                        </tr>
                        <tr>
                            <td>
                                Publication of Provisional Rank List(VJCET)
	    </td>
                            <td>will be updated soon</td>
                        </tr>
                        <tr>
                            <td>
                                Selection and Admission (VJCET)
                            </td>
                            <td>will be updated soon</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Dates;
