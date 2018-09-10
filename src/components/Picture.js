import React, { Component } from 'react';

class Picture extends Component {
	render() {
		return (
			<div>
				<img className='phone-image'
					src={require(`.${this.props.image}`)}
					alt=''
				/>
			</div>
		);
	}
}

export default Picture;
