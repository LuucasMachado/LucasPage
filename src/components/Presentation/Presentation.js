// @flow
'use strict';

import React, { Component } from 'react';
import './Presentation.styl';
import Header from '../Header/Header.js';
import Typist from 'react-typist';




class Presentation extends Component {
	render(){
		return(
			<div className="Presentation">
			<div className="menuPresentation">
				<Header />
			</div>
			</div>
		)
	}
}

export default Presentation;
