import React, { Component } from "react";
import HeadingTwo from "../../../Components/Texts/HeadingTwo";
import "./graph.css";
class Graph12 extends Component {
  state = {};
  Graphheading = {
    instanceID: "GraphHeading",
    title: "2016-2020"
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
          <li class="bar primary" style={{ height: "72%" }} title="S1-S2">
            <div class="percent">
              72<span>%</span>
            </div>
            <div class="description">S1-S2</div>
          </li>
          <li class="bar secondary" style={{ height: "45%" }} title="S3">
            <div class="percent">
              45<span>%</span>
            </div>
            <div class="description">S3</div>
          </li>
          <li class="bar alert" style={{ height: "39%" }} title="S4">
            <div class="percent">
              39<span>%</span>
            </div>
            <div class="description">S4</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Graph12;
