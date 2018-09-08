import React from 'react';
import { configure, mount } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
	let app = mount(<App />);

	it('renders the App title', () => {
		expect(app.find('h1').text()).toEqual('Apple iPhone 8');
	});

	it('sets the initial state', () => {
		expect(app.state().colour).toEqual('Gold');
	});
});
