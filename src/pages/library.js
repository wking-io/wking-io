import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';


import LibraryHero from '../components/LibraryHero';
import Book from '../components/Book';
import Gist from '../components/Gist';
import knowledgeBase from '../data/knowledgeBase';
import buildLibrary from '../utils/buildLibrary';

class Library extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const library = buildLibrary(knowledgeBase);
    const books = Object.keys(library);

    return (
      <div>
        <Helmet title={siteTitle} />
        <LibraryHero />
        <Gist id='210693d2403ebb7ab44c9fcdc864bd48' />
      </div>
    );
  }
}

export default Library;

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
`;
