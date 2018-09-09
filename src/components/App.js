import React, { Component } from 'react';
import data from '../data/phones.json';
import Picture from './Picture';
import Summary from './Summary';
import Cost from './Cost';

export const COLOURS = ['Gold', 'Silver', 'Space Grey'];
export const MEMORY = ['64GB', '256GB'];

class App extends Component {

	constructor() {
		super();

		this.state = {
			colour: COLOURS[0],
			capacity: MEMORY[0]
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
							onClick={() => this.setState({ colour: COLOURS[0] })}
							style={colour === COLOURS[0] ? { boxShadow:'0 0 0 1pt SeaGreen' } : { boxShadow:'none' }}
						>
						</div>
						<div
							className='silver'
							onClick={() => this.setState({ colour: COLOURS[1] })}
							style={colour === COLOURS[1] ? { boxShadow:'0 0 0 1pt SeaGreen' } : { boxShadow:'none' }}
						>
						</div>
						<div
							className='spaceGrey'
							onClick={() => this.setState({ colour: COLOURS[2] })}
							style={colour === COLOURS[2] ? { boxShadow:'0 0 0 1pt SeaGreen' } : { boxShadow:'none' }}
						>
						</div>
						<div
							className='sixtyFour'
							onClick={() => this.setState({ capacity: MEMORY[0] })}
							style={capacity === MEMORY[0] ? { boxShadow:'0 0 0 1pt SeaGreen' } : { boxShadow:'none' }}
						>{MEMORY[0].substring(0, MEMORY[0].length - 2)}
						</div>
						<div
							className='twoFiveSix'
							onClick={() => this.setState({ capacity: MEMORY[1] })}
							style={capacity === MEMORY[1] ? { boxShadow:'0 0 0 1pt SeaGreen' } : { boxShadow:'none' }}
						>{MEMORY[1].substring(0, MEMORY[1].length - 2)}
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
