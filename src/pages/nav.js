import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="stop"></div>
                <div className="sbottom"></div>
                <div className="seye"></div>
                <div className="sbottompatch"></div>

                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
                    <div className="container-fluid">
                        <a href="/home" className="navbar-brand">Andrea Suarez Atelier</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <i className="hamburger fas fa-bars"></i>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/our-work"}>OUR WORK</Link>
                                    
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/designer"}>THE DESIGNER</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/rentals">RENTALS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/packages">PACKAGES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/studio">/ A / STUDIO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navigation;