import styled from 'styled-components';

import { breakpoints } from '../utils/constants';

const TwoColumn = styled.div`
  column-count: 2;
  column-gap: 2em;

  > p {
    margin-top: 0;
  }

  @media screen and (max-width: ${breakpoints.l}) {
    column-count: 1;
  }
`;

export default TwoColumn;
