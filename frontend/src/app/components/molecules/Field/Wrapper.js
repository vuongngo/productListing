import styled from 'styled-components';
import Block from 'app/components/atoms/Block';
import { red300 } from 'app/styles/colors';

export const Error = styled(Block)`
  margin: 0.5rem 0 0;
  font-weight: 500;
  font-size: 16px;
  color: ${red300};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 1rem;
  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 0.5rem;
  }
  label {
    vertical-align: middle;
  }
`;

export default Wrapper;

