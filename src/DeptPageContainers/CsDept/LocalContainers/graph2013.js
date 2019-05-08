import React, { Component } from "react";
import HeadingTwo from "../../../Components/Texts/HeadingTwo";
import "./graph.css";
class Graph13 extends Component {
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
          <li class="bar alert" style={{ height: "59%" }} title="S1">
            <div class="percent">
              59<span>%</span>
            </div>
            <div class="description">S1</div>
          </li>
          <li class="bar secondary" style={{ height: "71%" }} title="S2">
            <div class="percent">
              71<span>%</span>
            </div>
            <div class="description">S2</div>
          </li>
          <li class="bar primary" style={{ height: "69%" }} title="S3">
            <div class="percent">
              69<span>%</span>
            </div>
            <div class="description">S3</div>
          </li>
          <li class="bar warning" style={{ height: "62%" }} title="S4">
            <div class="percent">
              62<span>%</span>
            </div>
            <div class="description">S4</div>
          </li>

        </ul>
      </div>
    );
  }
}

export default Graph13;
