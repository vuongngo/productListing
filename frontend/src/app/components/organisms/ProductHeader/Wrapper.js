import styled from 'styled-components';
import { Row, Col } from 'app/components/molecules/Grid';
import { grey200 } from 'app/styles/colors';

const Wrapper = styled(Row)`
  border-bottom: 1px solid ${grey200};
  margin-bottom: 20px;
  padding-bottom: 10px;
`;

export const ColEnd = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export default Wrapper;
