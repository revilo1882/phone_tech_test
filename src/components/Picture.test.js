import React from 'react';
import { shallow } from 'enzyme';
import Picture from './Picture';

const props = { image: '/images/test_image.png'};


describe('Summary', () => {
	let picture = shallow(<Picture {...props}/>);

	it('renders the title', () => {
		expect(picture.find('.phone-image').prop('src')).toEqual(props.image.substring(8));
	});

});
