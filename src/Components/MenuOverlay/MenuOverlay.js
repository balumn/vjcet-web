import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuOverlay.css";
class MenuOverlay extends Component {
  constructor() {
    super();
    this.state = {
      menuItem1: true,
      menuItem2: true,
      menuItem3: true,
      menuItem4: true,
      menuItem5: true,
      menuItem6: true
    };
  }

  menuItem1() {
    this.setState({
      menuItem1: !this.state.menuItem1
    });
  }

  menuItem2() {
    this.setState({
      menuItem2: !this.state.menuItem2
    });
  }

  menuItem3() {
    this.setState({
      menuItem3: !this.state.menuItem3
    });
  }

  menuItem4() {
    this.setState({
      menuItem4: !this.state.menuItem4
    });
  }

  menuItem5() {
    this.setState({
      menuItem5: !this.state.menuItem5
    });
  }

  menuItem6() {
    this.setState({
      menuItem6: !this.state.menuItem6
    });
  }

  render() {
    var menuItem1Style = {
      display: this.state.menuItem1 ? "none" : "grid"
    };

    var menuItem2Style = {
      display: this.state.menuItem2 ? "none" : "grid"
    };

    var menuItem3Style = {
      display: this.state.menuItem3 ? "none" : "grid"
    };

    var menuItem4Style = {
      display: this.state.menuItem4 ? "none" : "grid"
    };

    var menuItem5Style = {
      display: this.state.menuItem5 ? "none" : "grid"
    };

    var menuItem6Style = {
      display: this.state.menuItem6 ? "none" : "grid"
    };

    return (
      <div
        className="MenuOverlay"
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px"
        }}
      >
        <div className="MenuOverlayContent">
          <p
            id="MenuOverlayCloseButton"
            onClick={e => {
              this.props.closeMenuFunction();
            }}
          >
            x
          </p>

          <div id="menuItem1">
            <button
              className="MenuOverlayItem"
              onClick={this.menuItem1.bind(this)}
            >
              <Link to="#">About VJCET</Link>
            </button>

            <div className="MenuOverlaySubLinkGroup" style={menuItem1Style}>
              <Link className="MenuOverlaySubLinks" to="/about">
                About College
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Accreditation
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                KeyFunctionaries
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Contact Us
              </Link>
            </div>
          </div>

          <div id="menuItem2">
            <button
              className="MenuOverlayItem"
              onClick={this.menuItem2.bind(this)}
            >
              <Link to="#">Login</Link>
            </button>

            <div className="MenuOverlaySubLinkGroup" style={menuItem2Style}>
              <Link className="MenuOverlaySubLinks" to="/about">
                Staff & Parents
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Moodle
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Admissions
              </Link>
            </div>
          </div>

          <div id="menuItem3">
            <button
              className="MenuOverlayItem"
              onClick={this.menuItem3.bind(this)}
            >
              <Link to="#">Departments</Link>
            </button>

            <div className="MenuOverlaySubLinkGroup" style={menuItem3Style}>
              <Link className="MenuOverlaySubLinks" to="/about">
                Civil Engineering
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Computer Science Engineering
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Electronics & Communication Engineering
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Electrical & Electronics Engineering
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Information Technology Engineering
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Mechanical Engineering
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Science & Humanities
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                MBA
              </Link>
            </div>
          </div>

          <div id="menuItem4">
            <button
              className="MenuOverlayItem"
              onClick={this.menuItem4.bind(this)}
            >
              <Link to="#">Campus Life</Link>
            </button>

            <div className="MenuOverlaySubLinkGroup" style={menuItem4Style}>
              <Link className="MenuOverlaySubLinks" to="/about">
                Campus
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Campus M-Map
              </Link>
            </div>
          </div>

          <div id="menuItem5">
            <button
              className="MenuOverlayItem"
              onClick={this.menuItem5.bind(this)}
            >
              <Link to="#">Facilities</Link>
            </button>

            <div className="MenuOverlaySubLinkGroup" style={menuItem5Style}>
              <Link className="MenuOverlaySubLinks" to="/about">
                Common Computing Center
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Central Library
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Core Facilities
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Hostel
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Sports
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Transportation
              </Link>
            </div>
          </div>

          <div id="menuItem6">
            <button
              className="MenuOverlayItem"
              onClick={this.menuItem6.bind(this)}
            >
              <Link to="#">Academics</Link>
            </button>

            <div className="MenuOverlaySubLinkGroup" style={menuItem6Style}>
              <Link className="MenuOverlaySubLinks" to="/about">
                Calendar
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Curriculum
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Honors
              </Link>
              <Link className="MenuOverlaySubLinks" to="/about">
                Placements
              </Link>
            </div>
          </div>

          <Link id="menuItem7" className="MenuOverlayItem" to="/about">
            RD
          </Link>
        </div>
      </div>
    );
  }
}
export default MenuOverlay;
