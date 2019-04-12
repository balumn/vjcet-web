import React, { Component } from "react";
import HeadingTwo from "../../../Components/Texts/HeadingTwo";
import "./graph.css";
class Graph14 extends Component {
  state = {};
  Graphheading = {
    instanceID: "GraphHeading",
    title: "Odd Semester 2017-2018"
  };
  render() {
    return (
      <div class="graphbody">
        <HeadingTwo data={this.Graphheading} />
        <ul class="bar-graph">
          <li class="bar-graph-axis">
            <div class="bar-graph-label">100%</div>
            <div class="bar-graph-label">80%</div>
            <div class="bar-graph-label">60%</div>
            <div class="bar-graph-label">40%</div>
            <div class="bar-graph-label">20%</div>
            <div class="bar-graph-label">0%</div>
          </li>
          <li class="bar alert" style={{ height: "49%" }} title="S1">
            <div class="percent">
              49<span>%</span>
            </div>
            <div class="description">S1</div>
          </li>
          <li class="bar secondary" style={{ height: "53%" }} title="S3">
            <div class="percent">
              53<span>%</span>
            </div>
            <div class="description">S3</div>
          </li>
          {/* <li class="bar primary" style={{ height: "59%" }} title="S4">
            <div class="percent">
              59<span>%</span>
            </div>
            <div class="description">S4</div>
          </li> */}
          <li class="bar warning" style={{ height: "47%" }} title="S5">
            <div class="percent">
              47<span>%</span>
            </div>
            <div class="description">S5</div>
          </li>
          {/* <li class="bar success" style={{ height: "75%" }} title="S6">
            <div class="percent">
              75<span>%</span>
            </div>
            <div class="description">S6</div>
          </li> */}
          <li class="bar success" style={{ height: "73%" }} title="S7">
            <div class="percent">
              73<span>%</span>
            </div>
            <div class="description">S7</div>
          </li>
          {/* <li class="bar success" style={{ height: "98%" }} title="S8">
            <div class="percent">
              93<span>%</span>
            </div>
            <div class="description">S8</div>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default Graph14;
