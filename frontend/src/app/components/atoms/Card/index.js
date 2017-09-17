/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper, { Top, Bottom, Middle } from './Wrapper';

function Card(props) {
  return (
    <Wrapper>
      <Top>
        {props.top}
      </Top>
      <Middle>
        {props.middle}
      </Middle>
      <Bottom>
        {props.bottom}
      </Bottom>
    </Wrapper>
  );
}

Card.propTypes = {
  top: PropTypes.element,
  bottom: PropTypes.element,
  middle: PropTypes.element,
};

export default Card;
