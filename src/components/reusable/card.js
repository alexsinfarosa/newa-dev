import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons"
import DefaultButton  from "./defaultButton"

const Card = ({ title, children, btnLabel, color }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden text-left">
      {/* Header */}
      <div
        className={`flex items-center py-3 px-6 tracking-wide  bg-${color}-600`}
      >
        <h3
          className={`text-white text-left text-lg mr-auto max-w-8 font-semibold truncate`}
        >
          {title}
        </h3>

        <DefaultButton btnLabel={btnLabel} color={color}></DefaultButton >
        
      </div>

      {children}
    </div>
  )
}

export default Card
