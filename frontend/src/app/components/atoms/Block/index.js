import PropTypes from 'prop-types';
import styled from 'styled-components';
import { white } from 'app/styles/colors';

const Block = styled.div`
  background-color: ${props => props.opaque ? white : 'transparent'};
`;

Block.propTypes = {
  opaque: PropTypes.bool,
};

Block.defaultProps = {
  palette: 'grayscale',
};

export default Block;
