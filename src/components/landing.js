import React from 'react';
import {Route, Link} from "react-router-dom";

import "./landing.css";
import AboutMe from "./aboutme.js";
import Portfolio from "./portfolio.js";


const landing = () => (
    <div>
        <div className="row backgroundimgHome" id="home">
            <div className="container">
                <h1 className="name">Kenton Wan</h1>
                <h4 className="subtitle">Full Stack Web Developer</h4>
                <div>
                    <a href="#about" id="About Me" className="links">About</a>
                    <span>  |  </span>
                    <a href="#portfolio" id="Portfolio" className="links">Portfolio</a>
                </div>

            </div>
        </div>
        <div className="row backgroundimgAbout" id="about">
            <AboutMe />
            <div>
                    <a href="#home" id="Home" className="links">Home</a>
                    <span>  |  </span>
                    <a href="#about" id="About Me" className="links">About</a>
                    <span>  |  </span>
                    <a href="#portfolio" id="Portfolio" className="links">Portfolio</a>
            </div>
        </div>

        <div id="portfolio">
            <Portfolio />
            <div>
                    <a href="#home" id="Home" className="links">Home</a>
                    <span>  |  </span>
                    <a href="#about" id="About Me" className="links">About</a>
                    <span>  |  </span>
                    <a href="#portfolio" id="Portfolio" className="links">Portfolio</a>
            </div>
        </div>

    </div>
    
);

export default landing;