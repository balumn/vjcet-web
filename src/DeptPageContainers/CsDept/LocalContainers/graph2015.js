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
            <li class="bar primary" style={{ height: "58%" }} title="S1-S2">
              <div class="percent">
                <span>58%</span>
              </div>
              <div class="description">S1-S2</div>
            </li>
            <li class="bar success" style={{ height: "74%" }} title="S3">
              <div class="percent">
                <span>74%</span>
              </div>
              <div class="description">S3</div>
            </li>
            <li class="bar primary" style={{ height: "58%" }} title="S4">
              <div class="percent">
                <span>58%</span>
              </div>
              <div class="description">S4</div>
            </li>
            <li class="bar secondary" style={{ height: "67%" }} title="S4">
              <div class="percent">
                <span>67%</span>
              </div>
              <div class="description">S5</div>
            </li>
            <li class="bar success" style={{ height: "71%" }} title="S4">
              <div class="percent">
                <span>71%</span>
              </div>
              <div class="description">S6</div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Graph15;
