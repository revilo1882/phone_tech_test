


npm install
npm start
npm test
npm test -- --coverage

- No test for Picture component, is it due to require?
```
const props = { image: '/Testimage.png'};


describe('Summary', () => {
	let picture = shallow(<Picture {...props}/>);

	it('renders the title', () => {
		expect(picture.find('img').prop('src')).toEqual('./Testimage.png');
	});

});
```
- Otherwise 100% test coverage on all components
- No intergration testing.

- consts on App for easy update
- testing App would be more easily reusable if it was to find div element at rather than name.
- App component is very long

- Why React and Enzyme?  Why basic css.
- Improve css/html?
- Process: User stories, understanding json file.   Initially one big file.


# Vodaphone Developer Task

Create the phone component as displayed below that will display in Chome, E11 and Firefox.  On selection of a colour or capacity the image will change and the prices will update.
![goal](./src/components/images/page.jpeg)


## Run the app locally

Clone the repository then in the command line run:

```bash
$ npm install
$ npm start
$ npm test
$ npm test -- --coverage
```

## Motivation



## Approach



## Tradeoffs



## Further Work
