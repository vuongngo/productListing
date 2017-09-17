import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'app/components/molecules/Grid';
import H2 from 'app/components/atoms/H2';
import Select from 'app/components/atoms/Select';
import { SmallText } from 'app/components/atoms/Text';
import Wrapper, { ColEnd } from './Wrapper';

const options = [
  { value: 1, name: '1 per page' },
  { value: 2, name: '2 per page' },
  { value: 4, name: '4 per page' },
  { value: 8, name: '8 per page' },
  { value: 10, name: '10 per page' },
];

const ProductHeader = props => (
  <Wrapper>
    <Col xs={12} md={8}>
      <H2>All Products</H2>
      <SmallText>{props.totalProducts} Products</SmallText>
    </Col>
    <ColEnd xs={12} md={4}>
      <Select
        choices={options}
        value={props.limit}
        handleChange={e => props.getProducts({ limit: e.target.value, page: 0 })}
      />
    </ColEnd>
  </Wrapper>
);

ProductHeader.propTypes = {
  limit: PropTypes.number,
  totalProducts: PropTypes.number,
  getProducts: PropTypes.func,
};

export default ProductHeader;
