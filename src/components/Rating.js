import React, { Component } from 'react';

class Rating extends Component {

	starRating(){
		var stars = [];
		var i;
		var j;
		for (i=0; i<= this.props.rating; i++) {
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
				<h3 >{this.starRating()}</h3>
			</div>
		);
	}
}

export default Rating;
