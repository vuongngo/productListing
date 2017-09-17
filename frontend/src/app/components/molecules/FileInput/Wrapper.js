import styled from 'styled-components';
import { primary, white } from 'app/styles/colors';
import changeColor from 'color';

function lighten() {
  const color = primary;
  return changeColor(color).lighten(0.2).toString();
}

export const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const Label = styled.label`
  width: ${props => props.fullWidth ? '100%' : 'initial'};
  color: ${white};
  background: ${primary};
  &:active {
    background: ${props => lighten(props)};
  }

  &:hover {
    background: ${props => lighten(props)};
  }
  display: inline-flex;
  box-sizing: border-box;
  padding: 8px 20px;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: 500;
  font-size: 1.25rem;
  transition: 0.5s ease-out;
  height: 64px;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 90%;
`;

export default Wrapper;
