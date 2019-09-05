import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function({ projectId = "default" }) {
  const data = useStaticQuery(graphql`
    query {
      elmpress: file(relativePath: { eq: "images/projects/elm-press.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      elmlive: file(relativePath: { eq: "images/projects/elm-live.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      default: file(relativePath: { eq: "images/projects/wking.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data[projectId.replace("-", "")].childImageSharp.fluid}
      alt="Project Header"
    />
  )
}
