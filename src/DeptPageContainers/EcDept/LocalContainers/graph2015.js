import React, { Component } from "react";
import HeadingTwo from "../../../Components/Texts/HeadingTwo";
import "./graph.css";
class Graph15 extends Component {
  state = {};
  Graphheading = {
    instanceID: "GraphHeading",
    title: "University Result May 2018"
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
          <li class="bar primary" style={{ height: "76%" }} title="S2">
            <div class="percent">
              76<span>%</span>
            </div>
            <div class="description">S2</div>
          </li>
          {/* <li class="bar secondary" style={{ height: "58%" }} title="S3">
            <div class="percent">
              58<span>%</span>
            </div>
            <div class="description">S3</div>
          </li> */}
          <li class="bar alert" style={{ height: "46%" }} title="S4">
            <div class="percent">
              46<span>%</span>
            </div>
            <div class="description">S4</div>
          </li>
          <li class="bar warning" style={{ height: "54%" }} title="S6">
            <div class="percent">
              54<span>%</span>
            </div>
            <div class="description">S6</div>
          </li>
          <li class="bar success" style={{ height: "87%" }} title="S8">
            <div class="percent">
              87<span>%</span>
            </div>
            <div class="description">S8</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Graph15;
