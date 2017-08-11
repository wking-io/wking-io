import React from 'react';
import styled from 'styled-components';

import { breakpoints, colors } from '../utils/constants';

const Footer = styled.footer`
  padding: 2rem 0;

  p {
    text-align: center;
  }
`;

const FooterWrapper = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <Footer>
      <p>
        © 2016-{currentYear} All Rights Reserved.
      </p>
    </Footer>
  );
};

export default FooterWrapper;
