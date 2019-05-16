import React, { Component } from "react";
import HeadingTwo from "../../../Components/Texts/HeadingTwo";
import "./graph.css";
class Graph12 extends Component {
  state = {};
  Graphheading = {
    instanceID: "GraphHeading",
    title: "2012-2016"
  };
  render() {
    return (
      <React.Fragment>
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
            <li class="bar alert" style={{ height: "58%" }} title="S1-S2">
              <div class="percent">
                58<span>%</span>
              </div>
              <div class="description">S1-S2</div>
            </li>
            <li class="bar secondary" style={{ height: "85%" }} title="S3">
              <div class="percent">{/* 84<span>%</span> */}</div>
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
              <div class="percent">{/* 89<span>%</span> */}</div>
              <div class="description">S6</div>
            </li>
            <li class="bar success" style={{ height: "85%" }} title="S7">
              <div class="percent">{/* 95<span>%</span> */}</div>
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
      </React.Fragment>
    );
  }
}

export default Graph12;
