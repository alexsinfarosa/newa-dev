import React from "react"
import PropTypes from "prop-types"

const Section = ({ id, aria, classes, children, bgColor, margin }) => {

  return (
    <section 
      id={id}
      aria-label={aria}
      className={ classes || `flex flex-col ${margin} text-center ${bgColor}` }>
        {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
