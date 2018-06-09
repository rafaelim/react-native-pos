import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';
const wrapper = null

beforeEach(() => {
  wrapper = shallow(<App />).instance();
})

it('should be an instance', () => {
  expect(wrapper).not.toBeUndefined();
})

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('should sum two numbers', () => {
  expect(wrapper.sumTwoNumber(1, 2)).toEqual(3)
})
