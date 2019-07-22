// Dependencies
import React from "react"
import { graphql } from "gatsby"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Newsletter } from "../components/newsletter"

const Articles = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <div className="max-w-3xl mx-auto px-8 pt-40 text-black pb-24">
      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-12">
        Articles.
      </h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <a
            className="article-card p-6 md:p-8 block bg-grey-100 mb-6"
            href={node.fields.slug}
          >
            <h3 className="font-display text-black font-bold text-xl sm:text-2xl mb-2">
              {node.frontmatter.title}
            </h3>
            <p className="text-grey-600">{node.frontmatter.date}</p>
          </a>
        </div>
      ))}
    </div>
    <Newsletter />
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
