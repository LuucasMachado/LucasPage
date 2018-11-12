// @flow
'use strict';

import React, { Component } from 'react';
import './Body.styl';
import Header from '../Header/Header.styl';
import Welcome from './Welcome/Welcome.js';
import Presentation from './Presentation/Presentation.js';
import Typist from 'react-typist';
// import { StickyContainer, Sticky } from 'react-sticky';


class Body extends Component {

  onStickyStateChange(isSticky) {
    console.log(`Am I sticky?: ${isSticky ? 'Yep!' : 'Nope!'}`)
  }
  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }

  render() {
    return (
      <div className="Body">
        <div className="Header">
          <div className="nav-header-sticky">
            <div className="nav-header-logo">
              <Typist className="body-typist"
                cursor={{ hideWhenDone: true }}
                avgTypingSpeed={5}
                startDelay={1000}
                onTypingDone={this.onHeaderTyped}
              >
                <b>LucasDourado</b>
              </Typist>
            </div>
            <nav className="nav-header-menu">
              <ul>
                <li><button className="nav-header-menu-btn">Sobre</button></li>
                <li><button className="nav-header-menu-btn">Skill</button></li>
                <li><button className="nav-header-menu-btn">Contato</button></li>
              </ul>

            </nav>
          </div>
        </div>
        <Welcome />
        <Presentation />
      </div>
		)
  }
}

export default Body;
