// Dependencies
import React from "react"
import { graphql } from "gatsby"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"

const Articles = ({ data }) => (
  <Layout>
    <SEO title="wking | Articles" />
    <div>
      <h2>Articles.</h2>
      <p>This is where the articles will go.</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <a href={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.date}</p>
          </a>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Articles
