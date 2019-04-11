import React, { Component } from "react";
import "./Nav.css";
import Graph15 from "./graph2015";
import Graph14 from "./graph2014";
import Graph13 from "./graph2013";
import Graph12 from "./graph2012";
import Graph11 from "./graph2011";
import Graph10 from "./graph2010";
import HeadingOne from "../../../Components/Texts/HeadingOne";
class CeGraph extends Component {
  state = {
    show15: true,
    show14: false,
    show13: false,
    show12: false,
    show11: false,
    show10: false
  };
  onClick15 = () => {
    this.setState({
      show15: true,
      show14: false,
      show13: false,
      show12: false,
      show11: false,
      show10: false
    });
  };
  onClick14 = () => {
    this.setState({
      show15: false,
      show14: true,
      show13: false,
      show12: false,
      show11: false,
      show10: false
    });
  };

  onClick13 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: true,
      show12: false,
      show11: false,
      show10: false
    });
  };
  onClick12 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: false,
      show12: true,
      show11: false,
      show10: false
    });
  };
  onClick11 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: false,
      show12: false,
      show11: true,
      show10: false
    });
  };
  onClick10 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: false,
      show12: false,
      show11: false,
      show10: true
    });
  };
  Heading = {
    instanceID: "Heading",
    title: "RESULT"
  };
  render() {
    return (
      <div>
        <div class="graph">
          <HeadingOne data={this.Heading} />
          <input
            type="button"
            value="University Results March 2018"
            class="buttongraph"
            onClick={this.onClick15}
          />
          <input
            type="button"
            value="University Results May 2017"
            class="buttongraph"
            onClick={this.onClick14}
          />
          {/* <input
            type="button"
            value="2013-2017"
            class="buttongraph"
            onClick={this.onClick13}
          />
          <input
            type="button"
            value="2012-2016"
            class="buttongraph"
            onClick={this.onClick12}
          />
          <input
            type="button"
            value="2011-2015"
            class="buttongraph"
            onClick={this.onClick11}
          />
          <input
            type="button"
            value="2010-2014"
            class="buttongraph"
            onClick={this.onClick10}
          /> */}
        </div>
        <div class="graphContent">
          {this.state.show15 ? <Graph15 /> : null}
          {this.state.show14 ? <Graph14 /> : null}
          {/* {this.state.show13 ? <Graph13 /> : null}
          {this.state.show12 ? <Graph12 /> : null}
          {this.state.show11 ? <Graph11 /> : null}
          {this.state.show10 ? <Graph10 /> : null} */}
        </div>
      </div>
    );
  }
}

export default CeGraph;
