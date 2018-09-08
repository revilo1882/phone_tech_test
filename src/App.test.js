import React from 'react';
import { configure, mount } from 'enzyme';
import App from './App';
import Gold from './images/Apple_iPhone_8_Gold-full-product-front.png';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
	let app = mount(<App />);

	it('renders the App title', () => {
		expect(app.find('h1').text()).toEqual('Apple iPhone 8');
	});

	it('sets the initial colour state', () => {
		expect(app.state().colour).toEqual('Gold');
	});

	it('sets the initial colour state', () => {
		expect(app.state().capacity).toEqual('64GB');
	});

	it('sets the initial colour state', () => {
		expect(app.state().image).toEqual(Gold);
	})

	describe('changes the state on click of the Silver div', () =>{
		beforeEach(() => {
			app.find('.silver').simulate('click');
		});

		it('sets the initial colour state', () => {
			expect(app.state().colour).toEqual('Silver');
		});

	});
});
