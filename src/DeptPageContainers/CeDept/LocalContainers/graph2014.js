import React, { Component } from "react";
import HeadingTwo from "../../../Components/Texts/HeadingTwo";
import "./graph.css";
class Graph14 extends Component {
  state = {};
  Graphheading = {
    instanceID: "GraphHeading",
    title: "2014-2018"
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
            <li class="bar alert" style={{ height: "70%" }} title="S1-S2">
              <div class="percent">
                70<span>%</span>
              </div>
              <div class="description">S1-S2</div>
            </li>
            <li class="bar secondary" style={{ height: "84%" }} title="S3">
              <div class="percent">
                84<span>%</span>
              </div>
              <div class="description">S3</div>
            </li>
            <li class="bar primary" style={{ height: "75%" }} title="S4">
              <div class="percent">
                75<span>%</span>
              </div>
              <div class="description">S4</div>
            </li>
            <li class="bar warning" style={{ height: "72%" }} title="S5">
              <div class="percent">
                72<span>%</span>
              </div>
              <div class="description">S5</div>
            </li>
            <li class="bar success" style={{ height: "89%" }} title="S6">
              <div class="percent">
                89<span>%</span>
              </div>
              <div class="description">S6</div>
            </li>
            <li class="bar success" style={{ height: "95%" }} title="S7">
              <div class="percent">
                95<span>%</span>
              </div>
              <div class="description">S7</div>
            </li>
            <li class="bar success" style={{ height: "98%" }} title="S8">
              <div class="percent">
                98<span>%</span>
              </div>
              <div class="description">S8</div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Graph14;
