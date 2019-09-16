import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/pro-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Carousel from "../components/carousel"
import WeatherStationOverview from "../components/weatherStationOverview"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="text-center text-gray-700 tracking-wide text-2xl font-light py-12">
      Your source for <span className="font-semibold">weather</span> and{" "}
      <span className="font-semibold">integrated pest management</span> in the
      North East
    </div>

    <Carousel></Carousel>

    <section className="mt-16 text-center max-w-xl m-auto">
      <h3 className="text-5xl font-semibold text-gray-800">
        Find a Weather Station
      </h3>
      <p className="text-gray-700 text-xl">
        for up-to-date pest forecasts and weather data
      </p>
      <li className="inline-flex list-none relative mt-8">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
        </div>
        <input
          type="search"
          name="search"
          placeholder="Search by Station or Zipcode"
          aria-label="Search weather station"
          className="py-3 pl-10 pr-3 w-80 rounded-full bg-gray-100 focus:outline-none border border-gray-300 placeholder-gray-600 focus:bg-white focus:bg-transparent"
        ></input>
      </li>
    </section>

    <section className="flex p-4 mt-24">
      <div className="flex-1 pr-4">
        <WeatherStationOverview></WeatherStationOverview>
      </div>

      <div className="flex-1 pl-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          ipsum possimus exercitationem maxime? Beatae sed aperiam corporis qui
          voluptatibus expedita ullam? Corrupti eligendi autem nemo totam est
          velit, veritatis molestias.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          ipsum possimus exercitationem maxime? Beatae sed aperiam corporis qui
          voluptatibus expedita ullam? Corrupti eligendi autem nemo totam est
          velit, veritatis molestias.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          ipsum possimus exercitationem maxime? Beatae sed aperiam corporis qui
          voluptatibus expedita ullam? Corrupti eligendi autem nemo totam est
          velit, veritatis molestias.
        </p>
      </div>
    </section>

    <section className="mt-80">BLOG POSTS</section>
  </Layout>
)

export default IndexPage
