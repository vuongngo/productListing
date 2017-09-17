import styled from 'styled-components';
import { primary, red300 } from 'app/styles/colors';

const H3 = styled.p`
  font-weight: 500;
  letter-spacing: 1px;
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 50px;
  @media (min-width: 640px) {
    font-size: 1.9rem;
  }
  @media (min-width: 900px) {
    font-size: 2rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.1rem;
  }
  @media (min-width: 1600px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1900px) {
    font-size: 2.3rem;
  };
  text-align: ${props => props.centered ? 'center' : 'inherit'};
`;

export const RedH3 = styled(H3)`
  color: ${red300};
`;

export const PrimaryH3 = styled(H3)`
  color: ${primary};
`;

export default H3;
