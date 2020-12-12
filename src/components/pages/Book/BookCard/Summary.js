import React from "react"

import PropTypes from "prop-types"

const Summary = ({ children }) => {
  return (
    <div className="mt-3">
      {children}
    </div>
  )
}

Summary.propTypes = {
  children: PropTypes.string,
}

Summary.defaultProps = {
  children: "Empty annotation",
}

export default Summary
