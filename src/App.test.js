import React from 'react';
import App from './App.js';
import Filter from './Filter.js'
import HotelsComp from './HotelsComp.js'
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

describe('<HotelsComp />', () => {
  it('allows us to set props', () => {


    const filteredHotels = [
      {
        "Name": "Grand Hotel",
        "StarRating": 5,
        "Facilities": ["car park", "pool", "business centre"],
      },
    ];


    const wrapper = mount(<HotelsComp hotels={filteredHotels}/>);
    expect(wrapper.props().hotels).toEqual(filteredHotels);
 

  });
})

function sortByAscOrDesc(value, hotels) {

  if (value === 'desc') {
      let descHotels = hotels.slice().sort((a, b) => {
          return b.StarRating - a.StarRating;
      })
      return descHotels;
  }

  if (value === 'asc') {
      let ascHotels = hotels.slice().sort((a, b) => {
          return a.StarRating - b.StarRating;
      });
      return ascHotels;
  }
}

describe("sortByAscOrDesc sorts an array by the StarRating", () => {

  test("sortByStar returns the array of objects sorted by the star rating", () => {

    const array = [{
      "Name": "hotelone",
      "StarRating": 1
    },
    {
      "Name": "hoteltwo",
      "StarRating": 2
    },
    {
      "Name": "hotelthree",
      "StarRating": 3
    },
    ];
    const array2 = [
      {
        "Name": "hotelthree",
        "StarRating": 3
      },

      {
        "Name": "hoteltwo",
        "StarRating": 2
      },
      {
        "Name": "hotelone",
        "StarRating": 1
      }];
    expect(sortByAscOrDesc('desc', array)).toEqual(array2);
  })
})
