import React from 'react';
import styled from 'styled-components';
import FancyLink from './FancyLink';

import avatar from '../img/avatar.jpg';

const Avatar = styled.img`
  width: 50px;
`;

const Bio = () =>
  <p>
    <Avatar src={avatar} alt="William King" />
    Written by <strong>William King</strong> a Front End Developer and Design
    Mentor for Skillcrush.{' '}
    <FancyLink href="https://twitter.com/wking_io">
      You should follow him on Twitter
    </FancyLink>
  </p>;

export default Bio;
