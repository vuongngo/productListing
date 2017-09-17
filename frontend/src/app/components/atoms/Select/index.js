import React from 'react';
import PropTypes from 'prop-types';

import Wrapper, { Option } from './Wrapper';

const Select = props => (
  <Wrapper value={props.value} onChange={(e) => { e.preventDefault(); props.handleChange(e); }}>
    {props.choices.map(choice => (
      <Option key={choice.value} value={choice.value}>{choice.name}</Option>
    ))}
  </Wrapper>
);

Select.propTypes = {
  value: PropTypes.any,
  choices: PropTypes.array,
  handleChange: PropTypes.func,
};

export default Select;
