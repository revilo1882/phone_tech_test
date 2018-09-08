import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
	let app = mount(<App />);

	it('renders the App title', () => {
		expect(app.find('h1').text()).toEqual('Apple iPhone 8');
	});
});
