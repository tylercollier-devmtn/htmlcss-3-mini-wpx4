import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classnames from 'classnames';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAnimating: false,
      showDrawer: false,
    };
  }

  render() {
    return (
      <div>
        <nav className="main-nav">
          <div className="logo">START BOOTSTRAP</div>
          <div className="links">
            <div className="phone">
              <button
                onClick={() => this.setState({ showDrawer: !this.state.showDrawer})}
              >Menu</button>
            </div>
            <div className="desktop">ABOUT DOWNLOAD CONTACT</div>
          </div>
        </nav>
        <main>
          <button onClick={() => this.setState({ isAnimating: !this.state.isAnimating })}>Click to animate!</button>
          <div className={this.state.isAnimating ? 'square animation1' : 'square'}>I am an L7</div>
        </main>
        <div className={classnames('drawer', { open: this.state.showDrawer })}>
          <button
            onClick={() => this.setState({ showDrawer: !this.state.showDrawer})}
          >Close</button><br />
          ABOUT<br />
          DOWNLOAD<br />
          CONTACT<br />
        </div>
      </div>
    );
  }
}

export default App;
