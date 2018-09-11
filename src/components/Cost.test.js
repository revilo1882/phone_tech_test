import React from 'react';
import { shallow } from 'enzyme';
import Cost from './Cost';

const props = { upfront: '100', monthly: '50.50' };

describe('Cost', () => {
	let cost = shallow(<Cost {...props}/>);

	it('renders the corrcet upfront cost', () => {
		expect(cost.find('.price').at(0).text()).toEqual('£' + props.upfront);
	});

	it('renders the corrcet monthly cost', () => {
		expect(cost.find('.price').at(1).text()).toEqual('£' + props.monthly);
	});
});
