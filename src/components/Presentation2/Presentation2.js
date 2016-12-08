// @flow
'use strict';

import React, { Component } from 'react';
import './Presentation2.styl';
import Header from '../Header/Header.js';
import Typist from 'react-typist';




class Presentation2 extends Component {
	render(){
		return(
			<div className="Presentation2">
			<div className="personalTrait">
				<p>Lucas Henrique Machado Dourado Brasileiro, 21 anos</p>
				<p>R. Napoleão de Barros - Vila Clementino – São Paulo, SP - Brasil</p>
				<p>Cursando MBA em Empreendedorismo e Inovação na Estácio ( 2016 - 2018)</p>
				<p>Graduado em Análise e Desenvolvimento de Sistemas pela UNINOVE (2014 - 2016)</p>
			</div>
			<div className="professionalCharacteristic">Resumo de Qualificações
					<p>▪ Desenvolvimento Frontend</p>
					<p>▪ Conhecimento em HTML, React, Angular, JavaScript, jQuery, CSS, SASS/LESS, Bootstrap, Skeleton, Materialize e outros frameworks CSS, npm, git;</p>
					<p>Formação Acadêmica</p>
					<p>Cursando MBA em Empreendedorismo e Inovação na Estácio ( 2016 - 2018)</p>
					<p>Graduado em Análise e Desenvolvimento de Sistemas pela UNINOVE (2014 - 2016)</p>
			</div>
			</div>
		)
	}
}

export default Presentation2;
