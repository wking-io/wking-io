import React from 'react';
import styled from 'styled-components';

import { Flex, FlexRow } from '../layouts/layout';
import Jumbo from './Jumbo';
import StandardLink from './StandardLink';
import { breakpoints } from '../utils/constants';

const LibraryHeader = styled.header`
  padding: 2rem 0 3.5rem 0;

  @media (max-width: ${breakpoints.m}) {
    padding: 4rem 0;
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 0 0 1rem 0;
  }
`;

const LibraryHero = () =>
  <LibraryHeader>
    <p>Welcome to the one and only</p>
    <Jumbo addSpace>Library Of Random Knowledge</Jumbo>
    <div>
      <Flex directionL="column">
        <FlexRow margin="0 1em 0 0" marginL="0">
          <p>
            Well there isn&apos;t anything here yet, but the game plan is to
            slowly add them for all (mainly me) to see. My focus is Front
            End Dev so the thoughts here will follow suit.
          </p>
        </FlexRow>
        <FlexRow margin="0 0 0 1em" marginL="0">
          <p>
            I began this after stumbling on Gatsby while listening to <StandardLink href='https://twitter.com/wesbos'>@wesbos</StandardLink> and <StandardLink href='https://twitter.com/stolinsky'>@stolinsky</StandardLink>&apos;s
            podcast <StandardLink href='https://syntax.fm/'>Syntax</StandardLink>.
            I am fairly new to React and would love feedback from any experienced
            Front End Devs who are willing to help out!
          </p>
        </FlexRow>
      </Flex>
    </div>
  </LibraryHeader>;

export default LibraryHero;
