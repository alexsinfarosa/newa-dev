import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearch,
  faArrowRight,
  faUniversalAccess,
  faEngineWarning,
  faUniversity,
} from "@fortawesome/pro-regular-svg-icons"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = () => {
  // Slider configuration ---
  const settings = {
    dots: true,
    autoplay: false,
    infinite: false,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.append-arrows'
  }
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "carousel" } }) {
        nodes {
          images: childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 300) {
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
        {/* {data.allFile.nodes.map((img, i) => (
          <Img key={i} fluid={img.images.fluid}></Img>
        ))} */}
        <div>
          <div className="flex h-400 relative">
            <img 
            aria-label=""
            alt=""
            className="object-cover w-full" 
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80"/>
            <div class="absolute p-8 m-6 bg-gray-900-75 rounded text-white">
              <div class="" tabindex="0">
                <h2 className="text-3xl font-semibold">Slide Title</h2>
                <p className="my-3 mb-6">Slider subtext that is longer in form.</p>
                <Link className="mt-3 items-center py-1 px-3 bg-white text-primary-900 rounded-full border-2 border-primary-300 hover:border-primary-500 hover:text-primary-700" href="#">Button <span class="ml-3"><FontAwesomeIcon icon={faArrowRight} /></span></Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex h-400 relative">
            <img 
            aria-label=""
            alt=""
            className="object-cover w-full" 
            src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80"/>
            <div class="absolute p-8 m-6 bg-gray-900-75 rounded text-white">
              <div class="" tabindex="0">
                <h2 className="text-3xl font-semibold">Slide Title</h2>
                <p className="my-3 mb-6">Slider subtext that is longer in form.</p>
                <Link className="mt-3 items-center py-1 px-3 bg-white text-primary-900 rounded-full border-2 border-primary-300 hover:border-primary-500 hover:text-primary-700" href="#">Button <span class="ml-3"><FontAwesomeIcon icon={faArrowRight} /></span></Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex h-400 relative">
            <img 
            aria-label=""
            alt=""
            className="object-cover w-full" 
            src="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
            <div class="absolute p-8 m-6 bg-gray-900-75 rounded text-white">
              <div class="" tabindex="0">
                <h2 className="text-3xl font-semibold">Slide Title</h2>
                <p className="my-3 mb-6">Slider subtext that is longer in form.</p>
                <Link className="mt-3 items-center py-1 px-3 bg-white text-primary-900 rounded-full border-2 border-primary-300 hover:border-primary-500 hover:text-primary-700" href="#">Button <span class="ml-3"><FontAwesomeIcon icon={faArrowRight} /></span></Link>
              </div>
            </div>
          </div>
        </div>

      </Slider>
      <div className="append-arrows"></div>
    </div>
  )
}

export default Carousel
