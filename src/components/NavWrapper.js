import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import { Wrapper, Flex } from '../layouts/layout';
import { breakpoints } from '../utils/constants';
import FancyLink from './FancyLink';
import logo from '../img/logo.svg';

const Nav = styled.nav`
  background: #fff;
  padding: 2rem 0;
`;

const Logo = styled.img`
  width: 6.25rem;

  @media (max-width: ${breakpoints.s}) {
    width: 8rem;
  }
`;

const NavWrapper = ({ location }) => {
  const route = location === '/library' ? '/' : '/library';
  const name = location === '/library' ? 'Home' : 'Library';

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
  );
};

NavWrapper.propTypes = {
  location: PropType.string,
};

export default NavWrapper;
