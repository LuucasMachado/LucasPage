
// @flow
'use strict';

import React, { Component } from 'react';
import Presentation from './Presentation/Presentation.js';
import Presentation2 from './Presentation2/Presentation2.js';
import Main from './Main.styl'


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Presentation />
        <Presentation2 />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
