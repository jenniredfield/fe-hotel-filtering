# Simple Hotel Filtering Webapp.


To run this project locally, make sure you have node installed. You can download it [here](https://nodejs.org/en/download/)



To copy this project, navigate to your folder of choice on terminal and type

```
git clone https://github.com/jenniredfield/hotel-filtering.git
```



Navigate into folder

```
cd hotel-filtering
```



Install dependencies

```
npm install
```



To run the project

```
npm start
```



The project should be visible on http://localhost:3000/



To run tests

```
npm test
```

Note to self - to get Enzyme  working:

```

npm install jest
npm install enzyme
npm install enzyme-adapter-react-16
npm install jest-cli  -> this fixed a problem

Have a src/setupTest.js  file with

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

console.error = message => {
throw new Error(message);
};

```

### Things to improve

At the start of the project, I was not so familiar with Enzyme and testing React. Would like to add more meaningful tests in the future.