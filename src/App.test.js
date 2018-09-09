import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
	let app = shallow(<App />);

	describe('initial rendering', () => {
		it('renders the corrcet colour', () => {
			expect(app.find('.colour').text()).toEqual('Colour: Gold');
		});

		it('renders the corrcet capacity', () => {
			expect(app.find('.capacity').text()).toEqual('Capacity: 64GB');
		});

		it('renders the corrcet upfront cost', () => {
			expect(app.find('.upfront').text()).toEqual('from £149 upfront cost');
		});

		it('renders the corrcet monthly cost', () => {
			expect(app.find('.monthly').text()).toEqual('when you pay £43.20 a month');
		});
	});

	describe('initial state', () => {
		it('sets the initial colour state', () => {
			expect(app.state().colour).toEqual('Gold');
		});

		it('sets the initial capacity state', () => {
			expect(app.state().capacity).toEqual('64GB');
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
		});

		describe('changes the rendering to Silver', () => {
			it('renders the corrcet colour', () => {
				expect(app.find('.colour').text()).toEqual('Colour: Silver');
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
			});

			describe('changes the rendering to Gold', () => {
				it('renders the corrcet colour', () => {
					expect(app.find('.colour').text()).toEqual('Colour: Gold');
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
		});

		describe('changes the rendering to SpaceGrey', () => {
			it('renders the corrcet colour', () => {
				expect(app.find('.colour').text()).toEqual('Colour: Space Grey');
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

		describe('changes the rendering to 256GB', () => {
			it('renders the corrcet capacity', () => {
				expect(app.find('.capacity').text()).toEqual('Capacity: 256GB');
			});

			it('renders the corrcet upfront cost', () => {
				expect(app.find('.upfront').text()).toEqual('from £275 upfront cost');
			});

			it('renders the corrcet monthly cost', () => {
				expect(app.find('.monthly').text()).toEqual('when you pay £46.80 a month');
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

			describe('changes the rendering to 64GB', () => {
				it('renders the corrcet capacity', () => {
					expect(app.find('.capacity').text()).toEqual('Capacity: 64GB');
				});

				it('renders the corrcet upfront cost', () => {
					expect(app.find('.upfront').text()).toEqual('from £149 upfront cost');
				});

				it('renders the corrcet monthly cost', () => {
					expect(app.find('.monthly').text()).toEqual('when you pay £43.20 a month');
				});
			});
		});
	});
});
