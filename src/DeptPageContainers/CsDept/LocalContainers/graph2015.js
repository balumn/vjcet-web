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
      <React.Fragment>
        <HeadingTwo data={this.Graphheading} />
        <div class="graphbody">
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
                <span>49%</span>
              </div>
              <div class="description">S1</div>
            </li>
            <li class="bar secondary" style={{ height: "58%" }} title="S3">
              <div class="percent">
                <span>58%</span>
              </div>
              <div class="description">S3</div>
            </li>
            <li class="bar warning" style={{ height: "89%" }} title="S8">
              <div class="percent">
                <span>89%</span>
              </div>
              <div class="description">S8</div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Graph15;
