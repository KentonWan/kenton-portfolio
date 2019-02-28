import React from 'react';
import {Route, Link} from "react-router-dom";

import "./landing.css";
import AboutMe from "./aboutme.js"

const landing = () => (
    <div>
        <div className="row backgroundimg">
            <div className="container">
                <h1 className="name">Kenton Wan</h1>
                <h4 className="subtitle">Full Stack Web Developer</h4>
                <div>
                    <a href="#about" id="About Me" className="links">About</a>
                    {/* <Link id="links" to="/aboutme">About Me</Link> */}
                    <span>  |  </span>
                    <a href="#portfolio" id="Portfolio" className="links">Portfolio</a>
                </div>

            </div>
        </div>
        <div id="about">
            <AboutMe />
        </div>

    </div>
    
);

export default landing;