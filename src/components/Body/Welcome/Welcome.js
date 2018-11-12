// @flow
'use strict';

import React, { Component } from 'react';
import './Welcome.styl';


class Welcome extends Component {
	render(){
		return(
			<div className="Welcome">
				<div className="Welcome-image">
					<img src="../../images/eu.jpeg"/>
					<p>Bem-vindo ao meu portfólio online</p>
				</div>
			</div>
		)
	}
}

export default Welcome;
