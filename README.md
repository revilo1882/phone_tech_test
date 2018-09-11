# Vodaphone Developer Task

## Introduction

The purpose of this exercise is to demonstrate my use of front end technologies to build a data driven component of a website.  

## Task

Create the phone component as displayed below that will display in Chrome, E11 and Firefox using the json data and image files provided.  On selection of a colour or capacity the image will change and the prices will update.
![goal](./src/components/images/page.jpeg)

## Motivation

Since completing the Makers Academy course I have turned my attention to frontend development with a focus on React.  In that time I have completed some tutorials and built a very basic website in React.  I decided I wanted to use this opportunity to put into practice what I have been learning so I decided to also complete this task using React.  I also decided to use Enzyme for my tests as I have also just learned the utility but hadn't actually written any of my own tests yet.

Another focus of this project was to improve my css which I'm still very new to for a budding frontend developer, so for this purpose I decided just to concentrate on core css skills and just use basic css (although I did apply Bootstrap CDN https://getbootstrap.com/docs/3.3/getting-started/).


## Run the app locally

Clone the repository then in the command line run:

```bash
$ cd vodafone_developer_task
$ npm install
$ npm start
```

To run the test and check the coverage run the below commands:

```bash
$ npm test
$ npm test -- --coverage
```

## Approach
- Firstly I wrote some user stories based upon the task presented:

```
As a user,
so that I can see what colour phone I would like to buy,
I would like to see the image of the phone colour I click on.
```
```
As a User,
so that I can see how much the package will cost,
I would like to see the cost of the capacity I click on.
```

- This really helped to have a clear goal to work towards.

- understanding json file.  Initially one big file.
- consts on App for easy update
- testing App would be more easily reusable if it was to find div element at rather than name.
- No test for Picture component, is it due to require?

## Challanges
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
- Improve css/html?
- App component is very long
- No intergration testing.

## Further Work
