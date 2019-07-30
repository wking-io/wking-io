import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Social from "../components/social"
import Tweet from "../components/tweet"
import { Newsletter } from "../components/newsletter"
import { BlockQuote } from "../components/designSystem"
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
  const post = data.mdx
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
        <div className={`post-content mb-8 theme-${post.frontmatter.project}`}>
          <MDXProvider
            components={{
              h3: ({ children, ...props }) => (
                <h3
                  {...props}
                  className="leading-tight mt-12 mb-6 text-3xl font-display font-bold"
                >
                  {children}
                </h3>
              ),
              p: props => (
                <p {...props} className="leading-relaxed mb-6 text-lg" />
              ),
              a: ({ children, ...props }) => (
                <a
                  {...props}
                  className={`link${
                    post.frontmatter.project === "elm-press"
                      ? " link--secondary"
                      : ""
                  }`}
                >
                  {children}
                </a>
              ),
              img: ({ alt, ...props }) => (
                <img {...props} alt={alt} className="w-full block" />
              ),
              BlockQuote,
              Link,
              Tweet,
            }}
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </div>
        <p className="text-xl mb-4">
          <strong>Join the discussion here:</strong>
        </p>
        <Tweet
          tweetId={post.frontmatter.tweet}
          project={post.frontmatter.project}
        />
      </div>
      <Newsletter project={post.frontmatter.project} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        description
        project
        tweet
      }
    }
  }
`
