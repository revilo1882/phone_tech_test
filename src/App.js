import React, { Component } from 'react';
import data from './data/phones.json';


class App extends Component {
	constructor() {
		super();

		this.state = {
			colour: 'Gold',
			capacity: '64GB'
		};
	}

	render() {
		console.log('device list',data[0].deviceSummary);
		return (
			<div>
				<h1>{data[0].groupName}</h1>
				<p>{data[0].deviceSummary[0].displayDescription}</p>
				<div className='colour'>
          Colour:
					<div className='selected'>
						{this.state.colour}
					</div>
				</div>
				<div className='capacity'>
          Capacity:
					<div className='selected'>
						{this.state.capacity}
					</div>
				</div>
				<br />
				<span
					className='gold'
					onClick={() => this.setState({ colour: 'Gold' })}>
				</span>
				<span
					className='silver'
					onClick={() => this.setState({ colour: 'Silver' })}>
				</span>
				<span
					className='spaceGrey'
					onClick={() => this.setState({ colour: 'Space Grey' })}>
				</span>
				<span
					className='size'
					onClick={() => this.setState({ capacity: '256GB' })}>
          256
				</span>
				<span
					className='size' 
					onClick={() => this.setState({ capacity: '64GB' })}>
          64
				</span>
			</div>
		);
	}
}

export default App;
