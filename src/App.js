import React, { Component } from 'react';
import data from './data/phones.json';
import Picture from './components/Picture';

class App extends Component {
	constructor() {
		super();

		this.state = {
			colour: 'Gold',
			capacity: '64GB'
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

	checkPhone(phones) {
		return phones.find((phone) => {
			return (this.state.colour === phone.colourName && this.state.capacity === phone.memory) && phone;
		});
	}

	render() {
		const phones = data[0].deviceSummary;
		const capacity = this.state.capacity;
		const colour = this.state.colour;
		const selectedPhone = this.checkPhone(phones);
		return (
			<div>
				<Picture image={selectedPhone.merchandisingMedia[0].value}/>
				<div className='information'>
					<h1 className='model'>{data[0].groupName}</h1>
					<h3 >{this.starRating()}</h3>
					<p className='description'>{selectedPhone.displayDescription}</p>
				</div>
				<div className='selection'>
					<div className='colour'>
            Colour: {''}
						<div className='selected'>
							{colour}
						</div>
					</div>
					<div className='capacity'>
            Capacity: {''}
						<div className='selected'>
							{capacity}
						</div>
					</div>
					<div>
						<div
							className='gold'
							onClick={() => this.setState({ colour: 'Gold' })}
							style={colour === 'Gold' ? { boxShadow:'0 0 0 1pt SeaGreen' } : { boxShadow:'none' }}
						>
						</div>
						<div
							className='silver'
							onClick={() => this.setState({ colour: 'Silver' })}
							style={colour === 'Silver' ? { boxShadow:'0 0 0 1pt SeaGreen' } : { boxShadow:'none' }}
						>
						</div>
						<div
							className='spaceGrey'
							onClick={() => this.setState({ colour: 'Space Grey'})}
							style={colour === 'Space Grey' ? { boxShadow:'0 0 0 1pt SeaGreen' } : { boxShadow:'none' }}
						>
						</div>
						<div
							className='sixtyFour'
							onClick={() => this.setState({ capacity: '64GB' })}
							style={capacity === '64GB' ? { boxShadow:'0 0 0 1pt SeaGreen' } : { boxShadow:'none' }}
						>64
						</div>
						<div
							className='twoFiveSix'
							onClick={() => this.setState({ capacity: '256GB' })}
							style={capacity === '256GB' ? { boxShadow:'0 0 0 1pt SeaGreen' } : { boxShadow:'none' }}
						>256
						</div>
					</div>
				</div>
				<div className='cost'>
					<span className='upfront'>from <span className='price'>
							£{selectedPhone.priceInfo.hardwarePrice.oneOffPrice.gross} </span>
							upfront cost</span>
					<span className='line'>|</span>
					<span className='monthly'>when you pay <span className='price'>
							£{selectedPhone.priceInfo.bundlePrice.monthlyPrice.gross} </span>
							a month</span>
				</div>
			</div>
		);
	}
}

export default App;
