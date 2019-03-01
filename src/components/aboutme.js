import React from 'react';

import './aboutme.css';

const aboutme = () => (
    <div className="main-container">
        
        <div className="container">
            <p className="intro">Hi! My name is <span className="color">Kenton Wan</span>.</p> 
            <img src={require("./Kenton_Profile_Pic.png")} height="200" alt="picture of Kenton" className="profilePic"/>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <p className="description text-justify">I am full stack web & software developer living in Los Angeles, CA.  I am passionate about learning new things, and writing clean and effective code.  I am a problem-solver that goes back to my days as a Doctor of Physical Therapy. I am drawn to the endless possibilities of things that can be built in development.</p>
                </div>
            </div>
        </div>
        <div className="row" >
            <div className="container skills">
                <p className="skills"><span className="color">What I Do:</span>  JavaScript, HTML5, CSS3, React, NodeJS, APIs, Express, SQL, PostGreSQL, Git, Firebase, TDD, Jasmine </p>
            </div>
        </div>
    </div>
);

export default aboutme;