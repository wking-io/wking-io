import styled from 'styled-components';

import { colors } from '../utils/constants';

const StandardLink = styled.a`
  color: black;
  text-decoration: none;
  position: relative;
  background-image: ${colors.gradient};
  background-repeat: no-repeat;
  background-size: 100% 4px;
  background-position: 0 12px;

  :hover {
    background-image: linear-gradient(transparent, transparent);
  }
`;

export default StandardLink;
