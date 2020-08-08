import React from "react"

import PropTypes from "prop-types"

const Price = ({ label, val }) => {
  return (
    <div style={styles.price}>
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

const styles = {
  price: {
    flex: "0 0 25%",
    maxWidth: "25%",
  },
}
