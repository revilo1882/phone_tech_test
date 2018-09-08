import React, { Component } from 'react';
import data from './data/phones.json';

class Rating extends Component {

	starRating(){
		var stars = [];
		var i;
		var j;
		for (i=0; i<= data[0].rating; i++) {
			stars.push(<span key={i} style={{color: 'gold'}}>&#9733;</span>);
		}
		for (j=stars.length; stars.length < 5; j++) {
			stars.push(<span key={j} style={{color: 'grey'}}>&#9733;</span>);
		}
		return stars;
	}

	render() {
		return (
			<div>
				{this.starRating()}
			</div>
		);
	}
}

export default Rating;
