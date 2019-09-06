import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TopHeader from "./topHeader"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <TopHeader siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </>
  )
}

export default Layout
