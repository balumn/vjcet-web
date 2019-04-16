import React, { Component } from "react";
import HeadingTwo from "../../../Components/Texts/HeadingTwo";
import "./graph.css";
class Graph11 extends Component {
  state = {};
  Graphheading = {
    instanceID: "GraphHeading",
    title: "2011-2016"
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
          <li class="bar alert" style={{ height: "59%" }} title="S1-S2">
            <div class="percent">
              58<span>%</span>
            </div>
            <div class="description">S1-S2</div>
          </li>
          <li class="bar secondary" style={{ height: "83%" }} title="S3">
            <div class="percent">
              83<span>%</span>
            </div>
            <div class="description">S3</div>
          </li>
          <li class="bar primary" style={{ height: "60%" }} title="S4">
            <div class="percent">
              60<span>%</span>
            </div>
            <div class="description">S4</div>
          </li>
          <li class="bar warning" style={{ height: "60%" }} title="S5">
            <div class="percent">
              60<span>%</span>
            </div>
            <div class="description">S5</div>
          </li>
          <li class="bar success" style={{ height: "85%" }} title="S6">
            <div class="percent">
              85<span>%</span>
            </div>
            <div class="description">S6</div>
          </li>
          <li class="bar success" style={{ height: "88%" }} title="S7">
            <div class="percent">
              88<span>%</span>
            </div>
            <div class="description">S7</div>
          </li>
          <li class="bar success" style={{ height: "90%" }} title="S8">
            <div class="percent">
              90<span>%</span>
            </div>
            <div class="description">S8</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Graph11;
