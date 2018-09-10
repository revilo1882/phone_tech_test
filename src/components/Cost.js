import React, { Component } from 'react';

class Cost extends Component {
	render() {
		return (
			<div className='cost'>
				<span className='upfront'>from <span className='price'>
            £{this.props.upfront}</span> upfront cost</span>
				<span className='line'>|</span>
				<span className='monthly'>when you pay <span className='price'>
            £{this.props.monthly}</span> a month</span>
			</div>
		);
	}
}

export default Cost;
