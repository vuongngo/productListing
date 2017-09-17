import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ProductList from '.';

const wrap = (props = {}) => shallow(<ProductList {...props} />).dive();

it('renders props when passed in', () => {
  const wrapper = wrap({ list: [{ id: 1 }, { id: 2 }] });
  expect(wrapper.find('Product')).toHaveLength(2);
});
