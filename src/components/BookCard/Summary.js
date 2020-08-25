import React from "react"

import PropTypes from "prop-types"

const Summary = ({ text }) => {
  return (
    <div className="mt-3">{text}</div>
  )
}

Summary.propTypes = {
  text: PropTypes.string,
}

Summary.defaultProps = {
  text: "Empty annotation",
}

export default Summary
