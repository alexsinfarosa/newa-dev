import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UniversityLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      partnerLogo: file(relativePath: { eq: "penn-state-logo.jpg" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      fixed={data.partnerLogo.childImageSharp.fixed}
      alt="Penn State University"
    />
  )
}

export default UniversityLogo
