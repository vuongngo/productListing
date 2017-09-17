import React from 'react';
import { shallow } from 'enzyme';
import ReduxField from '.';

const wrap = (props = {}) => shallow(<ReduxField {...props} />);

it('renders props when passed in', () => {
  const wrapper = wrap({ meta: {}, input: { name: 'text' } });
  expect(wrapper.find('Field')).toHaveLength(1);
});
