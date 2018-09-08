import React, { Component } from 'react';

class Header extends Component {

	starRating(data){
		var stars = [];
		var i;
		var j;
		for (i=0; i<= data.rating; i++) {
			stars.push(<span key={i} style={{color: 'gold'}}>&#9733;</span>);
		}
		for (j=stars.length; stars.length < 5; j++) {
			stars.push(<span key={j} style={{color: 'grey'}}>&#9733;</span>);
		}
		return stars;
	}


	render() {
		const data = this.props.data;

		return (
			<div>
				<h1 className='model'>{data.groupName}</h1>
				<h3>{this.starRating(data)}</h3>
			</div>
		);
	}
}

export default Header;
