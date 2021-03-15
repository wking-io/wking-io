import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export default function({ projectId = "default" }) {
  const data = useStaticQuery(graphql`{
  elmpress: file(relativePath: {eq: "images/projects/elm-press.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  elmlive: file(relativePath: {eq: "images/projects/elm-live.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  default: file(relativePath: {eq: "images/projects/wking.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
}
`)
  return (
    <GatsbyImage
      image={data[projectId.replace("-", "")].childImageSharp.gatsbyImageData}
      alt="Project Header" />
  );
}
