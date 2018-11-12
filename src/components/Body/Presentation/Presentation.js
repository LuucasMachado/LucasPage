// @flow
'use strict';

import React, { Component } from 'react';
import './Presentation.styl';


class Presentation extends Component {
	render(){
		return(
			<div className="Presentation">
				<div className="Presentation-text">
					<p>Trabalho solucionando problemas através de tecnologia. Estou sempre em busca de conhecimento e desafios que me motivam a evoluir tanto como pessoa como profissional, amante de inovações e empreendedorismo.
						Atualmente atuando como mais que um desenvolvedor front-end e sim um desenvolvedor de produtos buscando atender as reais necessidades do usuários.</p>
				</div>
				<div className="Presentation-phrase">
					<p>Loucura é querer resultados diferentes fazendo tudo exatamente igual!</p>
				</div>
			</div>
		)
	}
}

export default Presentation;
