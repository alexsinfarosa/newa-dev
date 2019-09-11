import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Image from "../components/image"

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1200) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

// export const pageQuery = graphql`
//   query {
//     slideOne: file(relativePath: { eq: "dan_gold.jpg" }) {
//       ...fluidImage
//     }
//     slideTwo: file(relativePath: { eq: "ja_ma.jpg" }) {
//       ...fluidImage
//     }
//     slideThree: file(relativePath: { eq: "neonbrand.jpg" }) {
//       ...fluidImage
//     }
//   }
// `

const Carousel = () => {
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
        <Image></Image>
      </div>
    </Slider>
  )
}

export default Carousel
