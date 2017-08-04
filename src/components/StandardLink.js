import styled from 'styled-components';

import { colors, breakpoints } from '../utils/constants';

const StandardLink = styled.a`
  color: black;
  text-decoration: none;
  position: relative;
  background-image: ${colors.gradient};
  background-repeat: no-repeat;
  background-size: 100% 0.125em;
  background-position: 0 1.25em;
  display: inline-block;

  :hover {
    background-image: ${colors.gradient}, linear-gradient(#ededed, #ededed);
    background-repeat: no-repeat, no-repeat;
    background-size: 100% 0.125em, 100%;
    background-position: 0 1.25em, 0;
  }
`;

export default StandardLink;
