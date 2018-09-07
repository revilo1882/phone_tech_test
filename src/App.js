import React, { Component } from 'react';
import data from './data/phones.json';
import Gold from './images/Apple_iPhone_8_Gold-full-product-front.png';
import Silver from './images/Apple_iPhone_8_Silver_WS2-full-product-front.png';
import SpaceGrey from './images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png';

class App extends Component {
	constructor() {
		super();

		this.state = {
			colour: 'Gold',
			capacity: '64GB',
			image: Gold
		};
	}

	stars(){
		var stars = [];
		var i;
		var j;
		for (i=0; i<= data[0].rating; i++) {
			stars.push(<span style={{color: 'gold'}}>&#9733;</span>);
		}
		for (j=stars.length; stars.length < 5; j++) {
			stars.push(<span>&#9733;</span>);
		}
		return stars;
	}


	render() {
		const phones = data[0].deviceSummary;
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
					<h3>{this.stars()}</h3>
					<p>{phones[0].displayDescription}</p>
				</div>
				<div>
					<div className='colour'>
            Colour: {' '}
						<div className='selected'>
							{this.state.colour}
						</div>
					</div>
					<div className='capacity'>
            Capacity: {' '}
						<div className='selected'>
							{this.state.capacity}
						</div>
					</div>
					<br />
					<span
						className='gold'
						onClick={() => this.setState({ colour: 'Gold', image: Gold })}
						style={this.state.colour === 'Gold' ? { border:'solid blue'} : {border:'none'}}
					>
					</span>
					<span
						className='silver'
						onClick={() => this.setState({ colour: 'Silver', image: Silver })}
						style={this.state.colour === 'Silver' ? { border:'solid blue'} : {border:'none'}}
					>
					</span>
					<span
						className='spaceGrey'
						onClick={() => this.setState({ colour: 'Space Grey', image: SpaceGrey })}
						style={this.state.colour === 'Space Grey' ? { border:'solid blue'} : {border:'none'}}
					>
					</span>
					<span
						className='size'
						onClick={() => this.setState({ capacity: '256GB' })}
						style={this.state.capacity === '256GB' ? { border:'solid blue'} : {border:'none'}}
					>
            256
					</span>
					<span
						className='size'
						onClick={() => this.setState({ capacity: '64GB' })}
						style={this.state.capacity === '64GB' ? { border:'solid blue'} : {border:'none'}}
					>
            64
					</span>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div className='cost'>
					<span className='upfront'>
            from {' '}
						<span className='price'>
              £
							{phones.map((phone) => {
								return this.state.colour === phone.colourName && this.state.capacity === phone.memory ?
									phone.priceInfo.hardwarePrice.oneOffPrice.gross : null
							})}
						</span> upfront cost</span>
					<span className='line'>|</span>
					<span className='monthly'>
            when you pay {' '}
						<span className='price'>
              £
							{phones.map((phone) => {
								return this.state.colour === phone.colourName && this.state.capacity === phone.memory ?
									phone.priceInfo.bundlePrice.monthlyPrice.gross : null
							})}
						</span> a month</span>
				</div>
			</div>
		);
	}
}

export default App;
