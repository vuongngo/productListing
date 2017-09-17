import React from 'react';
import PropTypes from 'prop-types';

import Wrapper, { Input, Label } from './Wrapper';

const adaptFileEventToValue = delegate =>
  e => delegate(e.target.files[0]);


function FileInput({
   input: {
    onChange,
    onBlur,
    ...inputProps,
  },
  ...props,
}) {
  return (
    <Wrapper>
      <Input
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        id="file"
        {...inputProps}
        {...props}
      />
      <Label fullWidth={props.fullWidth} htmlFor="file" >Choose a file</Label>
    </Wrapper>
  );
}

FileInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  fullWidth: PropTypes.bool,
};

export default FileInput;
