import React from 'react';
import { shallow } from 'enzyme';
import Nav from '.';

const wrap = (props = {}) => shallow(<Nav {...props} />).dive();

it('renders with different combination of props', () => {
  const ele = <h1>Foo</h1>;
  wrap({ left: ele });
});

it('renders props when passed in', () => {
  const ele = <h1>Bar</h1>;
  const wrapper = wrap({ right: ele });
  expect(wrapper.contains(ele)).toEqual(true);
});
