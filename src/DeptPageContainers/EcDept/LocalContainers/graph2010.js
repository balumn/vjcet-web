import React, { Component } from "react";
import HeadingTwo from "../../../Components/Texts/HeadingTwo";
import "./graph.css";
class Graph10 extends Component {
  state = {};
  Graphheading = {
    instanceID: "GraphHeading",
    title: "2010-2014"
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
            <li class="bar primary" style={{ height: "47%" }} title="S1-S2">
              <div class="percent">
                47<span>%</span>
              </div>
              <div class="description">S1-S2</div>
            </li>
            <li class="bar secondary" style={{ height: "67%" }} title="S3">
              <div class="percent">
                67<span>%</span>
              </div>
              <div class="description">S3</div>
            </li>
            <li class="bar alert" style={{ height: "42%" }} title="S4">
              <div class="percent">
                42<span>%</span>
              </div>
              <div class="description">S4</div>
            </li>
            <li class="bar warning" style={{ height: "45%" }} title="S5">
              <div class="percent">
                45<span>%</span>
              </div>
              <div class="description">S5</div>
            </li>
            <li class="bar success" style={{ height: "80%" }} title="S6">
              <div class="percent">
                80<span>%</span>
              </div>
              <div class="description">S6</div>
            </li>
            <li class="bar success" style={{ height: "87%" }} title="S7">
              <div class="percent">
                87<span>%</span>
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
      </React.Fragment>
    );
  }
}

export default Graph10;
