import React from 'react'
import styled from 'styled-components'

import { Wrapper, Flex } from '../layouts/layout'
import FancyLink from './FancyLink'
import logo from '../img/logo.svg'

const Nav = styled.nav`
  background: #fff;
  padding: 2rem 0;
`

const Logo = styled.img`width: 10.25rem;`

const NavWrapper = ({ location, ...props }) => {
  const route = location === '/library' ? '/' : '/library'
  const name = location === '/library' ? 'Home' : 'Library'

  return (
    <Nav>
      <Wrapper>
        <Flex alignment="flex-end">
          <Logo src={logo} alt="wking logo" />
          <FancyLink to={route}>
            {name}
          </FancyLink>
        </Flex>
      </Wrapper>
    </Nav>
  )
}

export default NavWrapper
