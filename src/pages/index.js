import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearch,
  faArrowRight,
  faUniversalAccess,
  faEngineWarning,
  faUniversity,
} from "@fortawesome/pro-regular-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Carousel from "../components/carousel"
import WeatherStationOverview from "../components/weatherStationOverview"
import Card from "../components/reusable/card"
import StationMap from "../components/stationMap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* carousel section */}
    <section>
      <div className="text-center tracking-wider text-2xl py-4 font-light">
        Your source for <span className="font-normal">weather</span> and{" "}
        <span className="font-normal">integrated pest management</span> in the
        North East
      </div>

      <div>
        <Carousel></Carousel>
      </div>
    </section>

    {/* search section */}
    <section className="mt-16 text-center max-w-xl m-auto">
      <h3 className="text-5xl font-semibold text-gray-800">
        Find a Weather Station
      </h3>
      <p className="text-gray-700 text-xl">
        for up-to-date pest forecasts and weather data
      </p>
      <div className="inline-flex list-none relative mt-8">
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
      </div>
    </section>

    {/* station details and map section */}
    <section className="mt-24 px-6 ">
      <div className="flex -mx-6">
        {/* left block */}
        <div className="w-1/2 px-6">
          <WeatherStationOverview></WeatherStationOverview>

          <div className="mt-10">
            <Card
              title="Pest & Disease Forecasts"
              btnLabel="All Reports"
              color="primary"
            >
              <div className="p-4 bg-white">
                <div className="flex flex-wrap -mx-6 overflow-hidden">
                  {[
                    "Apple Scab",
                    "Fire Blight",
                    "Codding Moth",
                    "Plum Curculio",
                    "Grape Berry Moth",
                    "Cabbage Maggot",
                  ].map((d, i) => (
                    <div
                      key={i}
                      className="my-1 px-6 w-1/3 px-2 overflow-hidden text-xs text-center font-semibold underline text-primary-700 border-r"
                    >
                      {i === 0 ? (
                        <span className="text-red-700 underline">
                          <FontAwesomeIcon icon={faEngineWarning} />
                          <span className="ml-1">{d}</span>
                        </span>
                      ) : (
                        <span>{d}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10">
            <Card
              title="Crop Management Tool"
              btnLabel="All Tools"
              color="primary"
            >
              <div className="p-4 bg-white">
                <div className="flex flex-wrap -mx-6 overflow-hidden">
                  {[
                    "Apple Freeze Risk",
                    "Blueberry Phenology",
                    "Drought Monitoring",
                    "Drought Monitor Map",
                    "Monthly Drought Outlook",
                    "Activity Planner",
                  ].map((d, i) => (
                    <div
                      key={i}
                      className="my-1 px-6 w-1/3 px-2 overflow-hidden text-xs text-center font-semibold underline text-primary-700 border-r"
                    >
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* right block */}
        <div className="w-1/2 px-6">
          <StationMap></StationMap>
        </div>
      </div>
    </section>

    {/* blog section */}
    <section className="mt-24 p-6 bg-secondary-100">
      <h3 className="text-5xl font-semibold text-secondary-900 text-center">
        Recent News
      </h3>

      <div className="mt-12 flex flex-wrap -mx-6 overflow-hidden">
        {[
          "June 19, 2018",
          "September 23, 2018",
          "Jannuary 14, 2018",
          "April 8, 2017",
        ].map((d, i) => {
          return (
            <div key={i} className="my-6 px-6 w-1/2">
              <Card title={d} btnLabel="Read Article" color="secondary">
                <div className="p-4 bg-white">
                  <h3 className="text-secondary-900 text-2xl font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="mt-4 text-secondary-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sit est quae atque quas quod temporibus voluptate libero
                    earum. Velit, sunt autem! Voluptas perferendis in ducimus!
                    Ipsum in accusamus delectus ipsa.
                  </p>
                </div>
              </Card>
            </div>
          )
        })}

        <div className="mt-16 m-auto">
          <button className="flex items-center py-2 px-4 text-2xl tracking-wider bg-white text-secondary-900 rounded-full border border-secondary-200 hover:text-secondary-700">
            See All News{" "}
            <span className="ml-3">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      </div>
    </section>

    {/* footer section */}
    <footer>
      <section className="p-12 mt-16">
        <h3 className="text-4xl text-center">Disclaimer</h3>
        <p className=" w-3/5 mt-4 m-auto text-center  leading-relaxed">
          Accuracy of the weather data is the responsibility of the owners of
          the weather station instruments. NEWA is not responsible for accuracy
          of the weather data collected by instruments in the network. If you
          notice erroneous or missing weather data, contact NEWA and we will
          contact the owner of the instrument.
        </p>
      </section>

      <section className="flex justify-around items-center p-12 mt-16 bg-primary-300 text-primary-900 font-semibold tracking-widest">
        <span className="border-b border-primary-900">Contact Us</span>
        <span className="border-b border-primary-900">Partners</span>
        <span className="border-b border-primary-900">Become a Partner</span>
        <span className="border-b border-primary-900">About Us</span>
        <span className="border-b border-primary-900">Press Room</span>
      </section>

      <section className="p-12 mt-6">
        <div className="flex flex-wrap -mx-4 overflow-hidden text-gray-700">
          <div className="my-4 px-4 w-1/3 overflow-hidden">
            <h3 className="text-3xl font-semibold">Brought to You By:</h3>
          </div>

          <div className="my-4 px-4 w-2/3 overflow-hidden">
            <div className="flex justify-between">
              {[1, 2, 3, 4, 5].map((d, i) => (
                <FontAwesomeIcon key={i} size="3x" icon={faUniversity} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="p-12 mt-6 bg-gray-100 text-sm">
        <div className="flex justify-center items-center">
          <span className="mr-4">
            <FontAwesomeIcon
              size="3x"
              icon={faUniversalAccess}
              className="text-gray-900"
            />
          </span>
          <span>
            If you have disability and are having trouble accessing information
            on this website or need materils in an alternate format, contact{" "}
            <a
              href="mailto:web-accessibility@cornell.edu"
              className="underline text-secondary-500 font-semibold"
            >
              web-accessibility@cornell.edu
            </a>{" "}
            for assistance.
          </span>
        </div>

        <div className="mt-8 flex items-center">
          <span className="mr-auto">
            © 2009-{new Date().getFullYear()} NYS IPM Program, Cornell
            University
          </span>
          <div className="font-semibold underline text-secondary-500">
            <span className="mr-8">Contact Us</span>
            <span>Admin Login</span>
          </div>
        </div>
      </section>
    </footer>
  </Layout>
)

export default IndexPage
