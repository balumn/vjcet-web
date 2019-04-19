import React, { Component } from "react";
import "./Nav.css";
import Graph15 from "./graph2015";
import ItHonors from "././ithonors";
import HeadingOne from "../../../Components/Texts/HeadingOne";
class EcGraph extends Component {
  state = {
    show15: true,
    show14: false,
    show13: false,
    show12: false,
    show11: false,
    show10: false,
    showhon: false
  };
  onClick15 = () => {
    this.setState({
      show15: true,
      show14: false,
      show13: false,
      show12: false,
      show11: false,
      show10: false,
      showhon: false
    });
  };
  onClick14 = () => {
    this.setState({
      show15: false,
      show14: true,
      show13: false,
      show12: false,
      show11: false,
      show10: false,
      showhon: false
    });
  };

  onClick13 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: true,
      show12: false,
      show11: false,
      show10: false,
      showhon: false
    });
  };
  onClick12 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: false,
      show12: true,
      show11: false,
      show10: false,
      showhon: false
    });
  };
  onClick11 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: false,
      show12: false,
      show11: true,
      show10: false,
      showhon: false
    });
  };
  onClick10 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: false,
      show12: false,
      show11: false,
      show10: true,
      showhon: false
    });
  };
  onClickHon = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: false,
      show12: false,
      show11: false,
      show10: false,
      showhon: true
    });
  };
  Heading = {
    instanceID: "Heading",
    title: "RESULT & HONORS"
  };
  render() {
    return (
      <div>
        <div class="graphContent">
          <div >
            <HeadingOne data={this.Heading} />
            <input
              type="button"
              value="Even Semester 2017-2018"
              class="buttongraph"
              onClick={this.onClick15}
            />

            <input
              type="button"
              value="Roll of Honors"
              class="buttongraph"
              onClick={this.onClickHon}
            />
          </div>
          {this.state.show15 ? <Graph15 /> : null}
          {this.state.showhon ? <ItHonors /> : null}
        </div>
      </div>
    );
  }
}

export default EcGraph;
