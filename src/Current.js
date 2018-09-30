import React, { Component } from 'react';
import './App.css';

class Current extends Component {
	render() {
		return(
	    <div className="top">
	    	<p className="celsius">3<sup>&deg;</sup></p>
	    	<div className="status">
	      	<p className="title">Snowy</p>
	      	<p>H 5&deg;&ndash; L 0&deg;</p>
	      </div>
	      <p className="place"><i className="fas fa-location-arrow"></i> LONDON</p>
	      <p className="icon">➕</p>	      
	    </div>
		);
	}
}

export default Current;