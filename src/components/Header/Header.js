// @flow
'use strict';

import React, { Component } from 'react';
import HeaderStyl from './Header.styl'


class Header extends Component {
  render() {
    return (

      <div className="Header">
      <div className="headerSty">
          <div className="Logo">
            <img src="../../images/Logo_Lucas.png"/>
          </div>
          <nav className="Menu">
            <ul>
              <li><button className="btnMenu">Sobre</button></li>
              <li><button className="btnMenu">Portfólio</button></li>
              <li><button className="btnMenu">Contato</button></li>
            </ul>
          </nav>
        </div>
      </div>

    );
  }
}

export default Header;
