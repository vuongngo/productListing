import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import ProductList from 'app/components/organisms/ProductList';
import ProductHeader from 'app/components/organisms/ProductHeader';
import ProductPagination from 'app/components/organisms/ProductPagination';
import Container from 'app/components/atoms/Container';
import Wrapper from './Wrapper';

export default class Product extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    meta: PropTypes.object,
    products: PropTypes.array,
    getProducts: PropTypes.func,
  };

  static defaultProps = {
    products: [],
    meta: {},
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <ProductHeader {...this.props.meta} getProducts={this.props.getProducts} />
          <ProductList list={this.props.products} />
          <ProductPagination {...this.props.meta} getProducts={this.props.getProducts} />
        </Container>
      </Wrapper>
    );
  }
}
