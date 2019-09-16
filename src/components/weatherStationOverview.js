import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons"
import { faSunCloud } from "@fortawesome/pro-solid-svg-icons"

const WeatherStationOverview = () => {
  return (
    <div className=" bg-white border-gray-100 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center py-3 tracking-wider px-4 bg-purple-100">
        <h3 className="text-purple-700 text-lg mr-auto font-semibold">
          Geneva Station Overview
        </h3>

        <button className="flex items-center py-1 px-4 bg-white text-primary-700 rounded-full border">
          All Details
          <span className="ml-3">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>

      {/* Body */}
      <div className="flex p-8">
        <div className="flex-1 p-8">
          <span className="py-1 px-3 bg-green-700 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
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

          <hr className="mt-4 mb-1" />

          <div className="flex justify-between">
            <div className="text-blue-700 font-bold">Low: 52˚</div>
            <div className="text-red-700 font-bold">High: 82˚</div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center p-8">
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

      {/* Footer */}
      <div className="flex">
        {["Tomorrow", "Sept 20", "Sept 21", "Sept 22"].map((d, i) => (
          <div
            key={i}
            className="flex-1 justify-center items-center p-4 bg-gray-100 border border-r-0"
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
              <span className="ml-2 text-sm text-blue-700 font-bold">52˚</span>
              <span className="ml-1 text-sm text-red-700 font-bold">82˚</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherStationOverview
