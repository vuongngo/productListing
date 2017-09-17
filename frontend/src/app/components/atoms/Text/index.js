import styled from 'styled-components';
import { primary, red300 } from 'app/styles/colors';

export const LargeText = styled.p`
  letter-spacing: 1px;
  font-weight: 300;
  width: 100%;
  font-size: 1.6rem;
  @media (min-width: 640px) {
    font-size: 1.7rem;
  }
  @media (min-width: 900px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1600px) {
    font-size: 2rem;
  }
  @media (min-width: 1900px) {
    font-size: 2.1rem;
  };
  text-align: ${props => props.centered ? 'center' : (props.align || 'inherit')};
`;

export const LargeWy = styled.div`
  font-weight: 300;
  width: 100%;
  font-size: 1.5rem;
  text-align: ${props => props.centered ? 'center' : 'inherit'};
  @media (min-width: 640px) {
    font-size: 1.7rem;
  }
  @media (min-width: 900px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1600px) {
    font-size: 2rem;
  }
  @media (min-width: 1900px) {
    font-size: 2.1rem;
  };
  text-align: ${props => props.centered ? 'center' : (props.align || 'inherit')};
`;

export const RedLargeText = styled(LargeText)`
  color: ${red300};
`;

export const PrimaryLargeText = styled(LargeText)`
  color: ${primary};
`;

export const SmallText = styled.p`
  font-weight: 300;
  width: 100%;
  font-size: 1rem;
  letter-spacing: 1px;
  @media (min-width: 640px) {
    font-size: 1.1rem;
  }
  @media (min-width: 900px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1600px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1900px) {
    font-size: 1.5rem;
  }
  text-align: ${props => props.centered ? 'center' : 'inherit'};
`;

export const SmallWy = styled.div`
  font-weight: 300;
  width: 100%;
  font-size: 1.2rem;
  letter-spacing: 1px;
  @media (min-width: 640px) {
    font-size: 1.4rem;
  }
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.6rem;
  }
  @media (min-width: 1600px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1900px) {
    font-size: 1.8rem;
  }
  text-align: ${props => props.centered ? 'center' : 'inherit'};
`;


export const RedSmallText = styled(SmallText)`
  color: ${red300};
`;

export const PrimarySmallText = styled(SmallText)`
  color: ${primary};
`;
