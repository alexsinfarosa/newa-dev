import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons"

const Card = ({ title, children, btnLabel }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center py-3 tracking-wider px-4 bg-primary-100">
        <h3 className="text-primary-700 text-lg mr-auto font-semibold">
          {title}
        </h3>

        <button className="flex items-center py-2 px-4 bg-white text-primary-600 rounded-full border border-primary-200">
          {btnLabel}
          <span className="ml-3">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>

      {children}
    </div>
  )
}

export default Card
