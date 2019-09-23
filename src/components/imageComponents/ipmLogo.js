import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IpmLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      partnerLogo: file(relativePath: { eq: "ipm-logo.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.partnerLogo.childImageSharp.fixed} alt="IPM" />
}

export default IpmLogo
