import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import Wrapper from './Wrapper';

const ProductPaginate = (props) => {
  const styles = require('./styles.scss');
  return (
    <Wrapper>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakClassName={styles.page}
        forcePage={props.page}
        pageCount={props.totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={e => props.getProducts({ limit: props.limit, page: e.selected })}
        containerClassName={styles.pagination}
        pageClassName={styles.page}
        activeClassName={styles.active}
        previousClassName={styles.text}
        nextClassName={styles.text}
        disabledClassName={styles.disable}
      />
    </Wrapper>
  );
};

ProductPaginate.propTypes = {
  limit: PropTypes.number,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  getProducts: PropTypes.func,
};

export default ProductPaginate;

