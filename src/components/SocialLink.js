import React from 'react'
import styled from 'styled-components'

import { breakpoints, icons } from '../utils/constants'

const SocialLink = styled.a`
  text-decoration: none;
  color: black;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  flex-direction: row;

  & .social__icon {
    width: 2.5rem;
    height: auto;
    fill: #000;
    margin: 0 2rem 0 0;
  }

  & .social__color {
    fill: #000;
    transition: all .25s ease-in-out;
  }

  & .social__name {
    opacity: 0;
    transition: all .25s ease-in-out;
    transform: translateY(5px);
  }

  &:hover .social__color {
    fill: url("/#gradient");
  }

  &:hover .social__name {
    opacity: .35;
    transform: translateY(0px);
  }

  @media screen and (max-width: ${breakpoints.m}) {
    .social__name {
      display: none;
    }
  }
`

export default SocialLink
