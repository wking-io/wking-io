// Dependencies
import React from "react"

// Components
import SEO from "../../components/seo"
import Layout from "../../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="wking | Wordpress needs a frontend framework" />
    <div>
      <h2>Wordpress needs a frontend framework.</h2>
      <p>
        The complexity of websites is growing exponentially. Whether you feel
        that is a good thing or a bad thing doesn't change that and Wordpress is
        not immune. Although commonly thought of as only a blogging platform,
        the company I work for and thousands of other use it for so much more.
        With this growing complexity frameworks, tools, and even new languages
        have been created to help manage it. However, Wordpress does not have a
        story around how these new tools fit into developing for their platform.
        That is what I want to help fix.
      </p>
    </div>
  </Layout>
)

export default IndexPage
