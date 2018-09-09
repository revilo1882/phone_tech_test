npm test -- --coverage


```
const props = { image: '/Testimage.png'};


describe('Summary', () => {
	let picture = shallow(<Picture {...props}/>);

	it('renders the title', () => {
		expect(picture.find('img').prop('src')).toEqual('./Testimage.png');
	});

});
```
