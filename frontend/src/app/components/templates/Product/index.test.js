import React from 'react';
import { shallow } from 'enzyme';
import ProductPage from '.';

const wrap = (props = {}) => shallow(<ProductPage {...props} />).dive();

it('renders props when passed in', () => {
  const wrapper = wrap({});
  expect(wrapper.find('Product')).toHaveLength(1);
});
