import React from "react"

import PropTypes from "prop-types"

const PopularTag = ({ feeds }) => {
  if (Number.parseInt(feeds) > 20)
    return (
      <div style={styles.popular}>
        Popular
      </div>
    )

  return ""
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
