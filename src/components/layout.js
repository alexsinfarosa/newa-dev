import React from "react"
import PropTypes from "prop-types"
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
    <div>
      <TopHeader siteTitle={data.site.siteMetadata.title} />

      <div className="mx-auto">
        <Navigation></Navigation>
      </div>
      <main className="m-auto">
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
