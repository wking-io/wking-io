// Dependencies
import React from "react"
import { graphql } from "gatsby"
import Link from "../components/link"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Newsletter } from "../components/newsletter"
import ProjectHeader from "../components/projectHeader"
import { empty } from "../utils"

const Articles = ({ data }) => (
  <Layout>
    <SEO title="Content Feed" />
    <div className="max-w-4xl mx-auto px-8 pt-40 text-black pb-24">
      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-12">
        Projects.
      </h2>
      <div className="flex justify-between flex-wrap">
        {data.allProjectsJson.edges.map(({ node }) => (
          <div className="project-card border-2 border-grey-200" key={node.id}>
            <Link
              className="article-card p-6 md:p-8 block"
              to={empty(node.external) ? `/projects/${node.id}` : node.external}
            >
              <div className="h-32 w-auto mb-6">
                <ProjectHeader projectId={node.id} />
              </div>
              <h4 className="article-card__title font-display text-black font-bold text-xl sm:text-2xl mb-3 leading-tight">
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
          external
        }
      }
    }
  }
`

export default Articles
