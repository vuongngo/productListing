import React, {
  PureComponent
} from 'react';

import { Route } from 'react-router-dom';
import ProductPage from 'app/components/pages/Product';
import Wrapper from './Wrapper';

export default class Product extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Route path="/">
          <ProductPage {...this.props} />
        </Route>
      </Wrapper>
    );
  }
}
