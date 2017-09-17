import React from 'react';
import { shallow } from 'enzyme';
import Field from '.';

const wrap = (props = {}) => shallow(<Field {...props} />);

it('renders props when passed in', () => {
  const wrapper = wrap({ name: 'foo' });
  expect(wrapper.find('Input')).toHaveLength(1);
});
