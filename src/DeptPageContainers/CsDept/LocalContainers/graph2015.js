import React, { Component } from "react";
import HeadingTwo from "../../../Components/Texts/HeadingTwo";
import "./graph.css";
class Graph15 extends Component {
  state = {};
  Graphheading = {
    instanceID: "GraphHeading",
    title: "University Result March 2018"
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
          <li class="bar primary" style={{ height: "49%" }} title="S1">
            <div class="percent">
              49<span>%</span>
            </div>
            <div class="description">S1</div>
          </li>
          <li class="bar secondary" style={{ height: "58%" }} title="S3">
            <div class="percent">
              58<span>%</span>
            </div>
            <div class="description">S3</div>
          </li>
          {/* <li class="bar alert" style={{ height: "64%" }} title="S4">
            <div class="percent">
              64<span>%</span>
            </div>
            <div class="description">S4</div>
          </li>
          <li class="bar success" style={{ height: "84%" }} title="S5">
            <div class="percent">
              84<span>%</span>
            </div>
            <div class="description">S5</div>
          </li> */}
          <li class="bar warning" style={{ height: "89%" }} title="S8">
            <div class="percent">
              89<span>%</span>
            </div>
            <div class="description">S8</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Graph15;
