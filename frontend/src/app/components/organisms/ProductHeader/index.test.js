import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ProductHeader from '.';

const wrap = (props = {}) => shallow(<ProductHeader {...props} />).dive();

it('renders props when passed in', () => {
  const getProducts = sinon.spy();
  const wrapper = wrap({ limit: 1, totalProducts: 100, getProducts });
  expect(wrapper.html()).toContain('100 Products');
  expect(wrapper.html()).toContain('1 per page');
  wrapper.find('Select').props().handleChange({ target: { value: 1 } });
  expect(getProducts.calledOnce).toEqual(true);
});
