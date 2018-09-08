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

	checkModel(phone) {
		return (this.state.colour === phone.colourName && this.state.capacity === phone.memory);
	}

	render() {
		const phones = data[0].deviceSummary;
		return (
			<div>
				<img className='phoneImage'
					src={this.state.image}
				/>
				<div className='information'>
					<h1 className='model'>{data[0].groupName}</h1>
					<h3 >{this.starRating()}</h3>
					<p className='description'>
						{phones.map((phone) => {
							return this.checkModel(phone) && phone.displayDescription;
						})}
					</p>
				</div>
				<div className='selection'>
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
					<div>
						<div
							className='gold'
							onClick={() => this.setState({ colour: 'Gold', image: Gold })}
							style={this.state.colour === 'Gold' ? { boxShadow:'0 0 0 1pt SeaGreen '} : { boxShadow:'none'} }
						>
						</div>
						<div
							className='silver'
							onClick={() => this.setState({ colour: 'Silver', image: Silver })}
							style={this.state.colour === 'Silver' ? { boxShadow:'0 0 0 1pt SeaGreen '} : { boxShadow:'none'}}
						>
						</div>
						<div
							className='spaceGrey'
							onClick={() => this.setState({ colour: 'Space Grey', image: SpaceGrey })}
							style={this.state.colour === 'Space Grey' ? { boxShadow:'0 0 0 1pt SeaGreen '} : { boxShadow:'none'}}
						>
						</div>
						<div
							className='sixtyFour'
							onClick={() => this.setState({ capacity: '64GB' })}
							style={this.state.capacity === '64GB' ? { boxShadow:'0 0 0 1pt SeaGreen '} : { boxShadow:'none'}}
						>64
						</div>
						<div
							className='twoFiveSix'
							onClick={() => this.setState({ capacity: '256GB' })}
							style={this.state.capacity === '256GB' ? { boxShadow:'0 0 0 1pt SeaGreen '} : { boxShadow:'none'}}
						>256
						</div>
					</div>
				</div>
				<div className='cost'>
					<span className='upfront'>
            from {' '}
						<span className='price'>
              £
							{phones.map((phone) => {
								return this.checkModel(phone) && phone.priceInfo.hardwarePrice.oneOffPrice.gross;
							})}
						</span> upfront cost</span>
					<span className='line'>|</span>
					<span className='monthly'>
            when you pay {' '}
						<span className='price'>
              £
							{phones.map((phone) => {
								return this.checkModel(phone) && phone.priceInfo.bundlePrice.monthlyPrice.gross;
							})}
						</span> a month</span>
				</div>
			</div>
		);
	}
}

export default App;
