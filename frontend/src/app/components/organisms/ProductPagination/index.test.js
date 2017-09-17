import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ProductPagination from '.';

const wrap = (props = {}) => shallow(<ProductPagination {...props} />).dive();

it('renders props when passed in', () => {
  const getProducts = sinon.spy();
  const wrapper = wrap({ limit: 10, page: 10, totalPages: 100, getProducts });
  expect(wrapper.find('PaginationBoxView')).toHaveLength(1);
  const props = wrapper.find('PaginationBoxView').props();
  expect(props.forcePage).toEqual(10);
  props.onPageChange({ selected: 2 });
  expect(getProducts.calledWith({ limit: 10, page: 2 })).toEqual(true);
});
