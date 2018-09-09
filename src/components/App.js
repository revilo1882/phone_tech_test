import React, { Component } from 'react';
import data from '../data/phones.json';
import Picture from './Picture';
import Summary from './Summary';
import Cost from './Cost';
const MEMORY = [64, 256];

class App extends Component {
	constructor() {
		super();

		this.state = {
			colour: 'Gold',
			capacity: '64GB'
		};
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
				<Summary
					model={data[0].groupName}
					rating={data[0].rating}
					description={selectedPhone.displayDescription}
				/>
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
						>{MEMORY[0]}
						</div>
						<div
							className='twoFiveSix'
							onClick={() => this.setState({ capacity: '256GB' })}
							style={capacity === '256GB' ? { boxShadow:'0 0 0 1pt SeaGreen' } : { boxShadow:'none' }}
						>{MEMORY[1]}
						</div>
					</div>
				</div>
				<Cost
					upfront={selectedPhone.priceInfo.hardwarePrice.oneOffPrice.gross}
					monthly={selectedPhone.priceInfo.bundlePrice.monthlyPrice.gross}
				/>
			</div>
		);
	}
}

export default App;
