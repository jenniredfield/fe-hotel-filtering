
import React from 'react';
import App from './App.js';
import Filter from './Filter.js'
import { shallow, render, mount } from 'enzyme'
import hotels from './hotels.js'



describe('app renders', () => {
  it('has a wrapping div ', () => {

    const wrapper = shallow(<App />);
    const divs = wrapper.find('div');
    expect(divs.length).toBeGreaterThan(0);

  })

  it('renders a filter component ', () => {

    const wrapper = shallow(<App />);
    const filter = wrapper.find('Filter');
    expect(filter.length).toBe(1);

  })

  it('renders a HotelsComp component ', () => {

    const wrapper = shallow(<App />);
    const HotelsComp = wrapper.find('HotelsComp');
    expect(HotelsComp.length).toBe(1);

  })

});

describe('<Filter />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Filter hotels={hotels} bar="baz" />);
    expect(wrapper.props().bar).toEqual('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toEqual('foo');
  });
})