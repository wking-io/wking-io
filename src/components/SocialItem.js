import React from 'react'
import styled from 'styled-components'

import { breakpoints } from '../utils/constants'

const SocialItem = styled.li`
  ${props =>
    props.inline === 'xl'
      ? 'display: inline-block'
      : ''} @media screen and (max-width: ${breakpoints.l}) {
    ${props => (props.inline === 'l' ? 'display: inline-block' : '')};
  }

  @media screen and (max-width: ${breakpoints.m}) {
    ${props => (props.inline === 'm' ? 'display: inline-block' : '')};
  }

  @media screen and (max-width: ${breakpoints.s}) {
    ${props => (props.inline === 's' ? 'display: inline-block' : '')};
  }

  @media screen and (max-width: ${breakpoints.xs}) {
    ${props => (props.inline === 'xs' ? 'display: inline-block' : '')};
  }
`

export default SocialItem
