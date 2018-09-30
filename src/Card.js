import React, { Component } from 'react';
import './App.css';
import Current from './Current.js';
import Forecast from './Forecast.js';

class Card extends Component {
	render() {
		return(
			<div className="card">
				<Current />
				<Forecast />
			</div>
		);
	}
}

export default Card;