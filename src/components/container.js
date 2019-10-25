import React from "react"
import PropTypes from "prop-types"


const Container = ({ id, aria, classes, children, padding, display, flexDirection }) => {

  return (
    <div 
      id={id}
      aria-label={aria}
      className={classes || `container ${display} ${flexDirection || "flex-col"} mx-auto ${padding || ""}` }>
        {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
