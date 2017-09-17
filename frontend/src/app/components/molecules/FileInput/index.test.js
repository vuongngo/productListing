import React from 'react';
import { shallow } from 'enzyme';
import FileInput from '.';

const wrap = (props = {}) => shallow(<FileInput {...props} />);

it('renders props when passed in', () => {
  const wrapper = wrap({ fullWidth: true, input: { onChange: () => {}, onBlur: () => {} } });
  expect(wrapper.find('#file')).toHaveLength(1);
});
