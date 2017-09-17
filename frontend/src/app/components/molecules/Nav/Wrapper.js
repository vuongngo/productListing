import styled from 'styled-components';
import changeColor from 'color';
import { Col } from 'app/components/molecules/Grid';
import { white, primary, grey200 } from 'app/styles/colors';

const Wrapper = styled.div`
  position: absolute;
  z-index: 99999;
  width: 100%;
  height: ${props => 80 - props.visibility}px;
  background-color: ${props => changeColor(primary).alpha(props.visibility / 10).toString()};
  color: white;
  display: flex;
  align-items: center;
  position: fixed;
  transition: all 0.3;
`;

export const Center = styled(Col)`
  display: inline-flex;
  justify-content: center;
  @media (max-width: 900px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export default Wrapper;
