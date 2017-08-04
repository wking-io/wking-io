import React from 'react';
import styled from 'styled-components';

import Jumbo from './Jumbo';
import TwoColumn from './TwoColumn';
import { breakpoints } from '../utils/constants';

const HomeHeader = styled.header`
  padding: 2rem 0 3.5rem 0;

  @media (max-width: ${breakpoints.m}) {
    padding: 4rem 0;
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 0 0 1rem 0;
  }
`;

const HomeHero = () =>
  <HomeHeader>
    <p>Hi, I&apos;m William King</p>
    <Jumbo addSpace>
      I Am A{' '}
      <a href="https://codepen.io/Wking/" className="underline">
        Front End Developer
      </a>{' '}
      And Design Mentor At{' '}
      <a
        href="https://www.skillcrush.com/skillcrush-blueprints/"
        className="underline"
      >
        Skillcrush
      </a>
    </Jumbo>
    <TwoColumn>
      <p>
        I solve problems associated with creating digital products. My
        focus is on the transition from design to front end code, but
        honestly I just love learning as much as I can to better
        understand how to build successful products.
      </p>
      <p>
        A full update is coming soon including my most recent
        projects. However, in the mean time I keep track of randomly
        specific knowledge in the Library if you are interested. Stay
        tuned and follow me to get updates!
      </p>
    </TwoColumn>
  </HomeHeader>;

export default HomeHero;
