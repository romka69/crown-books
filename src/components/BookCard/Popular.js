import React from "react"

import PropTypes from "prop-types"

class Popular extends React.Component {
  render () {
    if (this.props.feeds > 20)
      return (
        <div style={styles.popular}>
          Popular
        </div>
      )

    return ""
  }
}

Popular.propTypes = {
  feeds: PropTypes.number,
}

Popular.defaultProps = {
  feeds: 0,
}

export default Popular

const styles = {
  popular: {
    fontWeight: "600",
    fontSize: "14px",
    color: "gray",
  },
}
