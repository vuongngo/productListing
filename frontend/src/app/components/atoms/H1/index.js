import styled from 'styled-components';
import { primary, red300 } from 'app/styles/colors';

const H1 = styled.h1`
  font-size: 2rem;
  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.75rem;
  }
  @media (min-width: 1600px) {
    font-size: 3rem;
  }
  @media (min-width: 1900px) {
    font-size: 3.25rem;
  }
`;

export const RedH1 = styled(H1)`
  color: ${red300};
`;

export const PrimaryH1 = styled(H1)`
  color: ${primary};
`;

export default H1;
