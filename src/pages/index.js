import React from "react"
import { Link } from "gatsby"
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearch,
  faArrowRight,
  faUniversalAccess,
  faEngineWarning,
  faUniversity,
  faChevronRight
} from "@fortawesome/pro-regular-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

import dataFetchReducer from "../utils/dataFetchReducer"

import Carousel from "../components/carousel"
import WeatherStationOverview from "../components/weatherStationOverview"
import Card from "../components/reusable/card"
import StationMap from "../components/stationMap"
import Section from "../components/section"
import Container from "../components/container"

import { usePosition } from "../utils/hooks/usePosition"
import LargeButton from "../components/reusable/largeButton"

const IndexPage = () => {
  const [selectedStation, dispatchSelectedStation] = React.useReducer(
    dataFetchReducer,
    {
      isLoading: false,
      isError: false,
      data: null,
    }
  )

  const { latitude, longitude, timestamp, accuracy, error } = usePosition()
  // console.log(latitude, longitude, timestamp, accuracy, error)

  return (
    <Layout>
      <SEO title="Home" />

      {/* carousel section */}
      <Section id="" aria="test" classes="flex my-0 text-center text-white bg-primary-600">
        <Container classes="container mx-auto my8">
          <div className="text-center tracking-wider text-2xl py-4 font-light">
            Your source for <span className="font-bold">weather</span> and{" "}
            <span className="font-bold">integrated pest management</span> in the
            North East
          </div>
        </Container>
      </Section>
      <Section id="banner" aria="" classes="flex flex-col my-0 bg-gray-200">
        <Container classes="container-fluid">
          <Carousel></Carousel>
        </Container>
      </Section>

      {/* search section */}
      {/* station details and map section */}
      <Section id="test" aria="test" margin="my-12">
        <Container>
          <h2 className="text-6xl font-semibold text-gray-800">
            Find a Weather Station
            <span className="block text-gray-700 text-3xl">
              for up-to-date IPM forecasts and weather data.
            </span>
          </h2>
          <div className="inline-flex list-none mt-6">
          <form 
            id="stations-search-form" 
            role="search" 
            action=""
            className="relative">
            <label for="stations-search-query" class="sr-only">Search:</label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon icon={faSearch} className="text-gray-600 ml-2" />
            </div>
            <input
              id="stations-search-query"
              type="search"
              name="search-stations"
              placeholder="Search by zipcode or city, state..."
              value=""
              size="30"
              aria-label="Search for a weather station"
              className="py-3 px-12 w-auto rounded-full bg-gray-100 border-2 border-gray-300 placeholder-gray-700 focus:outline-none focus:bg-white focus:bg-transparent focus:border-primary-300"
            ></input>

            <button 
              className="btn btn-primary absolute right-0 items-center px-4"
              style={{ top: 8 + "px", right: 8 + "px", width:36 + "px", height: 36 + "px"}}
              name="btnG" 
              id="staions-search-submit" 
              type="submit" 
              value="go">
              <span class="sr-only">Submit Station Search</span>
                <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
            </button>
          </form>
            
            
          </div>
        </Container>
        <Container classes="container mx-auto mt-12">
        <div className="flex flex-col md:flex-row">
          {/* left block */}
          <div className="w-full md:w-1/2 px-3">
            <StationMap
              userLat={latitude}
              userLon={longitude}
              dispatchSelectedStation={dispatchSelectedStation}
            ></StationMap>
          </div>

          {/* right block */}
          
          <div className="w-full md:w-1/2 px-3 mt-6 md:mt-0">
            <WeatherStationOverview
              selectedStation={selectedStation}
            ></WeatherStationOverview>

            <div className="mt-6">
              <Card
                title="Pest &amp; Disease Forecasts"
                btnLabel="All Reports"
                color="primary"
              >
                <div className="p-4 bg-white">
                  <div className="flex flex-wrap overflow-hidden">
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
                        className="my-1 px-3 w-1/3 px-2 overflow-hidden text-xs text-center font-semibold underline text-primary-700 border-r"
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

            <div className="mt-6">
              <Card
                title="Crop Management Tool"
                btnLabel="All Tools"
                color="primary"
              >
                <div className="p-4 bg-white">
                  <div className="flex flex-wrap overflow-hidden">
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
                        className="my-1 px-3 w-1/3 px-2 overflow-hidden text-xs text-center font-semibold underline text-primary-700 border-r"
                      >
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
        </div>

        </Container>
      </Section>

      {/* <section className="mt-8 px-6 bg-gray-100 ">
        <code>
          {JSON.stringify(
            { latitude, longitude, accuracy: `${accuracy}m`, error },
            null,
            2
          )}
        </code>
      </section> */}

      {/* blog section */}
      <Section bgColor="bg-gray-100">
        <Container padding="py-12">
        <h2 className="text-4xl font-semibold text-secondary-900 text-center">
          Recent News
        </h2>

        <div className="mt-6 flex flex-wrap -mx-6 overflow-hidden">
          {[
            "June 19, 2018",
            "September 23, 2018",
            "Jannuary 14, 2018",
            "April 8, 2017",
          ].map((d, i) => {
            return (
              <div key={i} className="my-6 px-6 w-full md:w-1/2">
                <Card title={d} btnLabel="Read Article" color="secondary">
                  <div className="p-6 bg-white">
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

          <div className="mt-6 m-auto">
            <a href="#" class="btn btn-secondary btn-large">See All News</a>
          </div>
        </div>
        </Container>
      </Section>

      {/* footer section */}
      <footer>
        <Section margin="my-12">
          <Container>
            <h4 className="text-4xl font-semibold text-center">Disclaimer</h4>
            <p className=" w-3/5 mt-4 m-auto text-center  leading-relaxed">
              Accuracy of the weather data is the responsibility of the owners of
              the weather station instruments. NEWA is not responsible for
              accuracy of the weather data collected by instruments in the
              network. If you notice erroneous or missing weather data, contact
              NEWA and we will contact the owner of the instrument.
            </p>
          </Container>
        </Section>
        <Section bgColor="bg-primary-600">
          <Container classes="container mx-auto py-12 flex justify-around items-center text-white tracking-wider">
            <Link className="border-b-2 border-white">Contact Us</Link>
            <Link className="border-b-2 border-white">Partners</Link>
            <Link className="border-b-2 border-white">Become a Partner</Link>
            <Link className="border-b-2 border-white">About Us</Link>
            <Link className="border-b-2 border-white">Press Room</Link>
          </Container>
        </Section>
        <Section margin="my-12">
          <Container classes="container mx-auto flex flex-wrap text-gray-700">
            <div className="my-4 pr-12 ">
              <h4 className="text-left text-3xl font-semibold">Brought to You By:</h4>
            </div>
            <div className="my-4 w-auto flex-grow">
              <div className="flex justify-between">
                {[1, 2, 3, 4, 5].map((d, i) => (
                  <FontAwesomeIcon key={i} size="3x" icon={faUniversity} />
                ))}
              </div>
            </div>
          </Container>
        </Section>
        <Section bgColor="bg-gray-100">
          <Container padding="py-12">
          <div className="flex items-center text-sm">
            <span className="mr-4">
              <FontAwesomeIcon
                size="3x"
                icon={faUniversalAccess}
                className="text-red-700"
              />
            </span>
            <span>
              If you have disability and are having trouble accessing
              information on this website or need materils in an alternate
              format, contact{" "}
              <a
                href="mailto:web-accessibility@cornell.edu"
                className="underline text-secondary-500 font-semibold"
              >
                web-accessibility@cornell.edu
              </a>{" "}
              for assistance.
            </span>
          </div>

          <div className="mt-6 flex items-center text-sm">
            <span className="mr-auto">
              © 2009-{new Date().getFullYear()} NYS IPM Program, Cornell
              University
            </span>
            <div className="font-semibold underline text-secondary-500">
              <span className="mr-8">Contact Us</span>
              <span>Admin Login</span>
            </div>
          </div>

          </Container>
        </Section>
      </footer>
    </Layout>
  )
}

export default IndexPage
