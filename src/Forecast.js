import React, { Component } from 'react';
import './App.css';

class Forecast extends Component {
	render() {
		return(
	      <div className="bottom">
	      <ul>
	        <li className="profile-action">
	        	<span className="day">Tomorrow</span>
	        	<span className="higher-temp">10&deg;</span>
	        	<span className="lower-temp"> 4&deg;</span>
	        </li>
	        <li className="profile-action">
	        	<span className="day">Thuesday</span>
	        	<span className="higher-temp">18&deg;</span>
	        	<span className="lower-temp">9&deg;</span>
	        </li>
	        <li className="profile-action">
	        	<span className="day">Wednesday</span>
	        	<span className="higher-temp">16&deg;</span>
	        	<span className="lower-temp">7&deg;</span>
	        </li>
	      </ul>
	      </div>
		);
	}
}

export default Forecast;