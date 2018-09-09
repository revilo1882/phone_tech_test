import React from 'react';
import { shallow } from 'enzyme';
import Summary from './Summary';

const props = { model: 'Test phone', description: 'Test description' };


describe('Summary', () => {
	let summary = shallow(<Summary {...props}/>);

	it('renders the title', () => {
		expect(summary.find('h1').text()).toEqual('Test phone');
	});

	it('renders the description', () => {
		expect(summary.find('p').text()).toEqual('Test description');
	});
});
