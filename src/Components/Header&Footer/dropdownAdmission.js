import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownAdm extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener("click", this.closeMenu);
            });
        }
    }

    render() {
        return (
            <div className="dropdown">
                <span>Admissions</span>
                <div className="dropdown-content">
                    <p>
                        <a
                            href="http://admission.vjcet.ac.in/"
                            className="patch1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            B.Tech Admissions
                        </a>
                    </p>
                    <p>
                        <Link
                            to="/admission/mtech"
                            className="patch1"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            M.Tech Admissions
            </Link>
                    </p>
                    <p>
                        <a
                            href="http://www.vjcetmba.in/"
                            className="patch1"
                            target="_blank"
                            rel="noopener noreferrer"
                            MBA Admissions
                        >
                            MBA Admissions
            </a>
                    </p>
                </div>
            </div>
        );
    }
}
export default DropDownAdm;
