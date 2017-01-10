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
					<img src='../../images/ic_aboutSobre.png' height="auto" />
					<b><p>Sobre</p></b>
					<p>Lucas Henrique Machado Dourado Brasileiro, 21 anos</p>
					<p>R. Napoleão de Barros - Vila Clementino – São Paulo, SP - Brasil</p>
					<img src='../../images/ic_school.png' height="auto" />
					<b><p>Formação Acadêmica</p></b>
					<p>Cursando MBA em Empreendedorismo e Inovação na Estácio ( 2016 - 2018)</p>
					<p>Graduado em Análise e Desenvolvimento de Sistemas pela UNINOVE (2014 - 2016)</p>
					<img src='../../images/ic_more.png' height="auto" />
					<p><b>Resumo de Qualificações</b></p>
					<p>Conhecimento em HTML, React, Angular, JavaScript, jQuery, CSS,</p>
					<p> SASS/LESS, Bootstrap, Skeleton, Materialize e outros frameworks CSS, npm, git;</p>
			</div>
			</div>
		)
	}
}

export default Presentation2;
