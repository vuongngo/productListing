import React, {
  PureComponent
} from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        {children}
      </Wrapper>
    );
  }
}
