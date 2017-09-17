import styled from 'styled-components';

const Image = styled.div`
  width: 80%;
  height: 300px;
  background-image: url("${props => props.src}");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Image;
