import React from 'react'
import styled from 'styled-components'

import { breakpoints, colors } from '../utils/constants'
import 'typeface-roboto-slab'

export const Jumbo = styled.h1`
  font-size: 5.8vw;
  line-height: 1.25;
  font-family: "Roboto Slab", "Roboto", sans-serif;
  margin: ${props => (props.addSpace ? '0 0 0.5em 0' : 0)};

  .underline {
    color: black;
    text-decoration: none;
    position: relative;
    background-image: linear-gradient(black, black);
    background-repeat: no-repeat;
    background-size: 100% 0.7vw;
    background-position: 0 6.65vw;
  }

  .underline:hover {
    background-image: ${colors.gradient};
  }

  @media screen and (max-width: ${breakpoints.m}) {
    font-size: 8vw;
    margin: ${props => (props.addSpace ? '0.75em 0 0.5em 0' : 0)};

    .underline {
      background-size: 100% 1.15vw;
      background-position: 0 9.15vw;
    }
  }
`

export default Jumbo
