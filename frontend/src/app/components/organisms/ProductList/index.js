import React from 'react';
import PropTypes from 'prop-types';

import { Row } from 'app/components/molecules/Grid';
import Product from './Product';

const ProductList = props => (
  <Row>
    {props.list.map(product => <Product key={product.id} {...product} />)}
  </Row>
);

ProductList.propTypes = {
  list: PropTypes.array,
};

ProductList.defaultProps = {
  list: []
};

export default ProductList;
