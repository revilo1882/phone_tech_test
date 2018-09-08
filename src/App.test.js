import React from 'react';
import { configure, mount } from 'enzyme';
import App from './App';
import Gold from './images/Apple_iPhone_8_Gold-full-product-front.png';
import Silver from './images/Apple_iPhone_8_Silver_WS2-full-product-front.png';
import SpaceGrey from './images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png';
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

	it('sets the initial capacity state', () => {
		expect(app.state().capacity).toEqual('64GB');
	});

	it('sets the initial image state', () => {
		expect(app.state().image).toEqual(Gold);
	});

	it('sets the style of the Gold element', () => {
		expect(app.find('.gold').prop('style')).toEqual({boxShadow: '0 0 0 1pt SeaGreen'});
	});

	describe('changes the state on click of the Silver div', () =>{
		beforeEach(() => {
			app.find('.silver').simulate('click');
		});

		it('changes the colour state when `silver` is clicked', () => {
			expect(app.state().colour).toEqual('Silver');
		});

		it('changes the image state when `silver` is clicked', () => {
			expect(app.state().image).toEqual(Silver);
		});
	});

	describe('changes the state on click of the SpaceGrey div', () =>{
		beforeEach(() => {
			app.find('.spaceGrey').simulate('click');
		});

		it('changes the colour state when `spaceGrey` is clicked', () => {
			expect(app.state().colour).toEqual('Space Grey');
		});

		it('changes the image state when `spaceGrey` is clicked', () => {
			expect(app.state().image).toEqual(SpaceGrey);
		});
	});

	describe('changes the state back on click of the Gold div', () =>{
		beforeEach(() => {
			app.find('.spaceGrey').simulate('click');
			app.find('.gold').simulate('click');
		});

		it('changes the colour state when `spaceGrey` is clicked', () => {
			expect(app.state().colour).toEqual('Gold');
		});

		it('changes the image state when `spaceGrey` is clicked', () => {
			expect(app.state().image).toEqual(Gold);
		});
	});

	describe('changes the state on click of the twoFiveSix div', () =>{
		beforeEach(() => {
			app.find('.twoFiveSix').simulate('click');
		});

		it('changes the capacity state when `twoFiveSix` is clicked', () => {
			expect(app.state().capacity).toEqual('256GB');
		});

		it('changes the capacity state back when `sixtyFour` is clicked', () => {
			app.find('.sixtyFour').simulate('click');
			expect(app.state().capacity).toEqual('64GB');
		});
	});
});
