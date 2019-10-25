import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons"

const LargeButton = ({ btnLabel, color }) => {
  return (
  <button
    className={`flex items-center py-2 px-4 bg-white text-xl text-${color}-700 rounded-full border-2 border-${color}-300 hover:border-${color}-300 hover:bg-${color}-600 hover:text-white`}
    style={{ minWidth: 100 }}  >
    {btnLabel}
    <span className="ml-3">
      <FontAwesomeIcon icon={faArrowRight} />
    </span>
  </button>
  )
}

export default LargeButton 
