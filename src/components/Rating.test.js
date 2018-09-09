import React from 'react';
import { shallow } from 'enzyme';
import Rating from './Rating';

const props = { rating: 4.2 };
const props2 = { rating: 2.4 };

describe('Rating', () => {
	let rating = shallow(<Rating {...props}/>);
	let rating2 = shallow(<Rating {...props2}/>);

	describe('Rating is over 4', () => {
		it('renders all the stars if rating is over 4', () => {
			expect(rating.find('h3').text()).toEqual('★★★★★');
		});

		it('renders the first gold star', () => {
			expect(rating.find('span').at(0).prop('style')).toEqual({color: 'gold'});
		});

		it('renders the second gold star', () => {
			expect(rating.find('span').at(1).prop('style')).toEqual({color: 'gold'});
		});

		it('renders the third gold star', () => {
			expect(rating.find('span').at(2).prop('style')).toEqual({color: 'gold'});
		});

		it('renders the fourth gold star', () => {
			expect(rating.find('span').at(3).prop('style')).toEqual({color: 'gold'});
		});

		it('renders the fifth gold star', () => {
			expect(rating.find('span').at(4).prop('style')).toEqual({color: 'gold'});
		});
	});

	describe('Rating is under 4', () => {
		it('renders all the stars if rating is under 4', () => {
			expect(rating2.find('h3').text()).toEqual('★★★★★');
		});

		it('renders the third star gold when rating is over 2', () => {
			expect(rating2.find('span').at(2).prop('style')).toEqual({color: 'gold'});
		});

		it('renders the fourth star grey when rating is under 3', () => {
			expect(rating2.find('span').at(3).prop('style')).toEqual({color: 'grey'});
		});

		it('renders the fifth star grey when rating is under 4', () => {
			expect(rating2.find('span').at(4).prop('style')).toEqual({color: 'grey'});
		});
	});
});
