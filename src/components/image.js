import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      partnerLogo: file(relativePath: { eq: "penn-state-logo.jpg" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log(data)

  return <Img fixed={data.partnerLogo.childImageSharp.fixed} />
}

export default Image
