import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const ElmPressHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/elm-press.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="elm-press Header" />
}

export const ElmLiveHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/elm-live.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="elm-live Header" />
}

export const DefaultHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/default.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="Website Header" />
}

export default ({ projectId }) => {
  switch (projectId) {
    case "elm-press":
      return <ElmPressHeader />
    case "elm-live":
      return <ElmLiveHeader />
    default:
      return <DefaultHeader />
  }
}
