import React from 'react';
import PropType from 'prop-types';

import NavWrapper from '../components/NavWrapper';
import FooterWrapper from '../components/FooterWrapper';
import { PageWrapper, ContentWrapper, Wrapper, Flex, Aside, Main } from '../layouts/layout';
import SocialList from '../components/SocialList';
import { socialAccounts } from '../utils/constants';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div>
        <PageWrapper>
          <NavWrapper location={location.pathname} />
          <Wrapper>
            <ContentWrapper>
              <Flex directionM="column-reverse">
                <Aside width="25%" widthM="100%" margin="0 2em 0 0">
                  <SocialList accounts={socialAccounts} />
                </Aside>
                <Main>
                  {children()}
                </Main>
              </Flex>
            </ContentWrapper>
          </Wrapper>
        </PageWrapper>
        <FooterWrapper />
      </div>
    );
  }
}

Template.propTypes = {
  children: PropType.func,
  location: PropType.object,
  route: PropType.object,
};

export default Template;
