import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TopHeader from "./topHeader"
import Navigation from "./navigation"

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
      <Navigation></Navigation>
      <main>{children}</main>
    </>
  )
}

export default Layout
