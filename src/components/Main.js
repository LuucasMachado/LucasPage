'use strict';

import React, { Component } from 'react';
import Presentation from './Presentation/Presentation.js';
import './Main.styl';



class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Presentation />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
