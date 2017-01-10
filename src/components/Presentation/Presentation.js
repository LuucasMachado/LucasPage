// @flow
'use strict';

import React, { Component } from 'react';
import './Presentation.styl';
import Presentation2 from '../Presentation2/Presentation2.js';
import Presentation3 from '../Presentation3/Presentation3.js';
import Header from '../Header/Header.styl';
// import Typist from 'react-typist';
import { StickyContainer, Sticky } from 'react-sticky';


class Presentation extends Component {

    onStickyStateChange(isSticky) {
      console.log(`Am I sticky?: ${ isSticky ? 'Yep!' : 'Nope!'}`);
    }
	render(){
		return(
			<StickyContainer>
					<div className="Presentation">
					<Sticky>
            <div className="Header">
              <div className="headerSty">
                <div className="Logo">
                    <img src="../../images/Logo_Lucas.png"/>
                </div>
                <nav className="Menu">
                  <ul>
                    <li><button className="btnMenu">Sobre</button></li>
                    <li><button className="btnMenu">Skill</button></li>
                    <li><button className="btnMenu">Contato</button></li>
                  </ul>
                </nav>
                </div>
              </div>
					</Sticky>
					</div>
				<Presentation2 />
				<Presentation3 />
			</StickyContainer>
		)
	}
}

export default Presentation;
