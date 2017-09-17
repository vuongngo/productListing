import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import Product from 'app/components/templates/Product';
import { connect } from 'react-redux';
import { fetchState } from 'react-router-server';
import { isPending } from 'redux-saga-thunk';
import { fromEntities, fromResource } from 'app/store/selectors';
import { resourceListReadRequest } from 'app/store/resource/actions';
import { isBrowser, isServer } from 'app/config';


export class ProductContainer extends Component {
  static propTypes = {
    children: PropTypes.element,
    getProducts: PropTypes.func,
    hasServerState: PropTypes.bool,
    setServerState: PropTypes.func,
    cleanServerState: PropTypes.func,
  };

  componentWillMount() {
    const { getProducts, hasServerState, setServerState, cleanServerState } = this.props;

    if (!hasServerState) {
      getProducts().then(isServer && setServerState);
    } else if (isBrowser) {
      cleanServerState();
    }
  }

  render() {
    return <Product {...this.props} />;
  }
}

const mapStateToProps = state => ({
  products: fromEntities.getList(state, 'products', fromResource.getList(state, 'products')),
  meta: fromEntities.getDetail(state, 'products', fromResource.getMeta(state, 'products')),
  loading: isPending(state, 'products'),
});

const mapDispatchToProps = dispatch => ({
  getProducts: params => dispatch(resourceListReadRequest('products', params)),
});

const withServerState = fetchState(
  state => ({
    hasServerState: !!state.data,
  }),
  actions => ({
    setServerState: data => actions.done({ data }),
    cleanServerState: () => actions.done(),
  })
);

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(ProductContainer));
