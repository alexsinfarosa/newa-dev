import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MapIcon from "../utils/weatherIcons"
import { format } from "date-fns"
import { calculateGdd } from "../utils/utils"

import Card from "./reusable/card"

const WeatherStationOverview = ({ selectedStation }) => {
  const { data, isLoading, isError } = selectedStation
  console.log(data, isLoading, isError)

  return (
    <Card
      title={
        isLoading || isError || !data
          ? `Weather Station Overview`
          : data && data.meta.name
      }
      btnLabel="All Details"
      color="primary"
    >
      {/* Body */}
      {isLoading ? (
        <div className="w-full h-80 flex justify-center items-center">
          <FontAwesomeIcon icon="spinner" size="2x" spin></FontAwesomeIcon>
        </div>
      ) : (
        <>
          {isError ? (
            <div className="w-full h-80 flex justify-center items-center">
              No Data Available
            </div>
          ) : (
            <>
              {!data ? (
                <div className="w-full h-80 flex justify-center items-center">
                  Select a Station
                </div>
              ) : (
                <div>
                  <div className="p-4 bg-white">
                    <div className="flex -mx-4">
                      <div className="w-1/2 p-4 inline-flex flex-col justify-center items-center">
                        <span className="py-1 px-3 bg-primary-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                          active
                        </span>

                        <h4 className="mt-2 text-primary-900 font-semibold uppercase tracking-wider">
                          Summary
                        </h4>

                        <div className="mt-3 flex items-center">
                          <FontAwesomeIcon
                            icon={{
                              prefix: "fal",
                              iconName: `sun`,
                            }}
                            size="3x"
                            className="text-primary-900"
                          />

                          <h3 className="ml-4 text-4xl font-semibold">?˚F</h3>
                        </div>

                        <hr className="mt-4 mb-2 border w-48" />

                        <div className="flex justify-between">
                          <div className="mr-4 text-secondary-700 font-bold">
                            Humidity: ?%
                          </div>
                        </div>
                      </div>

                      <div className="w-1/2 p-4 flex justify-center items-center">
                        <div className="flex justify-center items-center flex-col bg-primary-100 w-48 h-48 rounded-lg shadow-lg">
                          <h3 className="text-primary-900 font-semibold tracking-wider">
                            Cumulative
                          </h3>
                          <h3 className="text-primary-900 font-semibold tracking-wider">
                            Degree Days
                          </h3>

                          <h3 className="mt-6 text-2xl font-bold">846.0</h3>
                          <h6 className="text-xs">Base 50˚</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex bg-white">
                    {["ONE", "TWO", "THREE", "FOUR"].map((day, i) => {
                      return (
                        <div key={i} className="flex-1 mx-1">
                          <div className="flex-1 justify-center items-center p-2 bg-primary-100 rounded-t-lg">
                            <h3 className="text-sm text-center  tracking-wider text-primary-900 font-semibold ">
                              {day}
                            </h3>

                            <div className="mt-2 flex items-center justify-center">
                              <FontAwesomeIcon
                                icon={{
                                  prefix: "fal",
                                  iconName: `sun`,
                                }}
                                size="lg"
                                className="text-primary-900"
                              />
                              <span className="ml-2 text-sm text-secondary-700 font-bold">
                                ?˚
                              </span>
                              <span className="ml-1 text-sm text-red-700 font-bold">
                                ?˚
                              </span>
                            </div>
                          </div>

                          {i < 3 && (
                            <div className="w-1 h-full m-auto relative overflow-hidden">
                              <div className="absolute w-full h-8 bg-red-700 inset-y-0 left-0"></div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </Card>
  )
}

export default WeatherStationOverview
