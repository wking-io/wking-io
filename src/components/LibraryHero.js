import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Wrapper, Flex, FlexRow } from '../layouts/layout'
import SocialItem from './SocialItem'
import SocialLink from './SocialLink'
import NoList from './NoList'
import Jumbo from './Jumbo'
import FancyLink from './FancyLink'
import { icons, breakpoints } from '../utils/constants'

const LibraryHeader = styled.header`
  padding: 2rem 0 3.5rem 0;

  @media (max-width: ${breakpoints.m}) {
    padding: 4rem 0;
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 0 0 4rem 0;
  }
`

const LibraryHero = () =>
  <LibraryHeader>
    <Wrapper>
      <Flex directionM="column-reverse">
        <FlexRow width="25%" widthM="100%" margin="0 2em 0 0">
          <NoList>
            <SocialItem inline="m">
              <SocialLink href="https://twitter.com/wking_io" target="_blank">
                {icons.twitter}
                <p className="social__name">TWITTER</p>
              </SocialLink>
            </SocialItem>
            <SocialItem inline="m">
              <SocialLink
                href="https://www.instagram.com/wking_io/"
                target="_blank"
              >
                {icons.instagram}
                <p className="social__name">INSTAGRAM</p>
              </SocialLink>
            </SocialItem>
          </NoList>
        </FlexRow>
        <FlexRow>
          <p>Hi, I'm William King</p>
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
          <div>
            <Flex directionL="column">
              <FlexRow margin="0 1em 0 0" marginL="0">
                <p>
                  I solve problems associated with creating digital products. My
                  focus is on the transition from design to front end code, but
                  honestly I just love learning as much as I can to better
                  understand how to build successful products.
                </p>
              </FlexRow>
              <FlexRow margin="0 0 0 1em" marginL="0">
                <p>
                  A full update is coming soon including my most recent
                  projects. However, in the mean time I keep track of randomly
                  specific knowledge in the Library if you are interested. Stay
                  tuned and follow me to get updates!
                </p>
              </FlexRow>
            </Flex>
          </div>
        </FlexRow>
      </Flex>
    </Wrapper>
  </LibraryHeader>

export default LibraryHero
