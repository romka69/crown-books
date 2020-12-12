import React from "react"

import PropTypes from "prop-types"

const Price = ({ label, val, className }) => {
  return (
    <div className={className}>
      <div>{label}</div>
      <div>${val}</div>
    </div>
  )
}

Price.propTypes = {
  label: PropTypes.string,
  val: PropTypes.number,
}

Price.defaultProps = {
  label: "Empty price",
  val: 0,
}

export default Price
