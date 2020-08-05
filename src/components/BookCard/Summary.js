import React from "react"

import PropTypes from "prop-types"

const Summary = ({ text }) => {
  return (
    <div style={styles.annotation}>{text}</div>
  )
}

Summary.propTypes = {
  text: PropTypes.string,
}

Summary.defaultProps = {
  text: "Empty annotation",
}

export default Summary

const styles = {
  annotation: {
    marginTop: "10px",
  },
}
