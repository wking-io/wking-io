// Dependencies
import React from "react"
import { graphql, Link } from "gatsby"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Newsletter } from "../components/newsletter"
import { ElmPressHeader } from "../components/projectHeader"

const Articles = ({ data }) => (
  <Layout>
    <SEO title="Content Feed" />
    <div className="max-w-3xl mx-auto px-8 pt-40 text-black pb-24">
      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-12">
        Projects.
      </h2>
      <div className="flex flex-wrap">
        {data.allProjectsJson.edges.map(({ node }) => (
          <div
            className="border-2 border-grey-200 w-full md:w-1/2"
            key={node.id}
          >
            <Link
              className="article-card p-6 md:p-8 block"
              to={`projects/${node.id}`}
            >
              <div className="h-32 w-auto mb-2">
                <ElmPressHeader />
              </div>
              <h4 className="article-card__title font-display text-black font-bold text-xl sm:text-2xl mb-2">
                {node.title}
              </h4>
              <div className="flex">
                <p className="text-grey-600 mr-4">{node.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
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
          name
          title
          excerpt
        }
      }
    }
  }
`

export default Articles
