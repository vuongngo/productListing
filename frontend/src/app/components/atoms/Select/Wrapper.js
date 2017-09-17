import styled from 'styled-components';
import { grey100, grey300 } from 'app/styles/colors';

const Wrapper = styled.select`
  background-color: ${grey100};
  border: none;
  color: ${grey300};
  padding: 5px;
`;

export const Option = styled.option`
`;

export default Wrapper;
