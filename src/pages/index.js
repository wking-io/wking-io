import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import HomeHero from '../components/HomeHero'

class HomePage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} />
        <HomeHero />
      </div>
    )
  }
}

// HomePage.propTypes = {
//   route: PropTypes.object,
// }

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
