import React, { Component } from "react";
import HeadingTwo from "../../../Components/Texts/HeadingTwo";
import "./graph.css";
class Graph15 extends Component {
  state = {};
  Graphheading = {
    instanceID: "GraphHeading",
    title: "2015-2019"
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
          <li class="bar primary" style={{ height: "65%" }} title="S1-S2">
            <div class="percent">
              65<span>%</span>
            </div>
            <div class="description">S1-S2</div>
          </li>
          <li class="bar secondary" style={{ height: "35%" }} title="S3">
            <div class="percent">
              35<span>%</span>
            </div>
            <div class="description">S3</div>
          </li>
          <li class="bar alert" style={{ height: "20%" }} title="S4">
            <div class="percent">
              20<span>%</span>
            </div>
            <div class="description">S4</div>
          </li>
          <li class="bar success" style={{ height: "64%" }} title="S5">
            <div class="percent">
              64<span>%</span>
            </div>
            <div class="description">S5</div>
          </li>
          <li class="bar warning" style={{ height: "36%" }} title="S6">
            <div class="percent">
              36<span>%</span>
            </div>
            <div class="description">S6</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Graph15;
