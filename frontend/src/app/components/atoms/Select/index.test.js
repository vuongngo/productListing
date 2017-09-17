import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Select from '.';

const wrap = (props = {}) => shallow(<Select {...props} />).dive();

it('renders with different combination of props', () => {
  wrap({ value: '1', handleChange: () => {}, choices: [{ value: 1, name: 'one' }] });
});

it('renders props when passed in', () => {
  const handleChange = sinon.spy();
  const choices = [{ value: '1', name: 'one' }, { value: 2, name: 'two' }];
  const wrapper = wrap({ value: '1', handleChange, choices});
  wrapper.find('select').simulate('change', { preventDefault: () => {} });
  expect(handleChange.calledOnce).toEqual(true);
});
