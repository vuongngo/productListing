/**
 *
 * NavBar
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper, { Center } from './Wrapper';

class NavBar extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { left, right, visibility } = this.props;
    return (
      <Wrapper visibility={visibility}>
        <Center xs={5} md={4}>
          { left }
        </Center>
        <Center xs={7} md={8}>
          { right }
        </Center>
      </Wrapper>
    );
  }
}

NavBar.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,
  visibility: PropTypes.number,
};

NavBar.defaultProps = {
  visibility: 0,
};

export default NavBar;
