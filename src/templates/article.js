import React from "react"
import { graphql } from "gatsby"
import TweetEmbed from "react-tweet-embed"
import Layout from "../components/layout"
import Social from "../components/social"
import { Newsletter } from "../components/newsletter"
import SEO from "../components/seo"

const getArticleImage = project => {
  switch (project) {
    case "elm-press":
      return "/images/projects/elm-press.jpg"
    case "elm-live":
      return "/images/projects/elm-live.jpg"
    default:
      return "/images/projects/wking.jpg"
  }
}

export default ({ data, location }) => {
  const post = data.markdownRemark
  return (
    <Layout theme={post.frontmatter.project}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={getArticleImage(post.frontmatter.project)}
        article
      />
      <div className="max-w-3xl px-8 mx-auto pt-40 text-black pb-24">
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
          {post.frontmatter.title}
        </h2>
        <Social className="mb-16" link={location.href} />
        <div
          className={`post-content mb-8 theme-${post.frontmatter.project}`}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <p className="text-xl mb-4">
          <strong>Join the discussion here:</strong>
        </p>
        <TweetEmbed id={post.frontmatter.tweet} placeholder={"loading"} />
      </div>
      <Newsletter theme={post.frontmatter.project} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        project
        tweet
      }
    }
  }
`
