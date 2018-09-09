import React from 'react';
import { shallow } from 'enzyme';
import Cost from './Cost';

const props = { upfront: '100', monthly: '50.50' };


describe('Summary', () => {
	let cost = shallow(<Cost {...props}/>);

	it('renders the corrcet upfront cost', () => {
		expect(cost.find('.upfront').text()).toEqual('from £100 upfront cost');
	});

	it('renders the corrcet monthly cost', () => {
		expect(cost.find('.monthly').text()).toEqual('when you pay £50.50 a month');
	});
});
