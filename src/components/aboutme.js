import React from 'react';

import './aboutme.css';

const aboutme = () => (
    <div className="main-container">
        
        <div className="container">
            <p className="intro">Hi! My name is <span className="color">Kenton Wan</span>.</p>
            <div className="row">
                <div className="col-md-4 offset-md-2 descriptionPic">
                    <img src={require("./Kenton_Profile_Pic.png")} height="250" alt="picture of Kenton" className="profilePic"/>
                </div>
                <div className="col-md-3 descriptionDiv">
                    <p className="description text-justify">I am full stack web and software developer living in Los Angeles, CA.  I am passionate about learning new things, and writing clean and effective code.  I am a problem-solver that goes back to my days as a Doctor of Physical Therapy. I am drawn to the endless possibilities of things that can be built in development.</p>
                </div>            
            </div> 
           
        </div>
        <div className="container skills">

            <div className="row skillsRow">
                <div className="col-md-2 offset-md-3 skillsTitle">
                    <p className="color">Front-End:</p>
                    <p>JavaScript</p>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>Bootstrap</p>
                    <p>ReactJS</p>
                </div>
                <div className="col-md-2 skillsTitle">
                    <p className="color">Back-End:</p>
                    <p>NodeJS</p>
                    <p>Express</p>
                    <p>APIs</p>
                    <p>SQL</p>
                    <p>PostgreSQL</p>
                    <p>Firebase</p>
                </div>
                <div className="col-md-2 skillsTitle">
                    <p className="color">Other:</p>
                    <p>TDD</p>
                    <p>Jasmine</p>
                    <p>Git</p>
                    <p>Heroku</p>
                </div>
            
            </div>
        </div>
    </div>
);

export default aboutme;