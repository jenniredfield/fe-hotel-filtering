
import React from 'react';
import App from './App.js';
import { shallow, render, mount } from 'enzyme'
import hotels from './hotels.js'



describe('app renders', () => {
  it('has a wrapping div ', () => {

    const wrapper = shallow(<App/>);
    const divs = wrapper.find('div');
    expect(divs.length).toBeGreaterThan(0);

  })

});