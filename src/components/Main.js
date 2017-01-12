'use strict';

import React, { Component } from 'react';
import Body from './Body/Body.js';
import './Main.styl';



class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Body />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
