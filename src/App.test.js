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

	describe('initial rendering', () => {
		it('renders the App title', () => {
			expect(app.find('h1').text()).toEqual('Apple iPhone 8');
		});
	});

	describe('initial state', () => {
		it('sets the initial colour state', () => {
			expect(app.state().colour).toEqual('Gold');
		});

		it('sets the initial capacity state', () => {
			expect(app.state().capacity).toEqual('64GB');
		});

		it('sets the initial image state', () => {
			expect(app.state().image).toEqual(Gold);
		});
	});

	describe('initial styling', () => {
		it('sets the style of the Gold element', () => {
			expect(app.find('.gold').prop('style')).toEqual({boxShadow: '0 0 0 1pt SeaGreen'});
		});

		it('sets the style of the Silver element', () => {
			expect(app.find('.silver').prop('style')).toEqual({boxShadow: 'none'});
		});

		it('sets the style of the Space Grey element', () => {
			expect(app.find('.spaceGrey').prop('style')).toEqual({boxShadow: 'none'});
		});

		it('sets the style of the 64GB element', () => {
			expect(app.find('.sixtyFour').prop('style')).toEqual({boxShadow: '0 0 0 1pt SeaGreen'});
		});

		it('sets the style of the 256GBelement', () => {
			expect(app.find('.twoFiveSix').prop('style')).toEqual({boxShadow: 'none'});
		});
	});

	describe('clicking on the Silver element', () =>{
		beforeEach(() => {
			app.find('.silver').simulate('click');
		});

		describe('changes the state to Silver', () => {
			it('changes the colour state when `silver` is clicked', () => {
				expect(app.state().colour).toEqual('Silver');
			});

			it('changes the image state when `silver` is clicked', () => {
				expect(app.state().image).toEqual(Silver);
			});
		});

		describe('clicking back on the Gold element', () =>{
			beforeEach(() => {
				app.find('.gold').simulate('click');
			});

			describe('changes the state to Gold', () => {
				it('changes the colour state when `gold` is clicked', () => {
					expect(app.state().colour).toEqual('Gold');
				});

				it('changes the image state when `gold` is clicked', () => {
					expect(app.state().image).toEqual(Gold);
				});
			});
		});
	});

	describe('clicking on the SpaceGrey element', () =>{
		beforeEach(() => {
			app.find('.spaceGrey').simulate('click');
		});

		describe('changes the state to Space Grey', () => {
			it('changes the colour state when `spaceGrey` is clicked', () => {
				expect(app.state().colour).toEqual('Space Grey');
			});

			it('changes the image state when `spaceGrey` is clicked', () => {
				expect(app.state().image).toEqual(SpaceGrey);
			});
		});
	});

	describe('clicking on the twoFiveSix element', () =>{
		beforeEach(() => {
			app.find('.twoFiveSix').simulate('click');
		});

		describe('changes the state when `256GB` is clicked', () => {
			it('changes the capacity state when `twoFiveSix` is clicked', () => {
				expect(app.state().capacity).toEqual('256GB');
			});
		});

		describe('clicking on the sixtyFour element', () =>{
			beforeEach(() => {
				app.find('.sixtyFour').simulate('click');
			});

			describe('changes the state when `64GB` is clicked', () => {
				it('changes the capacity state back when `sixtyFour` is clicked', () => {
					expect(app.state().capacity).toEqual('64GB');
				});
			});
		});
	});
});
