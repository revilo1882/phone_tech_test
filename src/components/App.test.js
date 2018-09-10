import React from 'react';
import { shallow } from 'enzyme';
import App, { COLOURS, MEMORY } from './App';

describe('App', () => {
	let app = shallow(<App />);

	describe('initial rendering', () => {
		it('renders the correct colour', () => {
			expect(app.find('.colour').text()).toEqual(`Colour: ${COLOURS[0]}`);
		});

		it('renders the corrcet capacity', () => {
			expect(app.find('.capacity').text()).toEqual(`Capacity: ${MEMORY[0]}`);
		});
	});

	describe('initial state', () => {
		it('sets the initial colour state', () => {
			expect(app.state().colour).toEqual(COLOURS[0]);
		});

		it('sets the initial capacity state', () => {
			expect(app.state().capacity).toEqual(MEMORY[0]);
		});
	});

	describe('initial styling', () => {
		it('sets the style of the Gold element', () => {
			expect(app.find('span').at(0).prop('style')).toEqual({boxShadow: '0 0 0 1pt SeaGreen'});
		});

		it('sets the style of the Silver element', () => {
			expect(app.find('span').at(1).prop('style')).toEqual({boxShadow: 'none'});
		});

		it('sets the style of the Space Grey element', () => {
			expect(app.find('span').at(2).prop('style')).toEqual({boxShadow: 'none'});
		});

		it('sets the style of the 64GB element', () => {
			expect(app.find('span').at(3).prop('style')).toEqual({boxShadow: '0 0 0 1pt SeaGreen'});
		});

		it('sets the style of the 256GBelement', () => {
			expect(app.find('span').at(4).prop('style')).toEqual({boxShadow: 'none'});
		});
	});

	describe('clicking on the Silver element', () =>{
		beforeEach(() => {
			app.find('span').at(1).simulate('click');
		});

		it('changes the colour state when `silver` is clicked', () => {
			expect(app.state().colour).toEqual(COLOURS[1]);
		});

		it('renders the corrcet colour', () => {
			expect(app.find('.colour').text()).toEqual(`Colour: ${COLOURS[1]}`);
		});


		describe('clicking back on the Gold element', () =>{
			beforeEach(() => {
				app.find('span').at(0).simulate('click');
			});

			it('changes the colour state when `gold` is clicked', () => {
				expect(app.state().colour).toEqual(COLOURS[0]);
			});

			it('renders the corrcet colour', () => {
				expect(app.find('.colour').text()).toEqual(`Colour: ${COLOURS[0]}`);
			});
		});
	});

	describe('clicking on the SpaceGrey element', () =>{
		beforeEach(() => {
			app.find('span').at(2).simulate('click');
		});

		it('changes the colour state when `spaceGrey` is clicked', () => {
			expect(app.state().colour).toEqual(COLOURS[2]);
		});

		it('renders the corrcet colour', () => {
			expect(app.find('.colour').text()).toEqual(`Colour: ${COLOURS[2]}`);
		});
	});

	describe('clicking on the twoFiveSix element', () =>{
		beforeEach(() => {
			app.find('span').at(4).simulate('click');
		});

		it('changes the capacity state when `twoFiveSix` is clicked', () => {
			expect(app.state().capacity).toEqual(MEMORY[1]);
		});


		it('renders the corrcet capacity', () => {
			expect(app.find('.capacity').text()).toEqual(`Capacity: ${MEMORY[1]}`);
		});

		describe('clicking on the sixtyFour element', () =>{
			beforeEach(() => {
				app.find('span').at(3).simulate('click');
			});

			it('changes the capacity state back when `sixtyFour` is clicked', () => {
				expect(app.state().capacity).toEqual(MEMORY[0]);
			});

			it('renders the corrcet capacity', () => {
				expect(app.find('.capacity').text()).toEqual(`Capacity: ${MEMORY[0]}`);
			});
		});
	});
});
