import React from 'react';
import styled from 'styled-components';
import FancyLink from './FancyLink';

import avatar from '../img/avatar.jpg';

const Avatar = styled.img`
  width: 80px;
`;

const BioWrapper = styled.div`
  text-align: center;
`;

const Bio = () =>
  <BioWrapper>
    <Avatar src={avatar} alt="William King" />
    <p>Written by William King, a Front End Developer and Design
    Mentor for Skillcrush.</p>
    <FancyLink href="https://twitter.com/wking_io">
      You should follow him on Twitter
    </FancyLink>
  </BioWrapper>;

export default Bio;
