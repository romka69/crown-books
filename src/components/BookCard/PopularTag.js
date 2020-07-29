import React from "react"

import PropTypes from "prop-types"

class PopularTag extends React.Component {
  render () {
    if (Number.parseInt(this.props.feeds) > 20)
      return (
        <div style={styles.popular}>
          Popular
        </div>
      )

    return ""
  }
}

PopularTag.propTypes = {
  feeds: PropTypes.string,
}

PopularTag.defaultProps = {
  feeds: "Empty feeds",
}

export default PopularTag

const styles = {
  popular: {
    fontWeight: "600",
    fontSize: "14px",
    color: "gray",
  },
}
