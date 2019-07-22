import React from "react"
import Layout from "../components/layout"
import Social from "../components/social"
import { Newsletter } from "../components/newsletter"
import SEO from "../components/seo"

export default ({ data, location }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="max-w-3xl px-8 mx-auto pt-40 text-black pb-24">
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
          {post.frontmatter.title}
        </h2>
        <Social className="mb-16" link={location.href} />
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <Newsletter />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
