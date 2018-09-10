import React, { Component } from 'react';
import Rating from './Rating';

class Summary extends Component {
	render() {
		return (
			<div className='information'>
				<h1 className='model'>{this.props.model}</h1>
				<Rating rating={this.props.rating} />
				<p className='description'>{this.props.description}</p>
			</div>
		);
	}
}

export default Summary;
