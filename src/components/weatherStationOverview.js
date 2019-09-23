import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faSunCloud } from "@fortawesome/pro-solid-svg-icons"

import Card from "./reusable/card"

const WeatherStationOverview = () => {
  return (
    <Card title="Weather Station Overview" btnLabel="All Details">
      {/* Body */}
      <div className="p-4 bg-white">
        <div className="flex -mx-4">
          <div className="w-1/2 p-4 inline-flex flex-col justify-center items-center">
            <span className="py-1 px-3 bg-green-500 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
              active
            </span>

            <h4 className="mt-2 text-gray-700 font-semibold uppercase tracking-wider">
              Current Conditions
            </h4>

            <div className="mt-3 flex items-center">
              <FontAwesomeIcon
                icon={faSunCloud}
                size="3x"
                className="text-gray-700"
              />

              <h3 className="ml-4 text-4xl font-semibold">63.0 ˚F</h3>
            </div>

            <hr className="mt-4 mb-2 border w-48" />

            <div className="flex justify-between">
              <div className="mr-4 text-secondary-700 font-bold">Low: 52˚</div>
              <div className="text-red-700 font-bold">High: 82˚</div>
            </div>
          </div>

          <div className="w-1/2 p-4 flex justify-center items-center">
            <div className="flex justify-center items-center flex-col bg-gray-100 w-48 h-48 rounded-lg shadow-lg">
              <h3 className="text-gray-700 font-semibold tracking-wider">
                Cumulative
              </h3>
              <h3 className="text-gray-700 font-semibold tracking-wider">
                Degree Days
              </h3>

              <h3 className="mt-6 text-2xl font-semibold">846.0</h3>
              <h6 className="text-xs">Base 50˚</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex bg-white">
        {["Tomorrow", "Sept 20", "Sept 21", "Sept 22"].map((d, i) => (
          <>
            <div
              key={i}
              className="flex-1 justify-center items-center p-2 bg-gray-100 rounded-t-lg"
            >
              <h3 className="text-sm text-center tracking-wide text-gray-700 font-semibold ">
                {d}
              </h3>

              <div className="mt-2 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faSunCloud}
                  size="lg"
                  className="text-gray-700"
                />
                <span className="ml-2 text-sm text-secondary-700 font-bold">
                  52˚
                </span>
                <span className="ml-1 text-sm text-red-700 font-bold">82˚</span>
              </div>
            </div>

            {i < 3 && (
              <div className="w-1 h-full m-auto relative overflow-hidden">
                <div className="absolute w-full h-8 bg-red-700 inset-y-0 left-0"></div>
              </div>
            )}
          </>
        ))}
      </div>
    </Card>
  )
}

export default WeatherStationOverview
