import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Product from './Product';

const wrap = (props = {}) => shallow(<Product {...props} />).dive();

it('renders props when passed in', () => {
  const wrapper = wrap({ description: 'foo', price: '1.0', product_name: 'bar' });
  const html = wrapper.html();
  expect(html).toContain('foo');
  expect(html).toContain('1.0');
  expect(html).toContain('bar');
});
