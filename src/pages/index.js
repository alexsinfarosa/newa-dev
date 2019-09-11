import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Carousel from "../components/carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel></Carousel>
  </Layout>
)

export default IndexPage
