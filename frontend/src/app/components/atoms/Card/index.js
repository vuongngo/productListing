/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper, { Top, Bottom } from './Wrapper';

function Card(props) {
  return (
    <Wrapper>
      <Top>
        {props.top}
      </Top>
      <Bottom>
        {props.bottom}
      </Bottom>
    </Wrapper>
  );
}

Card.propTypes = {
  top: PropTypes.element,
  bottom: PropTypes.element,
};

export default Card;
