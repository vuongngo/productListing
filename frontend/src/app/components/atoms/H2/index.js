import styled from 'styled-components';
import { primary, red300 } from 'app/styles/colors';

const H2 = styled.p`
  letter-spacing: 1px;
  font-size: 2.2rem;
  font-weight: 500;
  @media (min-width: 640px) {
    font-size: 2.3rem;
  }
  @media (min-width: 900px) {
    font-size: 2.4rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1600px) {
    font-size: 2.6rem;
  }
  @media (min-width: 1900px) {
    font-size: 2.7rem;
  };
  text-align: ${props => props.centered ? 'center' : 'inherit'};
`;

export const RedH2 = styled(H2)`
  color: ${red300};
`;

export const PrimaryH2 = styled(H2)`
  color: ${primary};
`;

export default H2;
