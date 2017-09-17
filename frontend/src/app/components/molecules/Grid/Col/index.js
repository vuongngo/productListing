/**
*
* Col
*
*/
import PropTypes from 'prop-types';
import styled from 'styled-components';

function cal(props, keys) {
  let percentage = '100%';
  for (const key of keys) {
    if (props[key]) {
      const percent = 100 / (12 / props[key]);
      percentage = `${percent}%`;
      return percentage;
    }
  }
}

const Col = styled.div`
  width: ${props => cal(props, ['xs'])};
  @media (min-width: 640px) {
    width: ${props => cal(props, ['sm', 'xs'])};
  }
  @media (min-width: 900px) {
    width: ${props => cal(props, ['md', 'sm', 'xs'])};
  }
  @media (min-width: 1200px) {
    width: ${props => cal(props, ['lg', 'md', 'sm', 'xs'])};
  }
  @media (min-width: 1900px) {
    width: ${props => cal(props, ['xl', 'lg', 'md', 'sm', 'xs'])};
  }
  align-self: ${props => props.alignSelf || 'inherit'};
  flex-grow: ${props => props.grow || 'inherit'};
  flex-shrink: ${props => props.shrink || 'inherit'};
  order: ${props => props.order || 'inherit'};
`;

export const CenteredCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  alignSelf: PropTypes.string,
  grow: PropTypes.string,
  shrink: PropTypes.string,
  order: PropTypes.number
};


export default Col;
