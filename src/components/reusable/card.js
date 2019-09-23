import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons"

const Card = ({ title, children, btnLabel, color }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div
        className={`flex items-center py-3 tracking-widest px-4 bg-${color}-300`}
      >
        <h3 className={`text-${color}-900 text-lg mr-auto font-semibold`}>
          {title}
        </h3>

        <button
          className={`flex items-center py-2 px-4 bg-white text-${color}-900 rounded-full border border-${color}-300 hover:text-${color}-700`}
        >
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
