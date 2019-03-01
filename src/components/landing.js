import React from 'react';
import {Route, Link} from "react-router-dom";

import "./landing.css";
import AboutMe from "./aboutme.js";
import Portfolio from "./portfolio.js";


const landing = () => (
    <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div className="container">
              <a className="navbar-brand" href="#home"><strong>KW</strong></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="view" id="home">
            <div className="mask rgba-black-light align-items-center">
              <div className="container">
                <div className="row">
                  <div className="title col-md-12 mb-4 white-text text-center">
                    <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown" data-wow-delay="0.3s"><strong>Kenton Wan</strong></h1>
                    <hr className="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s"></hr>
                    <h5 className="text-uppercase mb-4 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Full Stack Web Developer</strong></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </header>

        <main>
          <div className="container aboutMe" id="about">
            <div className="row py-5">
              <div className="col-md-12 text-center">

              <AboutMe />

              </div>
            </div>
          </div>
        </main>
        
        <div className="portfolio" id="portfolio">
            <div className="mask rgba-black-light align-items-center">
              <div className="container">
                <div className="row">
                </div>
              </div>
            </div>
          </div>

        </div>


    
);

export default landing;