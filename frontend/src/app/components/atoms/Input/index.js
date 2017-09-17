import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Input(props) {
  const styles = require('./styles.scss');
  const cl = [styles.TextInput];
  if (props.invalid) {
    cl.push(styles.invalid);
  }
  const inputProps = { ...props };
  delete inputProps.invalid;
  return (
    <textarea className={classNames(cl)} {...inputProps} />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  invalid: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
