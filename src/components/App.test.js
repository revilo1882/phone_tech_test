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
		it('sets the style of the first colour', () => {
			expect(app.find('span').at(0).prop('style')).toEqual({boxShadow: '0 0 0 1pt SeaGreen'});
		});

		it('sets the style of the second colour', () => {
			expect(app.find('span').at(1).prop('style')).toEqual({boxShadow: 'none'});
		});

		it('sets the style of the third colour', () => {
			expect(app.find('span').at(2).prop('style')).toEqual({boxShadow: 'none'});
		});

		it('sets the style of the first capacity', () => {
			expect(app.find('span').at(3).prop('style')).toEqual({boxShadow: '0 0 0 1pt SeaGreen'});
		});

		it('sets the style of the second capacity', () => {
			expect(app.find('span').at(4).prop('style')).toEqual({boxShadow: 'none'});
		});
	});

	describe('clicking on the second colour', () =>{
		beforeEach(() => {
			app.find('span').at(1).simulate('click');
		});

		it('changes the colour state when clicked', () => {
			expect(app.state().colour).toEqual(COLOURS[1]);
		});

		it('renders the corrcet colour when clicked', () => {
			expect(app.find('.colour').text()).toEqual(`Colour: ${COLOURS[1]}`);
		});


		describe('clicking back on the first colour', () =>{
			beforeEach(() => {
				app.find('span').at(0).simulate('click');
			});

			it('changes the colour state when clicked', () => {
				expect(app.state().colour).toEqual(COLOURS[0]);
			});

			it('renders the corrcet colour when clicked', () => {
				expect(app.find('.colour').text()).toEqual(`Colour: ${COLOURS[0]}`);
			});
		});
	});

	describe('clicking on the third colour', () =>{
		beforeEach(() => {
			app.find('span').at(2).simulate('click');
		});

		it('changes the colour state when clicked', () => {
			expect(app.state().colour).toEqual(COLOURS[2]);
		});

		it('renders the corrcet colour when clicked', () => {
			expect(app.find('.colour').text()).toEqual(`Colour: ${COLOURS[2]}`);
		});
	});

	describe('clicking on the second capacity', () =>{
		beforeEach(() => {
			app.find('span').at(4).simulate('click');
		});

		it('changes the capacity state when clicked', () => {
			expect(app.state().capacity).toEqual(MEMORY[1]);
		});


		it('renders the corrcet capacity when clicked', () => {
			expect(app.find('.capacity').text()).toEqual(`Capacity: ${MEMORY[1]}`);
		});

		describe('clicking on the back on the first capacity', () =>{
			beforeEach(() => {
				app.find('span').at(3).simulate('click');
			});

			it('changes the capacity state back when clicked', () => {
				expect(app.state().capacity).toEqual(MEMORY[0]);
			});

			it('renders the corrcet capacity when clicked', () => {
				expect(app.find('.capacity').text()).toEqual(`Capacity: ${MEMORY[0]}`);
			});
		});
	});
});
