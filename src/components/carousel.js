import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = data => {
  console.log(data)
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      <div style={{ maxWidth: 1200 }}>
        {/* <Img fluid={data.slideOne.childImageSharp.fluid}></Img>
        <Img fluid={data.slideTwo.childImageSharp.fluid}></Img>
        <Img fluid={data.slideThree.childImageSharp.fluid}></Img> */}
      </div>
    </Slider>
  )
}

export default Carousel

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    slideOne: file(relativePath: { eq: "images/dan_gold.jpg" }) {
      ...fluidImage
    }
    slideTwo: file(relativePath: { eq: "images/ja_ma.jpg" }) {
      ...fluidImage
    }
    slideThree: file(relativePath: { eq: "images/neonbrand.jpg" }) {
      ...fluidImage
    }
  }
`
