// @flow
'use strict';

import React, { Component } from 'react';
import './Body.styl';
import Presentation2 from './Presentation2/Presentation2.js';
import Presentation3 from './Presentation3/Presentation3.js';
import Header from '../Header/Header.styl';
import Typist from 'react-typist';
import { StickyContainer, Sticky } from 'react-sticky';


class Body extends Component {

    onStickyStateChange(isSticky) {
      console.log(`Am I sticky?: ${ isSticky ? 'Yep!' : 'Nope!'}`)
    }
	render(){
		return(
			<StickyContainer>
					<div className="Body">
					<Sticky>
            <div className="Header">
              <div className="nav-header-sticky">
                <div className="nav-header-logo">
                    <a>LucasDourado</a>
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
					</Sticky>
          <Typist>
            Animate this text.
          </Typist>;
					</div>
				<Presentation2 />
				<Presentation3 />
			</StickyContainer>
		)
	}
}

export default Body;
