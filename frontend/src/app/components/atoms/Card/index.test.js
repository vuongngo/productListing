import React from 'react';
import { shallow } from 'enzyme';
import Card from '.';

const wrap = (props = {}) => shallow(<Card {...props} />).dive();

it('renders with different combination of props', () => {
  const ele = <h1>Foo</h1>;
  wrap({ top: ele });
});

it('renders props when passed in', () => {
  const ele = <h1>Bar</h1>;
  const wrapper = wrap({ bottom: ele });
  expect(wrapper.contains(ele)).toEqual(true);
});
