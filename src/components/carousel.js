import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = () => {
  // Slider configuration ---
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "carousel" } }) {
        nodes {
          images: childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <Slider {...settings}>
        {data.allFile.nodes.map((img, i) => (
          <Img key={i} fluid={img.images.fluid}></Img>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
