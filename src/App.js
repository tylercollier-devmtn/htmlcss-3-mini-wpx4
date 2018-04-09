import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <div className="logo">START BOOTSTRAP</div>
          <div className="links">
            <div className="phone">MENU</div>
            <div className="desktop">ABOUT DOWNLOAD CONTACT</div>
          </div>
        </nav>
        <main>
          <div className="square animation2 animation1">I am an L7</div>
        </main>
      </div>
    );
  }
}

export default App;
