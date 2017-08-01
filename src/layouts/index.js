import React from 'react';
import Link from 'gatsby-link';
import PropType from 'prop-types';
import styled from 'styled-components';

import NavWrapper from '../components/NavWrapper';
import FooterWrapper from '../components/FooterWrapper';

const ContentWrapper = styled.div`min-height: 95vh;`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div>
        <ContentWrapper>
          <NavWrapper location={location.pathname} />
          {children()}
        </ContentWrapper>
        <FooterWrapper />
      </div>
    );
  }
}

// Template.propTypes = {
//   children: PropType.function,
//   location: PropType.object,
//   route: PropType.object,
// }

export default Template;
