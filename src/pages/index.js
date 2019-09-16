import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/pro-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Carousel from "../components/carousel"
import WeatherStationOverview from "../components/weatherStationOverview"
import Card from "../components/reusable/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="text-center text-gray-700 tracking-wide text-2xl font-light py-12">
      Your source for <span className="font-semibold">weather</span> and{" "}
      <span className="font-semibold">integrated pest management</span> in the
      North East
    </div>

    {/* carousel section */}
    <section className="m-4">
      <Carousel></Carousel>
    </section>

    {/* search section */}
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

    {/* station details and map section */}
    <section className="px-6 mt-16">
      <div className="flex -mx-6">
        {/* left block */}
        <div className="w-1/2 px-4">
          <WeatherStationOverview></WeatherStationOverview>

          <div className="mt-10">
            <Card title="Pest & Disease Forecasts" btnLabel="All Reports">
              <div className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                hic, eos eum esse possimus illum quisquam. Quia quaerat
                architecto reiciendis, explicabo minima modi. Qui vitae
                consequuntur vero omnis nobis quaerat.
              </div>
            </Card>
          </div>

          <div className="mt-10">
            <Card title="Crop Management Tool" btnLabel="All Tools">
              <div className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                hic, eos eum esse possimus illum quisquam. Quia quaerat
                architecto reiciendis, explicabo minima modi. Qui vitae
                consequuntur vero omnis nobis quaerat.
              </div>
            </Card>
          </div>
        </div>

        {/* right block */}
        <div className="w-1/2 px-4">
          <div className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden">
            <div className="p-5 bg-purple-100">
              <h3 className="text-purple-700 text-lg">
                Click a map marker to load the station details.
              </h3>
            </div>
            <div className="flex-1 flex justify-center items-center">
              Map...
            </div>
            <div className="p-5 bg-purple-100">footer</div>
          </div>
        </div>
      </div>
    </section>

    {/* blocg section */}
    <section className="mt-16 bg-blue-100" style={{ height: 800 }}>
      <h3 className="text-5xl font-semibold text-gray-800 text-center">
        Recent News
      </h3>

      <div className="mt-12 flex flex-wrap">
        {[
          "June 19, 2018",
          "September 23, 2018",
          "Jannuary 14, 2018",
          "April 8, 2017",
        ].map(d => {
          return (
            <div className="px-2">
              <div className="w-1/2 -mx-2">
                <Card title={d} btnLabel="Read Article">
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <p className="mt-4 text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sit est quae atque quas quod temporibus voluptate libero
                      earum. Velit, sunt autem! Voluptas perferendis in ducimus!
                      Ipsum in accusamus delectus ipsa.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          )
        })}
      </div>
    </section>

    <section className="mt-16">X</section>

    <section className="mt-80">X</section>
  </Layout>
)

export default IndexPage
