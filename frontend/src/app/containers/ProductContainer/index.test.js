import React from 'react';
import { shallow } from 'enzyme';
import { ProductContainer } from '.';

const wrap = (props = {}) => shallow(<ProductContainer {...props} />).dive();

it('renders props when passed in', () => {
  const getProducts = () => new Promise((resolve, reject) => {
    resolve(true);
  });
  const hasServerState = false;
  const cleanServerState = () => {};
  const setServerState = () => {};
  const wrapper = wrap({ getProducts, hasServerState, cleanServerState, setServerState });
  expect(wrapper.find('Product')).toHaveLength(1);
});
