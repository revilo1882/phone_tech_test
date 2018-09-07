import React, { Component } from 'react';
import data from './data/phones.json';
import Gold from './images/Apple_iPhone_8_Gold-full-product-front.png';
import Silver from './images/Apple_iPhone_8_Silver_WS2-full-product-front.png';
import SpaceGrey from './images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png';

class App extends Component {
	constructor() {
		super();

		this.state = {
			colour: ' Gold',
			capacity: ' 64GB',
			image: Gold
		};
	}

	render() {
		return (
			<div>
				<div>
					<img
						src={this.state.image}
						alt=''
						style={{
							float: 'left',
							width: '20%',
							marginRight: '180px'
						}}
					/>
				</div>
				<div>
					<h1>{data[0].groupName}</h1>
					<p>{data[0].deviceSummary[0].displayDescription}</p>
				</div>
				<div>
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
						onClick={() => this.setState({ colour: ' Gold', image: Gold })}>
					</span>
					<span
						className='silver'
						onClick={() => this.setState({ colour: ' Silver', image: Silver })}>
					</span>
					<span
						className='spaceGrey'
						onClick={() => this.setState({ colour: ' Space Grey', image: SpaceGrey })}>
					</span>
					<span
						className='size'
						onClick={() => this.setState({ capacity: ' 256GB' })}>
            256
					</span>
					<span
						className='size'
						onClick={() => this.setState({ capacity: ' 64GB' })}>
            64
					</span>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div className='cost'>
					<span className='upfront'>from <span className='price'>£1149</span> upfront cost</span>
					<span className='line'>|</span>
					<span className='monthly'>when you pay <span className='price'>£43.20</span> a month</span>
				</div>
			</div>
		);
	}
}

export default App;
