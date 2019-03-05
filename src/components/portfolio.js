import React from 'react';

import './portfolio.css';

const portfolio = () => (
    <div className="main-container">
        <div class="container portfolioContainer">

            <h4 className="col-md-12 portfolioTitle">My Projects</h4>

            <div class="row gruscery">
                <div class="col-md-4 offset-md-1">
                    <img src={require("./portfolio-pictures/gruscery-list.png")} width="200" alt="picture of app" className="grusceryListPic"/>
                </div>
                <div class="col-md-6">
                    <h6 className="projectTitle">G'us'cery List</h6>
                    <p className="projectDescription">Real-time grocery list app built with React.JS, Node.JS and PostgreSQL utilizing TDD and RESTful API. Users are able to create, modify and collaborate on grocery shopping lists.  <a href="https://gruscery-list.herokuapp.com/" className="projectLink" target="_blank">Link</a></p>
                    
                </div>
            </div>

            <div class="row trek">
                <div class="col-md-4 offset-md-1">
                    <img src={require("./portfolio-pictures/trek-tribe.jpg")} width="200" alt="picture of app" className="trekTribePic"/>
                </div>
                <div class="col-md-6">
                    <h6 className="projectTitle">Trek Tribe</h6>
                    <p className="projectDescription">Rich single-page application built with React.JS, Firebase for auth and storage. Integrated with a hiking API to allow users to see list of hikes based on zip code. Users can create hiking groups with designated hike and time that other users can join.  <a href="https://trek-tribe.herokuapp.com/" className="projectLink" target="_blank">Link</a></p>
                    
                </div>
            </div>
            
            {/* wanipedia */}
            <div class="row wanipedia">
                <div class="col-md-4 offset-md-1">
                    <img src={require("./portfolio-pictures/wanipedia.png")} width="200" alt="picture of app" className="wanipediaPic"/>
                </div>
                <div class="col-md-6">
                    <h6 className="projectTitle">Wanipedia</h6>
                    <p className="projectDescription">Web app that allows users to create, collaborate and share wikis. Built with Node.JS using TDD and RESTful services. Integration with Stripe for users to upgrade membership. Implemented email sending and user authentication with SendGrid and Passport.JS.   <a href="https://kentonwan-blocipedia.herokuapp.com/" className="projectLink" target="_blank">Link</a></p>
                    
                </div>
            </div>

            {/* wannit */}
            <div class="row wannit">
                <div class="col-md-4 offset-md-1">
                    <h4 className="wannitPic">WANNIT</h4>
                </div>
                <div class="col-md-6">
                    <h6 className="projectTitle">Wannit</h6>
                    <p className="projectDescription">Reddit-like web app in Node.JS using Express framework and TDD that allows users to create topics with relevant posts and functionality that includes commenting, favoriting and voting.</p>
                    
                </div>
            </div>

        </div>

    </div>
);

export default portfolio;