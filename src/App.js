import React, { Component } from 'react';
import data from './data/phones.json';


class App extends Component {
	render() {
		console.log('devise list',data[0].deviceSummary);
		return (
			<div>
				<h1>{data[0].groupName}</h1>
				<p>{data[0].deviceSummary[0].displayDescription}</p>
				<div className='colour'>Colour:<div className='selected'>Gold</div></div>
				<div className='capacity'>Capacity:<div className='selected'>64GB</div></div>
        <br />
				<span className='gold'></span>
				<span className='silver'></span>
				<span className='spaceGrey'></span>
				<span className='size'>256</span>
				<span className='size'>64</span>
			</div>
		);
	}
}

export default App;
