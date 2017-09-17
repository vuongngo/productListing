import styled from 'styled-components';
import { grey200, white } from 'app/styles/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  box-shadow: 1px 1px 2px ${grey200};
  margin: 10px;
  height: calc(100% - 20px);
  opacity: 1;
  transition: opacity 1s 1s;
`;

export const Top = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Middle = styled.div`
  border-top: 1px solid ${grey200};
  width: 100%;
  flex-grow: 1;
`;

export const Bottom = styled.div`
  padding-left: 20px;
`;

export default Wrapper;
