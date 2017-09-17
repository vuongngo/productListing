import React from 'react';
import PropTypes from 'prop-types';

import Label from 'app/components/atoms/Label';
import Input from 'app/components/atoms/Input';
import Wrapper, { Error } from './Wrapper';

const Field = ({ error, name, rows, invalid, label, type, ...props }) => {
  const inputProps = { id: name, rows, name, type, invalid, 'aria-describedby': `${name}Error`, ...props };
  const renderInputFirst = type === 'checkbox' || type === 'radio';
  return (
    <Wrapper>
      {renderInputFirst && <Input {...inputProps} />}
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      {renderInputFirst || <Input {...inputProps} />}
      {invalid && error &&
        <Error id={`${name}Error`} role="alert" palette="danger">
          {error}
        </Error>
      }
    </Wrapper>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  rows: PropTypes.number,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
