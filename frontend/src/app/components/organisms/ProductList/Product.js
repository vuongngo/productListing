import React from 'react';
import PropTypes from 'prop-types';

import H3 from 'app/components/atoms/H3';
import { Col } from 'app/components/molecules/Grid';
import { LargeText, SmallText } from 'app/components/atoms/Text';
import Card from 'app/components/atoms/Card';
import Image from './Image';
import Wrapper from './Wrapper';

const Product = props => (
  <Col xs={12} md={4} lg={3}>
    <Card
      top={<Image src={props.product_image} />}
      bottom={
        <Wrapper>
          <LargeText>{props.product_name}</LargeText>
          <SmallText>{props.description}</SmallText>
          <H3>{props.price}</H3>
        </Wrapper>
      }
    />
  </Col>
);

Product.propTypes = {
  description: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.string,
  product_image: PropTypes.string,
  product_name: PropTypes.string,
};

export default Product;
