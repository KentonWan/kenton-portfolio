import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import landing from "./components/landing.js";
import aboutme from "./components/aboutme.js";



class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="landing">
          <Route exact path="/" component={landing} />
          {/* <Route path="/portfolio" Component={portfolio} /> */}
          <Route path="/aboutme" component={aboutme} />
        </main>
      </div>
    );
  }
}

export default App;
