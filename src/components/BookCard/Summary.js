import React from "react"

import PropTypes from "prop-types"

class Summary extends React.Component {
  render () {
    return (
      <div style={styles.annotation}>{this.props.text}</div>
    )
  }
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
