import React from 'react';
import { shallow } from 'enzyme';
import Product from '.';

const wrap = (props = {}) => shallow(<Product {...props} />).dive();

it('renders props when passed in', () => {
  const getProducts = () => {};
  const wrapper = wrap({ meta: {}, list: [], getProducts });
  expect(wrapper.find('ProductHeader')).toHaveLength(1);
  expect(wrapper.find('ProductList')).toHaveLength(1);
  expect(wrapper.find('ProductPaginate')).toHaveLength(1);
});
