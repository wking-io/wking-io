import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Bio from '../components/Bio'
import LibraryHero from '../components/LibraryHero'

class Library extends React.Component {
  render() {
    // console.log("props", this.props)
    const pageLinks = []
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    posts.forEach(post => {
      if (post.node.path !== '/404/') {
        const title = get(post, 'node.frontmatter.title') || post.node.path
        pageLinks.push(
          <li key={post.node.frontmatter.path}>
            <Link to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        )
      }
    })

    return (
      <div>
        <Helmet title={siteTitle} />
        <LibraryHero />
        <Bio />
        <ul>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

// Library.propTypes = {
//   route: PropTypes.object,
// }

export default Library

export const pageQuery = graphql`
  query LibraryQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
