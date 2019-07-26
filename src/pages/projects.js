// Dependencies
import React from "react"
import { graphql, Link } from "gatsby"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Newsletter } from "../components/newsletter"

const Articles = ({ data }) => (
  <Layout>
    <SEO title="Content Feed" />
    <div className="max-w-3xl mx-auto px-8 pt-40 text-black pb-24">
      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-12">
        Projects.
      </h2>
      {data.allProjectsJson.edges.map(({ node }) => (
        <div
          className="article-card__wrapper border-t-2 border-grey-200"
          key={node.id}
        >
          <Link
            className="article-card py-6 md:py-8 block"
            to={`projects/${node.id}`}
          >
            <h3 className="article-card__title font-display text-black font-bold text-xl sm:text-2xl mb-2">
              {node.title}
            </h3>
            <div className="flex">
              <p className="text-grey-600 mr-4">{node.excerpt}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
    <Newsletter />
  </Layout>
)

export const query = graphql`
  query {
    allProjectsJson {
      totalCount
      edges {
        node {
          id
          title
          excerpt
        }
      }
    }
  }
`

export default Articles
